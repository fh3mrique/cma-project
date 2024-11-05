import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { RouterLink } from '@angular/router';
import { QuestionsPageComponent } from './questions-page/questions-page.component';



@NgModule({
    declarations: [
        HomePageComponent,
        LoginPageComponent,
        PrincipalHomeComponent,
        QuestionsPageComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterLink
    ],
    exports: [
        ComponentsModule,
        HomePageComponent
    ]
})
export class PagesModule { }