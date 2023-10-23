import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Label } from '../model/label.model';
import { Image } from '../model/image.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class JoueurService {

  apiURL: string = 'http://localhost:8080/joueurs/api';

  joueurs : Joueur[];
  joueur!: Joueur;

  constructor(private http: HttpClient, private authService : AuthService) { this.joueurs = []; }

    joueursList (): Observable<Joueur[]> {
      return this.http.get<Joueur[]>(this.apiURL + '/allJoueurs');
    }

    addJoueur ( al:Joueur ): Observable<Joueur> {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.post<Joueur>(this.apiURL + '/addJoueur', al, { headers: headers });
    }

    deleteJoueur ( id: number ) {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.delete(this.apiURL + '/deleteJoueur/' + id, { headers: headers });
    }

    getJoueurById ( id : number ) : Observable<Joueur> {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.get<Joueur>(this.apiURL + '/joueur/' + id, { headers: headers });
    }

    updateJoueur ( al:Joueur ): Observable<Joueur> {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.put<Joueur>(this.apiURL + '/updateJoueur', al, { headers: headers });
    }

    labelsList (): Observable<Label[]> {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.get<Label[]>(this.apiURL + '/labels/allLabels', { headers: headers });
    }

    rechrcheParLabel ( idLabel : number ) : Observable< Joueur[] > {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.get<Joueur[]>(this.apiURL + '/label/' + idLabel, { headers: headers });
    }

    addLabel ( lab:Label ): Observable<Label> {
      let token = this.authService.getToken();
      token = "Bearer " + token;
      let headers = new HttpHeaders({'Authorization': token});
      return this.http.post<Label>(this.apiURL + '/labels/addLabel', lab, { headers: headers });
    }

    uploadImage(file: File, filename: string): Observable<Image>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/upload'}`;
      return this.http.post<Image>(url, imageFormData);
    }

      loadImage(id: number): Observable<Image> {
      const url = `${this.apiURL + '/image/get/info'}/${id}`;
      return this.http.get<Image>(url);
    }
  }
