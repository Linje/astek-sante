import { Component, OnInit} from '@angular/core';
import { ProfessionnelSanteService } from '../../service/professionnel-sante.service';
import { PageService } from '../../service/page.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private identifiant : string;
  private password : string;

  constructor(private professionnelSanteService : ProfessionnelSanteService, private pageService:PageService) { }

  ngOnInit() {}

  connexion(id : string, psw : string){    
    this.professionnelSanteService.connexion(id,psw)
    .then(res => {
      if(res){
        this.pageService.setPage(1); 
        alert("connecté")
      }
      else{
        alert("identifiant ou mot de passe incorrect");
      }
    });
  }

}
