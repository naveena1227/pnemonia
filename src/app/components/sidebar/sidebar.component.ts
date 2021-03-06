import { Component, OnInit } from "@angular/core";
import { LogicService, Details } from 'src/app/logic.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
//import { HttpClientService } from "src/app/service/http-client.service";

declare interface RouteInfo {
  path: string;
  title: string;



}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard"



  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  names:any=[];
  patients:any=[];
  constructor(public logic: LogicService,
    private http: HttpClient) { }

  ngOnInit() {
   // this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.patient();
    console.log('Calling');
    //this.listusers();
    this.listpatient();
  }

  ListPatients() {
    return this.http.get("http://10.197.0.55:30081/patients");
  }
 
  listpatient() {
    this.ListPatients().subscribe((res: any) => {
      console.log("Response:-", res);
        res.names.forEach(element => {
          this.logic.patient.push({
            "name": element
            })
        });
        console.log(this.logic.patient);

    })
  }



  // }
  //////////////
  // isMobileMenu() {
  //   if (window.innerWidth > 991) {
  //     return false;
  //   }
  //   return true;
  // }
  // GetPatients() {
  //   let header = new HttpHeaders();
  //   header.append('Content-type', 'application/json');
  //   let param = new HttpParams();
  //   param = param.append("firstname", "hello");
  //   return this.http.get("http://localhost:5000/search", {
  //     headers: header
  //     , params: param
  //   });
  // }
  // searchname: any;
  // patient() {


  //   this.GetPatients().subscribe((res: any) => {
  //     console.log("Response:-", res);
  //     if (res && res.length > 0) {
  //       res.forEach(element => {
  //         this.logic.patients.push({
  //           "name": element.name,
  //           "pathology": element.pathology,
  //           "patientid": element.patientid,
  //           "studydate": element.studydate,
  //           "birthdate": element.birthdate,
  //           "age": element.age,
  //           "sex": element.sex,
  //           "modality": element.modality,
  //           "image": 'data:image/jpeg;base64,' + element.image
  //         })
  //       });
  //     }
  //   })
  // }
  displaydetails(name) {
    this.logic.naveena = [];
    console.log(name)
    this.logic.patientname=name;
    let studyParams = new HttpParams();
    studyParams = studyParams.append("name", name)
    const options = name ?
      { params: new HttpParams().set('name', name) } : {};
    return this.http.get<Details>("http://10.197.0.55:30081/search", options)
      .subscribe((response) => {
        console.log("responce recieved", response)
        this.logic.naveena.push({
          "name": response.name,
          "pathology": response.pathology,
          "patientid": response.patientid,
          "studydate": response.studydate,
          "birthdate": response.birthdate,
          "age": response.age,
          "sex": response.sex,
          "modality": response.modality,
          "image": 'data:image/jpeg;base64,'+ response.image
        })
        console.log("naveena" + this.logic.naveena)
      }
      )
  }
}


