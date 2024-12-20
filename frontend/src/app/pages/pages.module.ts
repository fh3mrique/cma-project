import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { DashboardComponent } from './principal-home/dashboard/dashboard.component';
import { ChoreographyComponent } from './principal-home/choreography/choreography.component';
import { MyDataComponent } from './principal-home/my-data/my-data.component';



@NgModule({
    declarations: [
        HomePageComponent,
        LoginPageComponent,
        PrincipalHomeComponent,
        QuestionsPageComponent,
        DashboardComponent,
        ChoreographyComponent,
        MyDataComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterLink,
        RouterOutlet
    ],
    exports: [
        ComponentsModule,
        HomePageComponent
    ]
})
export class PagesModule { }