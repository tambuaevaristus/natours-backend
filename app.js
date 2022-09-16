const fs = require("fs");
const express = require("express");
const { application } = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(morgan("tiny"));

app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "not_found",
      message: "invalid id",
    });
  }
  res.status(200).json({
    status: "ok",
    data: {
      tour,
    },
  });
};
const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "ivalid id here",
      message: "invalid id",
    });
  }
  res.status(200).json({
    data: {
      tour: "<Updated tour >",
    },
  });
};

const deleteTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "ivalid id here",
      message: "invalid id",
    });
  }
  res.status(204).json({
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getUser = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "not_found",
      message: "invalid id",
    });
  }
  res.status(200).json({
    status: "ok",
    data: {
      tour,
    },
  });
};
const createUser = (req, res) => {
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
};

const updateUser = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "ivalid id here",
      message: "invalid id",
    });
  }
  res.status(200).json({
    data: {
      tour: "<Updated tour >",
    },
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "ivalid id here",
      message: "invalid id",
    });
  }
  res.status(204).json({
    data: null,
  });
};

const tourRouter = express.Router();
const userRouter = express.Router();
app.use('/api/v1/tours', tourRouter)
tourRouter.route("/").get(getAllTours).post(createTour);

tourRouter
  .route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);


app.use('/api/v1/users', userRouter)
userRouter.route("/").get(getAllUsers).post(createUser);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
