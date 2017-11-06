import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesPage } from './articles';

@NgModule({
  declarations: [
    ArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesPage),
  ],
})
export class ArticlesPageModule {}
