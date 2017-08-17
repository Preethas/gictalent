import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  @Output()
  emitEvent = new EventEmitter();

  searchKey:string;

  ngOnInit(){

  }

  search(){
    console.log(this.searchKey);
    this.emitEvent.next(this.searchKey);
  }
}
