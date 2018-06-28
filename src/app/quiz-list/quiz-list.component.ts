import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from "../services/quiz.service.client";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private service: QuizServiceClient) { }

  quizzes = [];
  ngOnInit() {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

}
