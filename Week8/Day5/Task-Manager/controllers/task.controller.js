const fs = require('fs');

const getAllTasks = (req, res) => {
  fs.readFile("./config/task.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(rawData)
      res.json(data); 
    }
})
};

const getTaskById = (req, res) => {
  const {id} = req.params
  fs.readFile("./config/task.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(rawData)
      let task = data.find(item => item.id == id)
      res.json(task); 
    }
})
};

const addTask = (req, res) => {
  const {name, date, complete = false} = req.body
  let validDate = new Date(date) //2023-11-09
  console.log((validDate));
  if (typeof name === 'string' && validDate){
    fs.readFile("./config/task.json", "utf-8", function (err, rawData) {
      if (err) {
        console.log(err);
        res.json({msg: err})
      } else {
        let data = JSON.parse(rawData)
        const newTask = {id: data.length+1, name, date: validDate, complete}
        data.push(newTask)
        fs.writeFile('./config/task.json', JSON.stringify(data), (err) => {
          if (!err) {
            res.json({msg: 'Done'})
          }
        })
      }
    })
  }
}

const UpdateTask = (req, res) => {
  const {id} = req.params
  const {name, date = '', complete = false} = req.body
  let validDate=new Date(date) //2023-11-09
  fs.readFile("./config/task.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
      res.json({msg: err})
      } else {
        let data = JSON.parse(rawData);
        let taskInd = data.findIndex(item => item.id == id);
        if (typeof name === 'string' && date == ''){
          data[taskInd].name = name
          data[taskInd].complete = complete
        } else {
          data[taskInd].name = name
          data[taskInd].complete = complete
          data[taskInd].date = validDate
        }
        
        fs.writeFile('./config/task.json', JSON.stringify(data), (err) => {
        if (!err) {
          res.status(200).json({msg: 'Done'})
          }
        })
      }
    })
}


const DeleteTask = (req, res) => {
  const {id} = req.params
  fs.readFile("./config/task.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(rawData)
      let taskInd = data.findIndex(item => item.id == id)
      data.splice(taskInd, 1)
      fs.writeFile('./config/task.json', JSON.stringify(data), (err) => {
        if (!err) {
          res.status(200).json({msg: 'Done'});
        }
      }) 
    }
})
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  UpdateTask,
  DeleteTask
};
