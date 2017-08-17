import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent implements OnInit {

  items:Array<any> =[];

  constructor(){
   this.items=[
     {name:'JC Penny',color:'green'},
     {name:'Siemens',color:'orange'},
     {name:'AirBus',color:'purple'},
     {name:'JP Morgan',color:'purple'},
     {name:'Goldman Sachs',color:'purple'},
   ]
  }

  selectItem($event){
    console.log($event.item);
  }

  ngOnInit(){

  }



}
