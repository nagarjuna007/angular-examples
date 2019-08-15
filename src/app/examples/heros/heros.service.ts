import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heros.component';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() { }
  getHerosData(): Observable<Hero[]> {
    return of(HEROES);
  }
}