export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('http://s-arram.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
