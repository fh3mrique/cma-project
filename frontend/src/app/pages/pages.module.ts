import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
    declarations: [
        HomePageComponent,
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ],
    exports: [
        ComponentsModule,
        HomePageComponent
    ]
})
export class PagesModule { }