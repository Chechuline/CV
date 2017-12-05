import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from '../services/personal-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  items;

  constructor(private ds:PersonalDataService) { }

  ngOnInit() {
   this.ds.getPersonalData().subscribe( res => { debugger;this.items = res;console.log(res)});
  }

}
