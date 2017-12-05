import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { PersonalData } from './personal-data'

@Injectable()
export class PersonalDataService {

  constructor(private db: AngularFireDatabase) { }

  getPersonalData() {//:Observable<any>{
    let data = '';
    return this.db.list<PersonalData>('datosPersonales').valueChanges().map(
      res => res,
      err => Observable.throw(err));
    // data.subscribe(
    //   dat => {console.log('subscrito');data.subscribe( a => console.log(a),e => console.error(e),()=>{console.log('fin')})},
    //   err => console.log(err)
    // )
  }

}
