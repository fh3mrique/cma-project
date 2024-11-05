import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonHomeComponent } from './button-home/button-home.component';
import { DefaultInputComponent } from './default-input/default-input.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonHomeComponent,
    DefaultInputComponent,
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    ButtonHomeComponent,
    DefaultInputComponent,
    QuestionnaireComponent
  ]
})
export class ComponentsModule { }
