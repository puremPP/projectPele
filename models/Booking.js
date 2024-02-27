const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    Bookdate:{
        type : Date,
        required : true 
    },
    //หรือจะสร้างเป้น bookdateวันแรกกับวันท้าย หรือ array
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    hotel:{
        type:mongoose.Schema.ObjectId,
        ref:'Hotel',
        required:true        
    },
    createdAt:{
        type : Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Booking', BookingSchema);