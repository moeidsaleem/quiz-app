import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizesPage } from './quizes';

@NgModule({
  declarations: [
    QuizesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizesPage),
  ],
})
export class QuizesPageModule {}
