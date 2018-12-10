const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema= new Schema({
   task:{
       type : String,
       required : true,
       index: { unique: true }
   },
    date: {
       type : Date,
        default : Date.now(),
    }
});

module.exports = module.exports = mongoose.model('Item', ItemSchema);