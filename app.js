const fs = require("fs");
const express = require("express");
const { application } = require("express");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  if(id> tours.length){
    return res.status(404).json({ 
      status: 'not_found',
      message: 'invalid id'
    })
  }

  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'ok',
    data:{
      tour
    }
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "successfull",
        data: {
          tours: newTour,
        },
      });
    }
  );
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});