import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProfileDetailsComponent } from './pages/profile-details.component';

const routes:Routes = [
  { path: '', component:ProfileDetailsComponent, pathMatch: 'full' },
    {path : 'profileDetails/:id', component:ProfileDetailsComponent}
];


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }