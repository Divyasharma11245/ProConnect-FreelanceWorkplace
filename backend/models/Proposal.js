import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
      required: true,
    },
    coverLetter: {
      type: String,
    },
    bidAmount: {
      type: Number,
    },
    deliveryTime: {
      type: Date,
    },
    attachments: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "withdrawn"],
    },
  },
  {
    timestamps: true,
  },
);

const proposal = mongoose.model("Proposal", proposalSchema);
export default proposal;
