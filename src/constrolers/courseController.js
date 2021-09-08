import Course from "../models/courseModel";

const index = async (req, res, next) => {
  try {
    const courses = await Course.find({});

    res.render("courses/index", { courses });
  } catch (err) {
    console.log(
      `Les cours ne sont pas disponible pour le moment : ${err.message}`
    );
    next(err);
  }
};

const createCourse = async (req, res, next) => {
  try {
    let courseParams = {
      title: req.body.title,
      description: req.body.description,
      maxStudents: req.body.maxStudents,
      cost: req.body.cost,
    };
    let course = await Course.create(courseParams);

    res.redirect("/courses");
  } catch (err) {
    console.log(`Error saving course : ${err.message}`);
    next(err);
  }
};

const showCourse = async (req, res, next) => {
  try {
    let courseId = await Course.findById(req.params.id);
    res.render("course/show", { course: course });
  } catch (err) {
    console.log(`Error fetching course by ID : ${err.message}`);
    next(err);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    let courseId = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.render(`courses/${courseId}`, { course: course });
  } catch (err) {
    console.log(`Error fetching course by ID : ${err.message}`);
    next(err);
  }
};

const editCourse = async (req, res, next) => {
  try {
    let courseId = await Course.findById(req.params.courseId);
    res.render("courses/edit", { course: course });
  } catch (err) {
    console.log(`Error fetching course by ID :${err.message}`);
    next(err);
  }
};
const deleteCourse = async (req, res, next) => {
  try {
    let courseId = await Course.findByIdAndDelete(req.params.id);

    res.redirect("/courses");
  } catch (err) {
    console.log(`Error deleting course by ID :${err.message}`);
    next(err);
  }
};

export {
  index,
  createCourse,
  showCourse,
  updateCourse,
  editCourse,
  deleteCourse,
};
