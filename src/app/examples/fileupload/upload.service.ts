import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadForm } from './uploadvaluesmodel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadService {
  SERVER_URL = "";
  constructor(private http: HttpClient) {

  }

  submit(id: number, step: string, uploadForm: UploadForm): Observable<any> {
   return  this.http.post<any>(this.SERVER_URL + "/" + id + "/" + step, uploadForm);
  }
}