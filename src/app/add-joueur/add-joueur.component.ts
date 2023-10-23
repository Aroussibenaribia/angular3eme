import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';
import { Label } from '../model/label.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  newJoueur = new Joueur();

  labels!: Label[];
  newLabelId!: number;
  newLabel!: Label;
  uploadedImage!: File;
  imagePath: any;

  constructor(private joueurService: JoueurService, private router : Router) {}

  ngOnInit(): void {
    /* this.labels = this.joueurService.labelsList(); */
    this.joueurService.labelsList().subscribe (data => {
      this.labels = data;
      console.log(data);
      console.log(this.newLabelId);
    })
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }


  addJoueur() {
    this.joueurService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
        .subscribe((img: Image) => {
          this.newJoueur.image=img;
          this.newJoueur.label = this.labels.find(label => label.idLabel == this.newLabelId)!;
          this.joueurService
            .addJoueur(this.newJoueur)
              .subscribe(() => {
                this.router.navigate(['joueurs']);
              });
    });
  }

}
