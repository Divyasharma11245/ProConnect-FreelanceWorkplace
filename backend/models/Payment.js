import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    contractId: {
      type: mongoose.Schema.ObjectId,
      ref: "Contract",
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "INR",
    },
    paymentMethod: {
      type: "String",
      enum: ["RazorpayUPI", "Card", "NetBanking"],
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed", "Refunded"],
      default: "Pending",
    },
    paidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);


const Payment = mongoose.model("Payment",paymentSchema);
export default Payment;