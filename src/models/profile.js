import mongoose from "mongoose";

const { model, Schema } = mongoose;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type: Number,
    required: true
  },
  dateOfBirth:{
    type: Date,
    required: true
  },
  timeOfBirth:{
    type: Date,
    required: true
  },
  gender:{
    type: String,
    required:true
  },
  maritalStatus:{
    type: String,
    required: true
  },
  language:{
    type:String,
    required:true
  },
  profilePictureUrl:{
    type:String,
    required:true
  }
});

const User = model("profile", profileSchema);

export default User;
