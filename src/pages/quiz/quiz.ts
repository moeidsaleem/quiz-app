
import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free';
import {  Data } from '../../providers/data/data';

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
  
	@ViewChild('slides') slides: any;
  
    hasAnswered: boolean = false;
    score: number = 0;
    slideOptions: any;
    questions: any;


  constructor(public dataService:Data,private fb:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder
  ,private adMob:AdMobFree) 
  {
  
  
}
ionViewDidLoad() {
  // this.dataService.category='cooking';
  // this.dataService.sub='italian';
  
  // this.dataService.quiz='quiz2';
  
  this.slides.lockSwipes(true);

  this.dataService.load().then((data) => {

    data.map((question) => {

          let originalOrder = question.answers;
          question.answers = this.randomizeAnswers(originalOrder);
          return question;

      });		

      this.questions = data;

  });

}

nextSlide(){
  this.slides.lockSwipes(false);
  this.slides.slideNext();
  this.slides.lockSwipes(true);
}

selectAnswer(answer, question){

  this.hasAnswered = true;
  answer.selected = true;
  question.flashCardFlipped = true;

  if(answer.correct){
    this.score++;
  }

  setTimeout(() => {
    this.hasAnswered = false;
    this.nextSlide();
    answer.selected = false;
    question.flashCardFlipped = false;
  }, 3000);
}

randomizeAnswers(rawAnswers: any[]): any[] {

  for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
  }

  return rawAnswers;

}

restartQuiz() {
  this.score = 0;
  this.slides.lockSwipes(false);
  this.slides.slideTo(1, 1000);
  this.slides.lockSwipes(true);
}

  backButton(){
  	this.navCtrl.pop();
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
