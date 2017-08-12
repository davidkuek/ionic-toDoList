import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemlist',
  templateUrl: 'itemlist.html',
})
export class ItemlistPage {

itemlist = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemlist = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlistPage');
  }

}
