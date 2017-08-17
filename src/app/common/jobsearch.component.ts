import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

declare var jQuery:any;

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html'
})

export class JobSearchComponent implements OnInit {

  jobCategories:string[];
  color:string;
  results:any[];
  exp:number=5;
  form1: FormGroup;
  companies:any[];
  locations:any[];


  @Input()
  searchField:string;

  searchTerm:string;



  constructor(formBuilder: FormBuilder) {
    this.companies = [{companyName:'JC Penny'},{companyName:'Airbus'},{companyName:'Target'}];
    this.locations = [{locationName:'Chennai'},{locationName:'Bangalore'},{locationName:'Delhi'}];
    this.form1 = formBuilder.group({ 'single': [ 10 ] });
    this.jobCategories = ["UI Development","UX Designer","Software Developer","Management Jobs",
      "HR & Recruitment","Legal Jobs","Admin Jobs","Mobile Development","Hardware and Networking"];
    this.search();
  }

  search(){
    this.results = [
      {
        'jobTitle':'Senior Engineer',
        'location':'Bangalore',
        'company': 'XXXXXXXX',
        'skills' :['Java','Agile'],
        'exp' :'2-8 years'

      },
      {
        'jobTitle':'Architect',
        'location':'Bangalore',
        'company': 'XXXXXXXX',
        'skills' :['Java','J2ee'],
        'exp' :'8 +  years'

      },
      {
        'jobTitle':'UX Engineer',
        'location':'Bangalore',
        'company': 'YYYYYYY',
        'skills' :['LESS','CSS'],
        'exp' :'3-8 years'

      },
      {
        'jobTitle':'Consultant',
        'location':'Delhi',
        'company': 'YYYYYYY',
        'skills' :['Agile','PMP'],
        'exp' :'3-8 years'

      }
    ]
  }

  ngOnInit() {
    this.searchTerm = this.searchField;
  }


  applySelection(){
    jQuery('#jobCategoryModal').modal("hide");
  }

  onSliderChange() {

  }

}


