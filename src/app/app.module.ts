import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeLabelsComponent } from './liste-labels/liste-labels.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchByLabelComponent } from './search-by-label/search-by-label.component';
import { UpdateLabelComponent } from './update-label/update-label.component';
import { TokenInterceptor } from './services/token.interceptor';
import { UsersComponent } from './users/users.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    RechercheParNomComponent,
    ListeLabelsComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchByLabelComponent,
    UpdateLabelComponent,
    UsersComponent,
    AddRoleToUserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
