export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('http://s-arram.herokuapp.com/api/course/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
