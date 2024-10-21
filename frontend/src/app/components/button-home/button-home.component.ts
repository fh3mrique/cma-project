import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrls: ['./button-home.component.scss']
})
export class ButtonHomeComponent {
  @Input({ required: true }) text: string = '';
}
