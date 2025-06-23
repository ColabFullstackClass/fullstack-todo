import { model, Schema } from "mongoose";
const todoSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:String,
    isDeleted:{type:Boolean,default:false},
    isCompleted:{type:Boolean,default:false},
    
})


const Todo=model('Todo',todoSchema)

export default Todo; 