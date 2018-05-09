import { Component, OnInit} from '@angular/core';
import { PageService } from '../../service/page.service';
import { ConnexionService } from '../../service/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private identifiant : string;
  private password : string;

  constructor(private connexionService : ConnexionService, private pageService:PageService) { }

  ngOnInit() {}

  connexion(id : string, psw : string){    
    this.connexionService.connect(id,psw)
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
