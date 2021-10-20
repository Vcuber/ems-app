import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/apireq/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApireqService {

  constructor(private http: HttpClient) { }

  allAppointments() {
    return this.http.get(baseUrl+'appointments');
  }

  createDoctor(docData: { docName: any; docEmail: any; docPh: any; docDept: any; }):Observable<any> {
    return this.http.post(baseUrl+'doctors/add', {
      docName: docData.docName,
      docDept: docData.docDept,
      docEmail: docData.docEmail,
      docPh: docData.docPh
    }, httpOptions);
  }

  createAppointment(appData: { fullname: any; date: any; time: any; consDept: any; mobileNo: any; }) {
    return this.http.post(baseUrl+'appointments', {
      fullname: appData.fullname,
    date: appData.date,
    time: appData.time,
    consDept: appData.consDept,
    mobileNo: appData.mobileNo
    }, httpOptions)
  }

  showCardiology(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showOncology(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showPaediatrics(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showOrthopaedics(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showEnt(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showObsGyn(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showNeuro(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showNephro(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }

  showOptha(dept: any) {
    return this.http.get(baseUrl+'doctors/'+dept);
  }
}
