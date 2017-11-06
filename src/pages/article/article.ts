import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:AngularFireDatabase) {
  }

  category;
  sub;
  article;
data;
  ionViewDidLoad() {
    this.category=this.navParams.get('category');
    this.sub=this.navParams.get('sub');
    this.article = this.navParams.get('article');
    console.log('ionViewDidLoad ArticlePage');
    this.fb.object('articles/'+this.category+'/'+this.sub+'/'+this.article).valueChanges().subscribe(res=>{
      
      console.log(res);
      this.data =res;
          
    })

    
  }

}
