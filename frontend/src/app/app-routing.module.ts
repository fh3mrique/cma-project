import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrincipalHomeComponent } from './pages/principal-home/principal-home.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { DashboardComponent } from './pages/principal-home/dashboard/dashboard.component';
import { ChoreographyComponent } from './pages/principal-home/choreography/choreography.component';
import { MyDataComponent } from './pages/principal-home/my-data/my-data.component';

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
      },
      {
        pathMatch: 'full',
        path: 'choreography',
        component: ChoreographyComponent
      },
      {
        pathMatch: 'full',
        path: 'my-data',
        component: MyDataComponent
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
