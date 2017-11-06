import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ArticlesPage } from '../articles/articles';

/**
 * Generated class for the LearnCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn-category',
  templateUrl: 'learn-category.html',
})
export class LearnCategoryPage {

category;
sub;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.category=this.navParams.get('category');
    console.log('ionViewDidLoad LearnCategoryPage with category: '+this.category);
    this.fb.object('articles/'+this.category).valueChanges().subscribe(res=>{
      console.log(res);

      this.sub = Object.keys(res);
      
    })
  }

  goArticles(x){
    this.navCtrl.push('ArticlesPage', {sub:x,category:this.category});
  }

}
  