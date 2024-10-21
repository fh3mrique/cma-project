import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.scss']
})
export class DefaultInputComponent {
  @Input({required: true}) label: string = ''
  @Input({required: true}) placeholder: string = ''

}
