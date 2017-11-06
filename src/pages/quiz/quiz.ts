import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  bioLink:any;
	bio={
    q:'',
    options:{}
  }
  count=0;
child_id;
category;
sub;
article;
data;
questions;
  constructor(private fb:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder
  ,private adMob:AdMobFree) 
  {
    this.article = this.navParams.get('article');  
    this.category=this.navParams.get('category');
    this.sub=this.navParams.get('sub');
   console.log(this.article);
   this.bioLink =this.fb.list('quizes/'+this.category+'/'+this.sub+'/'+this.article);
   this.bioLink.valueChanges().subscribe(res=>{
   this.data = res; 
   console.log(this.data);


//converting object to an array





  })     
    //console.log(this.bio.name);
    ///// this.bio.dob = this.navParams.get('dob');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BioPage');
  }
  backButton(){
  	this.navCtrl.pop();
  }
  saveBio(val){
    let req ={
         quiz:this.article,
         answers:val
    }
    console.log(req);
     let link=this.fb.list('answers');
     link.push(req).then(resp=>{
     console.log(resp);
     console.log('updated');
     this.navCtrl.pop();
   })
 // console.log(val);
  }





  async showBannerAd(){
    try{
    const bannerConfig: AdMobFreeBannerConfig ={
     id:'ca-app-pub-9250357581937124/5944271769',
      isTesting:true,
      autoShow:true,
      bannerAtTop:true
    }
    this.adMob.banner.config(bannerConfig);

 
      let result =this.adMob.banner.prepare();
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

  

async fullAd(){
  try{
    const fullAdConfig :AdMobFreeInterstitialConfig ={
      id:'ca-app-pub-9250357581937124/9110804238',
      isTesting:true,
      autoShow:true
    }
    this.adMob.interstitial.config(fullAdConfig);
    let result =this.adMob.interstitial.prepare();
    console.log(result);
  }
  catch(e){
     console.error(e);
  }

}

}
