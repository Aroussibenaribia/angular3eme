import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Label } from '../model/label.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search-by-label',
  templateUrl: './search-by-label.component.html',
  styleUrls: ['./search-by-label.component.css']
})
export class SearchByLabelComponent implements OnInit {

  joueurs: Joueur[] = [];
  idLabel!: number;
  labels: Label[] = [];
  joueur!: Joueur;
  constructor(private joueurService : JoueurService, public authService : AuthService) { }

  ngOnInit(): void {
    this.joueurService.labelsList().subscribe (labs => {
      this.labels = labs;
      console.log (this.labels)
      this.joueurService.joueursList().subscribe (albs => {
        this.joueurs = albs;
      })
    })
  }

  onChange() {
    console.log (this.idLabel);
    this.joueurService.rechrcheParLabel(this.idLabel).subscribe (albs => {
      console.log(albs);
      this.joueurs = albs;
      console.log(this.joueurs);
    })
  }

}
