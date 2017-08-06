import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the Bookmark page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
})
export class Bookmark {
articles = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public iab: InAppBrowser, public socialShare : SocialSharing) {
	  storage.ready().then(() => {
	  		storage.forEach((value, key, index) => {	  	
	        this.articles.push(value);
	  	});
	  });
  }

  readMore(url){
  		this.iab.create(url);
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bookmark');
  }

  shareViaFB(){
  	this.socialShare.shareViaFacebook("ss", "f", "sf").then(() => {
  		console.log("shareSheetShare: Success");
	}).catch(() => {
		console.log("Error sharing");
	});
  }

}
