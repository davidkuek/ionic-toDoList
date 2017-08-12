import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalListPage } from './modal-list';

@NgModule({
  declarations: [
    ModalListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalListPage),
  ],
})
export class ModalListPageModule {}
