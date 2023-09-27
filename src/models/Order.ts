import mongoose, { Schema, Types } from 'mongoose';

export interface Order {
  _id?: Types.ObjectId;
  date: Date;
  address: string;
  cardHolder: string;
  cardNumber: string;
  orderItems: {
    product: Types.ObjectId;
    qty: number;
    price: number;
  }[];
}

const OrderSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cardHolder: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
    unique: true,
  },
  OrderItems: [
    {
      _id: false,
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      qty: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.models.Product || mongoose.model('Order', OrderSchema);