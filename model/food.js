import mongoose from "mongoose";

const foodSchema  = mongoose.Schema({
    title:{type:String,required:true},
    ingredients:{type:[String], required:true},
    category:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String,required:true},
    recipes:{type:[String],required:true},
    createdAt:{type:Date, default: new Date()},
})

export default mongoose.model('Foodie',foodSchema)