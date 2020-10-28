import { Component, OnInit } from '@angular/core';
import {GetMfrNamesService} from './../get-mfr-names.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  public searchVal:any;
  public data:any = [];
  
  constructor(private getmfrname:GetMfrNamesService) { }

  ngOnInit() {
  }
  
  getMfname(){
  
    let promise = new Promise((res,rej) => {
      this.getmfrname.getMfname(this.searchVal).subscribe(
      data => {
       var res = data;
        this.data = res.data;
      })
    })
  
  
}
}
