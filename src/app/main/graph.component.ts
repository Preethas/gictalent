import { Component, OnInit ,NgZone, AfterViewInit,ElementRef,ViewChild,Input} from '@angular/core';
import {Router} from '@angular/router';

declare var vis: any;
declare var zone:any;

@Component({
  selector: 'app-graph',
  template: '<div #network></div>'
})

export class GraphComponent implements AfterViewInit {

  @ViewChild("network", {read: ElementRef}) network: ElementRef;
   test:string ="yay";
  constructor(private router:Router,zone:NgZone) { }

  ngAfterViewInit(): void {

    var options = {
      groups: {
        usergroups: {
          shape: 'icon',
          icon: {
            face: 'FontAwesome',
            code: '\uf0c0',
            size: 50,
            color: '#7CB342'
          }
        }
      },
       height:'500px',
       width:'1000px',
    };

    if (this.network && this.network.nativeElement) {
      var network = new vis.Network(this.network.nativeElement, this.getNetworkData(), options);
      network.on("click",(params) => {
        if (params && params.nodes && params.nodes.length === 1) {
          this.nodeClicked(params);
        } else {
          console.log('non node element clicked');
        }
      })
    }
  }

  nodeClicked(params){
    this.router.navigateByUrl('/home/jobseeker/jobseekerdashboard');
  }


  getNetworkData() {
    const color = '#FF8A65';
    var nodesArr = [
      {id: 1, label: '', group:'usergroups'},
      {id: 2, label: 'UI', color: color},
      {id: 3, label: 'Sales', color: color},
      {id: 4, label: 'UX', color: color},
      {id: 5, label: 'Marketing', color: color},
      {id: 6, label: 'Mobile Dev', color: color},
      {id: 7, label: 'HR & Recruiting', color: color},
      {id: 8, label: 'Data Science', color: color},
      {id: 9, label: 'Finance & Accounting', color: color},

    ];
    var edgesArr = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 1, to: 4},
      {from: 1, to: 5},
      {from: 1, to: 6},
      {from: 1, to: 7},
      {from: 1, to: 8},
      {from: 1, to: 9},
    ];

    return {'nodes': nodesArr, 'edges': edgesArr};
  }

}
