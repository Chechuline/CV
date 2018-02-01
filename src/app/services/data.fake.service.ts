import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { AppError } from '../shared/app-error';
import { NotFoundError } from '../shared/not-found-error';

@Injectable()
export class FakeDataService {
  private url = '';
  constructor() { }

  getAll() {
    return Observable.of(true)
  }

  create(resource) {
    return Observable.of(true)
  }

  update(resource) {
    return Observable.of(true)
  }

  delete(id) {
    return Observable.of(true)

  }

  private handleError(error: Response) {
    if (error.status == 404) return Observable.throw(new NotFoundError())

    return Observable.throw(new AppError(error))
  }



}
