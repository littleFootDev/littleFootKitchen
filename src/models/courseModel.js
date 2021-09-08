import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Le cour doit avoir un titre"],
    },
    description: {
      type: String,
      maxLength: [100, "La description ne dois pas dépassée 100 caractére"],
      minLength: [10, "La description ne dois avoir minimun 10 caractére"],
    },
    maxStudents: {
      type: Number,
      default: 0,
      min: [
        0,
        "Ce cours ne peut pas avoir de valeur négative pour les étudients",
      ],
    },
    cost: {
      type: Number,
      default: 0,
      min: [0, "Ce cour ne peut pas avoir de coût négatif"],
    },
  },
  { timestamps: true }
);
