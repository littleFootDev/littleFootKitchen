import { Router } from "express";
import {
  index,
  createCourse,
  showCourse,
  updateCourse,
  editCourse,
  deleteCourse,
} from "../constrolers/courseController";
const courseRoute = Router();

courseRoute.get("/", index);
courseRoute.get("/new", createCourse);
courseRoute.post("/create", createCourse);
courseRoute.get("/:id", showCourse);
courseRoute.get("/:id/edit", editCourse);
courseRoute.post("/:id/update", updateCourse);
courseRoute.get("/:id/delete", deleteCourse);
