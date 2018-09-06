import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.scss']
})
export class LootComponent implements OnInit {
  public loot: number;

  constructor(private router: Router) {
    this.loot = parseInt(localStorage.getItem('loot'), 10);
  }

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

  canDeactivate() {
    return window.confirm('OH REALLY!?!?');
  }
}
