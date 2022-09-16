



exports.getAllUsers = (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        
      },
    });
  };
  
exports.getUser = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
  
    const user = users.find((el) => el.id === id);
    if (!tour) {
      return res.status(404).json({
        status: "not_found",
        message: "invalid id",
      });
    }
    res.status(200).json({
      status: "ok",
      data: {
        user,
      },
    });
  };
  exports.createUser = (req, res) => {
    console.log(req.body);
  
    const newId = users[users.length - 1].id + 1;
    const newUser = Object.assign({ id: newId }, req.body);
    users.push(newUser);
  
    fs.writeFile(
      `${__dirname}/dev-data/data/users-simple.json`,
      JSON.stringify(users),
      (err) => {
        res.status(201).json({
          status: "successfull",
          data: {
            user: newUser,
          },
        });
      }
    );
  };
  
  exports.updateUser = (req, res) => {
    const id = req.params.id * 1;
  
    const user = users.find((el) => el.id === id);
    if (!user) {
      return res.status(404).json({
        status: "ivalid id here",
        message: "invalid id",
      });
    }
    res.status(200).json({
      data: {
        user: "<Updated tour >",
      },
    });
  };
  
  exports.deleteUser = (req, res) => {
    const id = req.params.id * 1;
  
    const user = user.find((el) => el.id === id);
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
  