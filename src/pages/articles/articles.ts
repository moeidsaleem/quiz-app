import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:AngularFireDatabase) {
  }

  articles;
  category;
  sub;
  ionViewDidLoad() {
    
    this.category=this.navParams.get('category');
    this.sub=this.navParams.get('sub');
    console.log('ionViewDidLoad LearnCategoryPage with category: '+this.category);
    this.fb.object('articles/'+this.category+'/'+this.sub).valueChanges().subscribe(res=>{
      console.log(res);

      this.articles = Object.keys(res);
      
    })
  }

  goArticle(x){
    this.navCtrl.push('ArticlePage',{sub:this.sub, category:this.category,article:x});
  }

}
