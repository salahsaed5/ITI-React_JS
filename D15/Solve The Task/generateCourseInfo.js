function generateCourseInfo(courseInfo) {
  const defaultValues = {
    courseName: "ES6",
    courseDuration: "3 days",
    courseOwner: "JavaScript",
  };

  var mergedCourseInfo = Object.assign({}, defaultValues, courseInfo);

  const allowedProperties = ["courseName", "courseDuration", "courseOwner"];
  var receivedProperties = Object.keys(mergedCourseInfo);

  var invalidProperties = receivedProperties.filter(
    (property) => !allowedProperties.includes(property)
  );
  if (invalidProperties.length > 0) {
    throw new Error(
      `Invalid properties found: ${invalidProperties.join(", ")}`
    );
  }

  console.log("\n\nCourse Information:");
  console.log(`Course Name: ${mergedCourseInfo.courseName}`);
  console.log(`Duration: ${mergedCourseInfo.courseDuration}`);
  console.log(`Owner: ${mergedCourseInfo.courseOwner}`);
}

generateCourseInfo({
  courseName: "React",
  courseDuration: "5 days",
  courseOwner: "GOOGLE",
});

// generateCourseInfo();


// generateCourseInfo({
//   courseName: "JAVA",
//   courseDuration: "4 days",
//   courseOwner: "ITI",
//   Property: "Extra",
// });


// generateCourseInfo({
//   courseName: "NODE.JS",
//   courseDuration: "4 days",
//   courseOwner: "ITI",
// });


 