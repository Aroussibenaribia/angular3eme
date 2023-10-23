import { Component, OnInit } from '@angular/core';
import { Label } from '../model/label.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-liste-labels',
  templateUrl: './liste-labels.component.html',
  styleUrls: ['./liste-labels.component.css']
})
export class ListeLabelsComponent implements OnInit {

  labels!: Label[];

  updatedLab: Label = {"idLabel":0, "labelName":"", "labelFounder":"", "labelCountry":""};

  ajout: boolean = true;

  constructor(private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.joueurService.labelsList().subscribe(data => {
      this.labels = data;
    });
  }

  loadLabels() {
    this.joueurService.labelsList().subscribe(data => {
      this.labels = data;
    });
  }

  labelUpdated(label: Label) {
    console.log("Lab Updated event received", label);
    this.joueurService.addLabel(label).subscribe (() => {this.loadLabels();});
  }

  updateLab(lab : Label) {
    this.updatedLab = lab;
    this.ajout = false;
  }

}
