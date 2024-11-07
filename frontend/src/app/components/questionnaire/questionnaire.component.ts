import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Question } from 'src/app/interfaces/questionnaire/question.interface';
import { QUESTIONS } from './questions';
import { UserAnswer } from 'src/app/interfaces/questionnaire/user-answer.interface';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements AfterViewInit {

  questions: Question[] = QUESTIONS;
  currentQuestionIndex = 0;
  answers: UserAnswer[] = [];
  isCompleted = false;

  // Referência ao canvas do gráfico
  @ViewChild('doughnutChartCanvas') doughnutChartCanvas!: ElementRef<HTMLCanvasElement>;
  doughnutChart: any;

  // Avança para a próxima pergunta e armazena a resposta do usuário
  answerQuestion(selectedOption: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.answers.push({ questionId: currentQuestion.id, selectedOption });

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isCompleted = true;
      setTimeout(() => this.showResults(), 0); // Aguarda a renderização completa
    }
  }

  // Função para exibir o gráfico de resultados
  showResults() {
    const resultCounts = this.calculateResults();
    this.renderDoughnutChart(resultCounts);
  }

  // Função para calcular os resultados das respostas
  calculateResults() {
    const resultCounts = { Visual: 0, Auditivo: 0, Sinestésico: 0, Outro: 0 };
    
    this.answers.forEach(answer => {
      if (answer.selectedOption === 'a') resultCounts.Visual++;
      else if (answer.selectedOption === 'b') resultCounts.Auditivo++;
      else if (answer.selectedOption === 'c') resultCounts.Sinestésico++;
      else resultCounts.Outro++;
    });

    return resultCounts;
  }

  // Função para renderizar o gráfico de rosca
  renderDoughnutChart(resultCounts: any) {
    const data = {
      labels: ['Visual', 'Auditivo', 'Sinestésico', 'Outro'],
      datasets: [{
        label: 'Estilos de Aprendizagem',
        data: [
          resultCounts.Visual,
          resultCounts.Auditivo,
          resultCounts.Sinestésico,
          resultCounts.Outro
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4
      }]
    };

    const context = this.doughnutChartCanvas.nativeElement.getContext('2d');
    if (context) {
      this.doughnutChart = new Chart(context, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          }
        }
      });
    } else {
      console.error('Não foi possível obter o contexto do canvas.');
    }
  }

  ngAfterViewInit() {
    // Aqui você pode verificar ou executar algo após a view inicial ser carregada.
  }
}
