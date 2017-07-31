import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html'
})

export class DummyComponent implements OnInit {


  username:string;
  pwd:string;

  constructor(private router:Router){

  }

  ngOnInit(){

  }

  login(){
    if (this.username=='admin' && this.pwd=='admin'){
      this.router.navigateByUrl('/home')
    }
  }

}
