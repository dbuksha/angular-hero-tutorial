// global
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { MessagesComponent } from './messages.component';


@NgModule({
  declarations: [
    MessagesComponent,
  ],
  exports: [
    MessagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
