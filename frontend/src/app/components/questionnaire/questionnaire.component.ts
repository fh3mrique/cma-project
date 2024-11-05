import { Component } from '@angular/core';
import { Question } from 'src/app/interfaces/questionnaire/question.interface';
import { QUESTIONS } from './questions';
import { UserAnswer } from 'src/app/interfaces/questionnaire/user-answer.interface';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {

  questions: Question[] = QUESTIONS;
  currentQuestionIndex = 0;
  answers: UserAnswer[] = [];
  isCompleted = false;

  // Avança para a próxima pergunta e armazena a resposta do usuário
  answerQuestion(selectedOption: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.answers.push({ questionId: currentQuestion.id, selectedOption });

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isCompleted = true;
      this.submitAnswers();
    }
  }

  submitAnswers() {
    // Aqui enviamos as respostas para o backend
    console.log(this.answers);
  }

}
