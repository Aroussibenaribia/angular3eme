import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {

  joueurs : Joueur[] = [];

  constructor(private joueurService: JoueurService, public authService : AuthService) {}

  deleteJoueur(joueur: Joueur) {
    let conf = confirm("Are you sure you want to delete this joueur?");
    if (conf) {
      this.joueurService.deleteJoueur(joueur.idJoueur).subscribe( data => {
        console.log("Joueur deleted");
        this.loadJoueurs();
      });
    }
  }

  loadJoueurs() {
    this.joueurService.joueursList().subscribe(joueurs => {
      this.joueurs = joueurs;
        this.joueurs.forEach((prod) => {
        this.joueurService
          .loadImage(prod.image.idImage)
          .subscribe((img: Image) => {
            prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
        });
      });
    });
  }


  ngOnInit(): void {
    this.loadJoueurs();
  }

}
