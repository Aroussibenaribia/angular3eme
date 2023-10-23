import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../services/joueur.service';
import { Joueur } from '../model/joueur.model';
import { Router } from '@angular/router';
import { Label } from '../model/label.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {

  currentJoueur = new Joueur();
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  labels!: Label[];
  updatedLabelId?: number;

  constructor(private activatedRoute : ActivatedRoute, private joueurService : JoueurService, private router : Router) { }

  ngOnInit(): void {
    /* this.labels = this.joueurService.labelsList(); */
    this.joueurService.labelsList().subscribe (labs => {
      this.labels = labs;
      console.log(labs);
    })

    this.joueurService.getJoueurById(this.activatedRoute.snapshot.params['id']).
    subscribe( joueur =>{ this.currentJoueur = joueur;
    this.updatedLabelId = joueur.label.idLabel;
    this.joueurService
    .loadImage(this.currentJoueur.image.idImage)
    .subscribe((img: Image) => {
    this.myImage = 'data:' + img.type + ';base64,' + img.image;
    });
    } ) ;

  }

  updateJoueur() {
    this.currentJoueur.label = this.labels.find(label => label.idLabel == this.updatedLabelId)!;
      //tester si l'image du produit a été modifiée
      if (this.isImageUpdated)
      {
        this.joueurService
        .uploadImage(this.uploadedImage, this.uploadedImage.name)
          .subscribe((img: Image) => {
            this.currentJoueur.image = img;
            this.joueurService
              .updateJoueur(this.currentJoueur)
              .subscribe((joueur) => {
                this.router.navigate(['joueurs']);
          });
        });
      }
      else{
        this.joueurService
        .updateJoueur(this.currentJoueur)
        .subscribe((joueur) => {
        this.router.navigate(['joueurs']);
        });
      }

  }

  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated =true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }



}
