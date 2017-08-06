import { Component } from '@angular/core';

/**
 * Generated class for the ArticleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'article-component',
  templateUrl: 'article-component.html'
})
export class ArticleComponent {

  text: string;

  constructor() {
    console.log('Hello ArticleComponent Component');
    this.text = 'Hello World';
  }

}
