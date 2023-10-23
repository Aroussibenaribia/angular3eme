import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  joueurs!: Joueur[];
  allJoueurs!: Joueur[];
  searchTerm!: string;

  constructor(private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.joueurService.joueursList().subscribe(data => {
      this.allJoueurs = data;
    });
  }

  onKeyUp(filterText : string) {
    this.joueurs = this.allJoueurs.filter(joueur => joueur.title.toLowerCase().includes(filterText.toLowerCase()));
  }

}
