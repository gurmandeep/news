import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArticleComponent } from './article-component';

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleComponentModule {}
