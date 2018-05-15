import { Component, OnInit } from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { Patient } from '../../model/patient';
import { PageService } from '../../service/page.service';
import { Symptome } from '../../model/symptome';
import { Valeur } from '../../model/valeur';
import { ConnexionService } from '../../service/connexion.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private pageService:PageService, 
    private professionnelSanteService : ProfessionnelSanteService,
    private connexionService : ConnexionService) { }

  ngOnInit() {
  }


  getTest() {
    //test de get
    this.professionnelSanteService.setCurrentId("pf1_id");
    this.professionnelSanteService.getListPatientWebApi().then((list)=>{
      alert(list);
    });
  }

  postTest() {
    //test de post
    let v : Valeur;
    v = new Valeur(3,new Date());
    let s: Symptome;
    s = new Symptome("s3","symptomeDeTest","descriptionDeTest",[0,10],[v]);
    let p:Patient;
    p = new Patient("p3", "testNom", "testPrenom", "12/01/1996", true,[s])
    this.professionnelSanteService.addPatient(p).then(()=>{
      alert("good")
    });
  }

  connexionTest(){
    this.connexionService.connect("pf1_id","pf1_psw")
    .then(res => {
      alert(res);
      });
  }

  pageTest(){
    //test de page
    this.pageService.setPage(0);
  }

}
