import mongoose from "mongoose";

const contractSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    freelancerId: {
      id: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Pending", "Active", "Completed", "Cancelled"],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Partial", "Paid"],
      default: "Pending",
    },
    completionDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const contract = mongoose.model("Contract", contractSchema);
export default contract;
