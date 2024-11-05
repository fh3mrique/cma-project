import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrincipalHomeComponent } from './pages/principal-home/principal-home.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    title: 'Home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'principal',
    component: PrincipalHomeComponent
  },
  {
    path: 'q',
    component: QuestionsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
