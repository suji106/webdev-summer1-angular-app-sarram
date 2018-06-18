export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://s-arram.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('http://s-arram.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
