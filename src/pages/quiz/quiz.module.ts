import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizPage } from './quiz';
import { FlashCardComponent } from '../../components/flash-card/flash-card';

@NgModule({
  declarations: [
    QuizPage,
    FlashCardComponent
  ],
  imports: [
    IonicPageModule.forChild(QuizPage),
  ],
})
export class QuizPageModule {}
