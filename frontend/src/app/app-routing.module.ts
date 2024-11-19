import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrincipalHomeComponent } from './pages/principal-home/principal-home.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { DashboardComponent } from './pages/principal-home/dashboard/dashboard.component';

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
    component: PrincipalHomeComponent,
    children: [
      {
        pathMatch: 'full',
        path: 'dashboard',
        component: DashboardComponent
      }

    ]
  },
  {
    path: 'vark-questionare',
    component: QuestionsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
