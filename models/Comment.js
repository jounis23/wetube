import mongoose from "mongoose";

const CommnetSchema = new mongoose.Schema({
  text: {
    type: String,
    requried: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  /*
    video:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
    */
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Commnet", CommnetSchema);
export default model;
