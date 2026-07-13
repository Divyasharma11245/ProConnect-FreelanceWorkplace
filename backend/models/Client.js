import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
      unique: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    companyLogo: {
      url: {
        type: String,
        default: "",
      },
    },
    industry: {
      type: String,
      enum: [
        "Information Technology",
        "Finance",
        "Healthcare",
        "Education",
        "Marketing",
        "Other",
      ],
      default: "Information-Technology",
    },
    description: {
      type: String,
    },
    website: {
      url: {
        type: String,
        default: "",
      },
    },
    location: {
      type: String,
    },
    projectsPosted: {
      type: String,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const client = mongoose.model("Client", clientSchema);
export default client;
