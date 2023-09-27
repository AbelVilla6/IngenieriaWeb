import mongoose, { Schema, Types } from 'mongoose';

export interface Product {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  img: string;
  price: Number;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);