import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { Patient } from '../../model/patient';
import { PageService } from '../../service/page.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private pageService:PageService, private professionnelSanteService : ProfessionnelSanteService) { }

  ngOnInit() {
  }

  onClickMe() {
    //test de get
    /*
    this.professionnelSanteService.getListPatient("pf1_id").then((list)=>{
      alert(list);
    })
    */

    //test de post
    let p:Patient;
    p = new Patient(3, "testNom", "testPrenom", "12/01/1996", true,[])
    this.professionnelSanteService.addPatient(p).then(()=>{
      alert("good")
    });
    


    //test de page
    //this.pageService.setPage(1);
  }

}
