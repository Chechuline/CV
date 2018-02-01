import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../shared/app-error';
import { NotFoundError } from '../shared/not-found-error';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url, resource)
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`)
      .map(response => response.json())
      .catch(this.handleError)

  }

  private handleError(error: Response) {
    if (error.status == 404) return Observable.throw(new NotFoundError())

    return Observable.throw(new AppError(error))
  }



}
