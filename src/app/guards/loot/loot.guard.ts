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

      if (user.type === "admin") {
        localStorage.setItem('loot', '9001');

      } else if (user.type === 'paid_user') {
        localStorage.setItem('loot', '500');

      } else {
        localStorage.setItem('loot', '0');

      }

      return true;
    }
}
