import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LootComponent } from './components/loot/loot.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth/auth.guard';
import { LootGuard } from './guards/loot/loot.guard';

const routes: Routes = [
  {
    path: 'loot',
    component: LootComponent,
    canActivate: [AuthGuard, LootGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/loot', pathMatch: 'full' },
  { path: '**', redirectTo: '/loot', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
