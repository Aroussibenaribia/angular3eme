import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { SearchByLabelComponent } from './search-by-label/search-by-label.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeLabelsComponent } from './liste-labels/liste-labels.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JoueurGuard } from './joueur.guard';
import { UsersComponent } from './users/users.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'joueurs', component: JoueursComponent },
  { path: 'users', component: UsersComponent },
  { path: 'searchByLabel', component: SearchByLabelComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'listeLabels', component: ListeLabelsComponent },
  {
    path: 'add-role-to-user/:id',
    component: AddRoleToUserComponent,
    canActivate: [JoueurGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'add-joueur',
    component: AddJoueurComponent,
    canActivate: [JoueurGuard],
  },
  {
    path: 'updateJoueur/:id',
    component: UpdateJoueurComponent,
    canActivate: [JoueurGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'joueurs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
