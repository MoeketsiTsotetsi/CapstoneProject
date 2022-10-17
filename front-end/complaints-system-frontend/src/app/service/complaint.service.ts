import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  baseURL:string = "http://localhost:8080/complaint"
  constructor(public http:HttpClient) { }

  createComplaint(complaint:any):Observable<string> {
    return this.http.post(this.baseURL+"/createComplaint",complaint,{responseType:"text"});
  }

  assignEngineer(complaint:any):Observable<string> {
    return this.http.put(this.baseURL+"/updateComplaintEngineer",complaint,{responseType:"text"});
  }

  updateComplaintEngineer(complaint:any):Observable<string> {
    return this.http.put(this.baseURL+"/updateComplaintEngineer",complaint,{responseType:"text"});
  }

  updateComplaintStatus(complaint:any):Observable<string> {
    return this.http.put(this.baseURL+"/updateComplaintStatus",complaint,{responseType:"text"});
  }

  getComplaintsByStatus(status:any):Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.baseURL+"/getComplaintsByStatus/"+status);
  }

  getComplaintsByCustomerEmail(cemail:any):Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.baseURL+"/getComplaintsByCustomer/"+cemail);
  }
  getComplaintsByEngineer(eemail:any):Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.baseURL+"/getComplaintsByAssignedEngineer/"+eemail);
  }
  getAllComplaints():Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.baseURL+"/getAllComplaints");
  }

  deleteComplaint(cid:any):Observable<string> {
    return this.http.delete(this.baseURL+"/deleteComplaint/"+cid,{responseType:"text"});
  }
}
