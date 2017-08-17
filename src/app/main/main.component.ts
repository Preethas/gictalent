import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  username:string;
  pwd:string;
  searchKey = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buttonMessage(message,t){
    console.log("main" + message);
    this.searchKey = message;
    t.select('search');

  }

  login(){
    if (this.username == 'admin' && this.pwd == 'admin'){
      this.router.navigateByUrl('/home/jobseeker/jobseekerdashboard');
    }
  }



}
