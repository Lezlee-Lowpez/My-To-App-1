const myToDos = [
  {
    id: 1,
    task: "Have some fun",
  },
  {
    id: 2,
    task: "Solve world Hunger...then tell no one",
  },
];

let globalId = 3;

module.exports = {
  getAllToDos: (req, res) => {
    res.status(200).send(myToDos);
    // console.log(myToDos);
  },

  addAToDo: (req, res) => {
    //
    console.log(req.body)
    const body = req.body;

    //create the object to add to our "database"
    const newTaskObj = {
        id : globalId,
        task : body.task,
    }

    globalId++

    //push new object into "database"
    myToDos.push(newTaskObj);
    console.log(myToDos);

    res.status(200).send();
  },

};


