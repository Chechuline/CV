import { Component, OnInit } from '@angular/core';
// import { PersonalDataService } from '../services/personal-data/personal-data.service';
// import { PersonalData } from '../services/personal-data/personal-data';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  // datos:PersonalData;private ds:PersonalDataService

  constructor() { }

  ngOnInit() {
    // this.ds.getPersonalData().subscribe(
    //   data => {this.datos = data; console.log(data)}
    // );
    // this.ds.getFirestore().subscribe(
    //   data => console.log(data)
    // )
  //  this.ds.getPersonalData().subscribe( res => { debugger;this.items = res;console.log(res)});
  }

}
