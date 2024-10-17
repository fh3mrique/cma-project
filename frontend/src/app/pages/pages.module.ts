import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
    declarations: [
        HomePageComponent
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