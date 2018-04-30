import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../../service/web-api.service';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private webApiService : WebApiService) { }

  ngOnInit() {
  }

  onClickMe() {
    //test de post
    /*let p:Patient;
    p = new Patient(3, "billy", "joe", "12/01/1996", true,[])
    this.webApiService.addPatient(p).then(()=>{
      alert("good")
    });
    */

    //test de get
    this.webApiService.getListPatient("jsallou").then((list)=>{
      alert(list);
    })
    
  }

}
