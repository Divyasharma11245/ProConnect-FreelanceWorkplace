import mongoose from "mongoose";
const freelancerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    headline: {
      type: String,
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
    },
    skills: [
      {
        type: String,
      },
    ],
    experience: {
      type: Number,
      default: 0,
    },
    education: {
      type: String,
      default: "",
    },
    hourlyRate: {
      type: Number,
      default: 0,
    },
    portfolio: {
      title: String,
      description: String,
      projectUrl: String,
      imageUrl: String,
    },
    resume: {
      type: String,
      default: "",
    },
    availablity: {
      type: String,
      enum: ["Available", "Busy", "Unavailable"],
      default: "Available",
    },
    location: {
      type: String,
      default: "",
    },
    language: {
      type: String,
    },
    totalProjects: {
      type: Number,
      default: 0,
    },
    completedProjects: {
      type: number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    totalEarnings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);
const freelancer = mongoose.model("FreeLancer", freelancerSchema);
export default freelancer;
