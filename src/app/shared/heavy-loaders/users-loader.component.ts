import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'users-loader',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <h2>hola mundo...</h2>
  `,
})
export class UsersLoaderComponent {

}
