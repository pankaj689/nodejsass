const mongoose =require('mongoose');
const { Schema } = mongoose;

const ass4chema = new Schema({
  name:{type:String, required:true},
  email:{type:String, unique:true},
  isPromoted:{type:Boolean,default:null}
  }
);
const ass4sc= mongoose.model('colass4',ass4chema);
module.exports=ass4sc

