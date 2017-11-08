import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdMobFree, AdMobFreeBannerConfig ,AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';
//quiz main page
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  category;
  
    constructor(public navCtrl: NavController,private fb:AngularFireDatabase,
    private adMob:AdMobFree) {
      this.showBannerAd();
      this.fullAd();
     
    this.fb.object('quizes').valueChanges().subscribe(res=>{
        console.log(res);
        this.category=res;
  
        
      //  console.log(this.category.keys());
        console.log(Object.keys(res))
        this.category = Object.keys(res);
        
      })
  
  
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
  
  
    goQuiz(x){
      console.log(x);
      //go to Learn Page
       this.navCtrl.push('QuizcategoryPage',{category:x});
    }
  
  }
  