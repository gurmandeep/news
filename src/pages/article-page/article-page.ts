import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { ArticleProvider } from '../../providers/article-provider';
// import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-article-page',
  templateUrl: 'article-page.html',
})
export class ArticlePage {
articles = [];
currentPage = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public articleProvider: ArticleProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController, private storage: Storage, public iab: InAppBrowser) {


  	this.articleProvider.articles(this.currentPage).subscribe(
    		data => {
    			let art = data.data;
	            this.articles = art;
	            this.currentPage = parseInt(data.current_page);
	            console.log(this.articles, this.currentPage);        
			}
    	)
    	console.log(this.articles);
  }

  nextArticles(infiniteScroll) {
  	this.currentPage = this.currentPage + 1; 
    setTimeout(() => {
      this.articleProvider.articles(this.currentPage).subscribe(
    		data => {
    			let art = data.data;
	          console.log(art);
	          this.articles = this.articles.concat(art);
	          console.log(this.articles);
    		}
    	)
      infiniteScroll.complete();
    }, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    	loader.present();
  	}

  	bookmark(id) {
  		this.articleProvider.singleArticle(id).subscribe(
  			data => { console.log(data); 
  						this.storage.set(id, data);
  					})
	    let bookmarkMsg = this.toastCtrl.create({
	      message: 'Bookmark added successfully',
	      duration: 3000
	    });
   	 	bookmarkMsg.present(); 	 	
  	} 

  	readMore(url){
      this.iab.create(url);
      
    }

}
