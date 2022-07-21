declare let tinymce: any;

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // model: any = {};
  source: string = ''
  title = 'images-tinymce';
  tinymceinit: any = {};

constructor(){

}

ngOnInit() {
  this.tinymceinit


}

}

