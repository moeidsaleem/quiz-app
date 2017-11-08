import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the QuizcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizcategory',
  templateUrl: 'quizcategory.html',
})
export class QuizcategoryPage {

  category;
  sub;
    constructor(public navCtrl: NavController, public navParams: NavParams,private fb:AngularFireDatabase) {
    }
  
    ionViewDidLoad() {
      this.category=this.navParams.get('category');
      console.log('ionViewDidLoad LearnCategoryPage with category: '+this.category);
      this.fb.object('quizes/'+this.category).valueChanges().subscribe(res=>{
        console.log(res);
  
        this.sub = Object.keys(res);
        
      })
    }
  
    goQuizes(x){
     
      this.navCtrl.push('QuizesPage', {sub:x,category:this.category});
    }
  
  }
    