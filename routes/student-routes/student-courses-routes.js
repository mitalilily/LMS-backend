const express = require("express");

const {
  getCoursesByStudentId,
} = require("../../controllers/student-controller/student-courses-controller");

const router = express.Router();

// Get courses purchased by a student
router.get("/get/:studentId", getCoursesByStudentId);

module.exports = router;