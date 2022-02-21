import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { NiveshComponent } from './nivesh/nivesh.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'app', component: NiveshComponent, canActivate: [AuthGuard] },
  // { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
