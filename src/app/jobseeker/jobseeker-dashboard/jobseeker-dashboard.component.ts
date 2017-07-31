import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.css']
})
export class JobseekerDashboardComponent implements OnInit {

  jobCategories:string[];
  color:string;
  results:any[];

  constructor(private router: Router) {
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
  }

  gotoSignup(){
    this.router.navigateByUrl('/jobseekersignup');
  }

  applySelection(){
    jQuery('#jobCategoryModal').modal("hide");
  }

}
