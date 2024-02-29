
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '5baa67db356d440095f94da0e3641eaf',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


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
    rollbar.info('they want to know all the TODOS!!!')
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


