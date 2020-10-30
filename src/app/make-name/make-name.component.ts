import { Component, OnInit, AfterViewInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-make-name',
  templateUrl: './make-name.component.html',
  styleUrls: ['./make-name.component.scss']
})
export class MakeNameComponent implements  AfterViewInit {

  constructor(private dataProvider: DataService) {
  
   }

  ngOnInit() {
    // var fname = this.dataProvider.getallnameValue();
    // console.log(fname);
  }

    ngAfterViewInit() {
    var fname = this.dataProvider.getallnameValue();
    console.log(fname);
  }

}
