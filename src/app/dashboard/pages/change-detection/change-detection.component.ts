import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <app-title [title]="currentframework()" />

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>

  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentframework = computed (
    () => ` change detection - ${ this.frameworkAsSignal().name } `
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    realsedata: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    realsedata: 2016,
  }

  constructor() {

    setTimeout( () => {

      /* this.frameworkAsProperty.name = 'React'; */
      this.frameworkAsSignal.update( value => {
        value.name = 'React'

        return{...value}
      })

      console.log('hecho')
    },3000)

  }

}
