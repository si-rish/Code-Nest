import {model, Schema} from "mongoose";

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      comments: [
        {
          user: String,
          content: String,
          createdAt: {
            type: Date,
            default: Date.now,
          },
        }
      ]
    });

const Question = model('Question', questionSchema);


export default Question;