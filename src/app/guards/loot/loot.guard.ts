import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LootGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      let loot = '';

      if (user.type === 'admin') {
        loot = '9001';
      } else if (user.type === 'paid_user') {
        loot = '500';
      } else if (user.type === 'dragon') {
        loot = '100000000000000';
      } else {
        loot = '-100'
      }

      localStorage.setItem('loot', loot);

      return true;
  }
}
