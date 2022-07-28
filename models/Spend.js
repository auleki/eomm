import { Schema, model } from "mongoose";

const spendSchema = new Schema({
  item_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
},
  { timestamps: true }
);

const Spend = model('Spend', spendSchema);

export default Spend;