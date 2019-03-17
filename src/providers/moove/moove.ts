import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MooveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MooveProvider {
public base = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MooveProvider Provider');
  }

  getLatesMoove():any{
    return this.http.get("https://viacep.com.br/ws/01001000/json/");
  }
}
