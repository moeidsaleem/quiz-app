import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Data } from '../../providers/data/data';

/**
 * Generated class for the QuizesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizes',
  templateUrl: 'quizes.html',
})
export class QuizesPage {
  constructor(public data:Data,public navCtrl: NavController, public navParams: NavParams,private fb:AngularFireDatabase) {
  }

  articles;
  category;
  sub;
  ionViewDidLoad() {
    
    this.category=this.navParams.get('category');
    this.sub=this.navParams.get('sub');
    console.log('ionViewDidLoad LearnCategoryPage with category: '+this.category);
    this.fb.object('quizes/'+this.category+'/'+this.sub).valueChanges().subscribe(res=>{
      console.log(res);

      this.articles = Object.keys(res);
      
    })
  }

  goArticle(x){
    this.data.category = this.category;
    this.data.sub =this.sub;
    this.data.quiz =x;
    this.navCtrl.push('QuizPage',{sub:this.sub, category:this.category,article:x});
  }

}
