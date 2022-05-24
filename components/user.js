import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userschema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    minLength: 6,
  },
  
});
export default mongoose.model("User", userschema);
