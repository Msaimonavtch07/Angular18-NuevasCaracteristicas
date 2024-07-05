import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { TitleComponent } from '../../../shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { switchMap } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
    <app-title [title]="titleLable()" />

    @if (user()) {

      <section>
      <img
        [srcset]="user()!.avatar"
        [alt]="user()!.first_name" />

      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>

    </section>


    }@else {
      <h3>Cargando la vista del usuario</h3>
    }

  `,
  styles: ``
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject(UserService);

  // public user = signal<User| undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLable = computed( () => {

    if( this.user() ){
      return ` Informacion del Usuario: ${this.user()?.first_name} ${this.user()?.last_name} `;
    }

    return 'Informacion del Usuario'

  })

  /* constructor() {
    this.route.params.subscribe( params => {
      console.log(params)
    })
  } */

}
