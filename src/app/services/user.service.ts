import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, UserResponse, UserrResponse } from '../interfaces/req-response';

import { delay, map } from 'rxjs';

interface State {
  user: User[],
  loading: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private htpp = inject( HttpClient )

  #state = signal<State>({
    loading: true,
    user: [],
  });

  public users = computed( () => this.#state().user );
  public loading = computed( () => this.#state().loading );

  constructor() {

    this.htpp.get<UserResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          user: res.data,
        });

      });

  };

  getUserById( id: string ){

    return  this.htpp.get<UserrResponse>(` https://reqres.in/api/users/${id} `)
      .pipe(
        delay(1500),
        map( res => res.data )
      )

  };

};
