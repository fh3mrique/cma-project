import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonHomeComponent } from './button-home/button-home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonHomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    ButtonHomeComponent
  ]
})
export class ComponentsModule { }
