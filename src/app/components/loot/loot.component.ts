import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.scss']
})
export class LootComponent implements OnInit {
  public loot: number;

  constructor() {
    this.loot = parseInt(localStorage.getItem('loot'), 10);
  }

  ngOnInit() {
  }

}
