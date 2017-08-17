import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {


  @Input()
  searchKey:string ;




  constructor(private router:Router){

  }

  ngOnInit(){

  }



}
