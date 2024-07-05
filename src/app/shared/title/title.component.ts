import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  styles: ``,
  template: `
    <h1 class="text-2xl"> {{title}} </h1>
  `
})
export class TitleComponent {

  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withshadow: boolean = false;

}
