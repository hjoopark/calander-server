var express = require('express');
var router = express.Router();
var models = require('../models');


// 출석된 데이터 가져오기
router.get('/', function(req, res, next) {
  models.Attendance
    .find({user_id: '123'})
    .then(dates => {
      res.json(dates);
    })
});

// 출석 하기
router.post('/', function(req, res, next) {
  const attendance_date = req.body.attendance_date;
  if(!attendance_date) return res.status(400).end();

  // const isConflic = dates.filter(date => date.date === date).length;
  // if(isConflic) return res.status(409).end();
  models.Attendance
    .create(newAttendance => {
      var newAttendance = new Attendance({
        user_id: '123',
        attendance_date: new Date()
      });
      newAttendance.save()
    })
    .then(attendance => {
        res.status(201).json(attendance);
        console.log('complete');
    })

  // const id = 1;
  // const date = {id, date};
  // dates.push(date);
});

module.exports = router;
