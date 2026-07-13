import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    skillsRequired: [
      {
        type: String,
      },
    ],
    budget: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
    experienceLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Expert"],
      default: "Beginner",
    },
    attachments: [
      {
        type: String,
        url: String,
      },
    ],
    status: {
      type: String,
      enum: ["Open", "InProgress", "Completed", "Cancelled"],
      default: "Open",
    },
    selectedFreelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const project = mongoose.model("Project", projectSchema);
export default project;
