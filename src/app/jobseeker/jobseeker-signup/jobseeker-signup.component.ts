import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.css']
})
export class JobseekerSignupComponent implements OnInit {

  step:number = 0;

  item:any;
  itemsArr:any[] = [];
  public data: FormControl;

  dataArr:any[]=[
    {id:1,name:"Java"},
    {id:2,name:"C++"},
    {id:3,name:"Oracle"},
    {id:4,name:"Agile"},
    {id:5,name:"C"},
    {id:6,name:"J2ee"},
    {id:7,name:"Angular2"},
    {id:8,name:"Angular4"},
  ];

  constructor(private builder: FormBuilder, private _sanitizer: DomSanitizer,private router:Router){
    this.step = 1;
  }

  isStep(no){
    return this.step == no;
  }

  next() {
    this.step++;
  }

  prev() {
    this.step--;
  }

  ngOnInit() {
    this.data = new FormControl('')
  }


  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  deleteItem(selected){
    this.itemsArr = this.itemsArr.filter(data => data.id !== selected.id);
  }

  addItem(){
    var item = this.data.value;
    if (item.name && this.itemsArr.length < 10 ) {
      var newitem = this.itemsArr.filter((data => data.id === item.id )).pop();
      if (!newitem) this.itemsArr.push(item);
    }

    console.log(this.itemsArr);

  }

  submit(){
    this.router.navigateByUrl('/home/jobseeker/jobseekerdashboard');
  }



}
