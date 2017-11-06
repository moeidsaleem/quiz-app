import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnCategoryPage } from './learn-category';

@NgModule({
  declarations: [
    LearnCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnCategoryPage),
  ],
})
export class LearnCategoryPageModule {}
