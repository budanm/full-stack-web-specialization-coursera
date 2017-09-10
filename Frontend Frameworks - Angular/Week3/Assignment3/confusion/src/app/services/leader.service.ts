import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/delay';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((dish) => dish.featured)[0]).delay(2000);
  }

}
