const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Attendance = mongoose.model('Attendance', {
    user_id: {
        type: String
    },
    attendance_date: {
        type: Date
    },
    created_at: {
        type: Date,
        default: new Date
    }
});

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


//데이터 추가
// var newAttendance = new Attendance({
//     user_id: '123',
//     attendance_date: new Date()
// });
// newAttendance.save().then(() => console.log('complete'))

//데이터 찾기

// Attendance.find({user_id: '123'}).then((doc, err) => {
//     console.log(doc);
// });

module.exports = {Attendance};