import { Component } from '@angular/core';
import { ItemlistPage } from '../itemlist/itemlist';
import { ModalController, IonicPage, NavParams, NavController } from 'ionic-angular';
import { ModalListPage } from '../modal-list/modal-list';
import { DataProvider} from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	itemList = [{"title":"Do WOD!","description":"Learn ioc","completed":false},
	{"title":"Free Code Camp!","description":"Learn ioc","completed":true},
	{"title":"Nap!","description":"Learn ioc","completed":true},
	{"title":"Play games!","description":"Learn ioc","completed":true},
	{"title":"Eat!","description":"Learn ioc","completed":true}];

	



  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider ) { 
  	this.dataService.getData().then((todos) => {
  		if(todos){
  			this.itemList = JSON.parse(todos);
  		}
  	});

  }

    presentModal() {
    let modal = this.modalCtrl.create(ModalListPage);
    modal.onDidDismiss((item) => {
    	if(item){
    		this.saveItem(item);
    	}
    });
    modal.present();
  }
  saveItem(item){
  	this.itemList.push(item);
  	this.dataService.saveData(this.itemList);
  }

  detailTapped(item){
  	this.navCtrl.push(ItemlistPage,{item:item});
  }

  done(item){
  	item.completed=true;
  }

  deleteItem(item){
  	this.itemList.splice(this.itemList.indexOf(item),1);
  }

}
