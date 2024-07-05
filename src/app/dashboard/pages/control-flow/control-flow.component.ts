import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showControl = signal(false);
  public grade = signal<Grade>('A');

  public frameWorks = signal( ['Angular', 'Vue', 'Svelte', 'Qwik', 'React'] );

  public frameWorks2 = signal( [] );


  public toogleContent() {
    this.showControl.update( value => !value );
  }

}
