import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-list',
  templateUrl: 'modal-list.html',
})
export class ModalListPage {
	title;
	description;

  constructor(public modalCtrl: NavController, public view: ViewController) {
  }

  close(){
  	this.view.dismiss();
  }

  saveItem(){
  	let newItem = {
  		title : this.title,
  		description :this.description,
  		completed : true

  	};
  	this.view.dismiss(newItem)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalListPage');
  }



}
