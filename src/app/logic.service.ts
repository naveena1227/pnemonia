import { Injectable } from '@angular/core';
export class Details{
  constructor(
    public name:string,
    public patientid:string,
    public pathology:string,
    public studydate:string,
    public birthdate:string,
    public age:string,
    public sex:string,
    public modality:string,
    public image:any,



  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class LogicService {
  name:any;
  patientname:any;
  patients:any;
  patient:any=[];
  naveena:any=[];
  constructor() { }
  
}
