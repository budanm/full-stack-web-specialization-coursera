import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PromotionService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    //return Observable.of(PROMOTIONS).delay(2000);
    return this.http.get(baseURL + 'promotions').map(res => {
      return this.processHTTPMsgService.extractData(res);
    }).catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions/' + id).map(res => {
      return this.processHTTPMsgService.extractData(res);
    }).catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedPromotion(): Observable<Promotion> {
    //return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
    return this.http.get(baseURL + 'promotions?featured=true').map(res => {
      return this.processHTTPMsgService.extractData(res)[0];
    }).catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}