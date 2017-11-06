import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  category;

  constructor(public navCtrl: NavController,private fb:AngularFireDatabase) {
   
  this.fb.object('articles').valueChanges().subscribe(res=>{
      console.log(res);
      this.category=res;

      
    //  console.log(this.category.keys());
      console.log(Object.keys(res))
      this.category = Object.keys(res);
      
    })


  }

  




  goLearn(x){
    console.log(x);
    //go to Learn Page
    this.navCtrl.push('LearnCategoryPage',{category:x});
  }

}
