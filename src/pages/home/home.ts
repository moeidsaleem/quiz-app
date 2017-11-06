import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LearnCategoryPage } from '../learn-category/learn-category';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private adMob:AdMobFree) {
    this.showBannerAd();
    this.fullAd();
  }

  learn(){
    this.navCtrl.push(LearnCategoryPage);
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
