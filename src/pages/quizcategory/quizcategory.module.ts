import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizcategoryPage } from './quizcategory';

@NgModule({
  declarations: [
    QuizcategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizcategoryPage),
  ],
})
export class QuizcategoryPageModule {}
