import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ArticleProvider {

  constructor(public http: Http) {
    // console.log('Hello ArticleProvider Provider');
  }

  articles(curretPage){
  		return this.http.get("http://apis.gurmandeep.in/v1/news?page="+curretPage).map((res: Response)=> res.json());

  	}

   singleArticle(currentId){
  		return this.http.get("http://apis.gurmandeep.in/v1/news/"+currentId).map((res: Response)=> res.json());

  	}

}
