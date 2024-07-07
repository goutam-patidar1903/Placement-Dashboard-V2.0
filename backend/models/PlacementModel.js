const mongoose = require('mongoose')

const placementSchema = new mongoose.Schema({
   
    _id : {type:Number , required:true},
   
    name : {type:String , required:true},
   
    placementType: {
    type: String,
    required:true,
        validate: {
      validator: function(v) {
            return v.length === 1;
        },
        message: props => `${props.value} is not a single character!`
        }
    },
    
    company : {type:String , required:true},
    
    salary : {type:Number , required:true},
    
    salaryType: {
    type: String,
    required:true,
        validate: {
      validator: function(v) {
            return v.length === 1;
        },
        message: props => `${props.value} is not a single character!`
        }
    }

},{timestamps:true});

module.exports = mongoose.model('Placement',placementSchema)