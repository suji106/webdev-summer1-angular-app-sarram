export class QuizServiceClient {

  loadSubmissions(quizId) {
    return fetch('http://localhost:4000/api/quiz/' + quizId + '/submissions')
      .then(response => response.json());
  }

  submitQuiz(quiz, quizId) {
    return fetch('http://localhost:4000/api/quiz/' + quizId,{
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }
  findQuizById(quizId) {
    return fetch('http://localhost:4000/api/quiz/' + quizId)
      .then(response => response.json());
  }
  findAllQuizzes() {
    return fetch('http://localhost:4000/api/quiz')
      .then(response => response.json());
  }
}
