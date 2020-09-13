import { Component, OnInit } from '@angular/core';
interface IFish {
  id: number;
  name: string;
  swimming: boolean;
  src: string;
  depth: number;
  speed: number;
}

@Component({
  selector: 'app-pound',
  templateUrl: './pound.component.html',
  styleUrls: ['./pound.component.scss', './table.scss'],
})
export class PoundComponent {
  fishes: IFish[];
  constructor() {
    this.fishes = [
      {
        id: 1,
        name: 'Fish 1',
        swimming: true,
        src: 'fish1.gif',
        depth: 0,
        speed: 100,
      },
      {
        id: 2,
        name: 'Fish 2',
        swimming: true,
        src: 'fish2.gif',
        depth: 7,
        speed: 300,
      },
      {
        id: 3,
        name: 'Turtle',
        swimming: true,
        src: 'turtle.gif',
        depth: 16,
        speed: 500,
      },
    ];
  }
  catchFish(i: number): void {}
  stop(index: number): void {}
  start(index: number): void {}
  incSpeed(index: number): void {}
  decSpeed(index: number): void {}
}
