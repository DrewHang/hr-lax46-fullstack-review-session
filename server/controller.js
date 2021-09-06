const db = require('../db');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      let sql = 'SELECT students.id, students.name, images.imgurl FROM students JOIN images ON students.id = images.id'
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(418)
        } else {
          res.send(result)
        }
      })

    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name
      let sql = `INSERT INTO students (name) VALUES ('${req.body.name}')`
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err)
          res.sendStatus(418)
        } else {
          res.send('Student Added!')
        }
      })

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      let sql = `UPDATE students SET name = '${req.body.name}' WHERE id = '${req.params.id}'`
      db.query(sql, (err, result) => {
        if(err) {
          console.log(err)
          res.sendStatus(418)
        } else {
          res.send('Name Updated!')
        }
      })

    }
  },

  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      let sql = `INSERT INTO images (imgurl) VALUES ('${req.body.imgurl}')`
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err)
          res.sendStatus(418)
        } else {
          res.send('Image Added!')
        }
      })

    }
  }
};

module.exports = controller