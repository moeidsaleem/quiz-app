import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlePage } from './article';

@NgModule({
  declarations: [
    ArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlePage),
  ],
})
export class ArticlePageModule {}
