import { Component, OnInit } from '@angular/core';
interface IFish {
  id: number;
  name: string;
  swimming: boolean;
  src: string;
  depth: number;
  speed: number;
  caught: boolean;
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
        caught: false,
      },
      {
        id: 2,
        name: 'Fish 2',
        swimming: true,
        src: 'fish2.gif',
        depth: 7,
        speed: 300,
        caught: false,
      },
      {
        id: 3,
        name: 'Turtle',
        swimming: true,
        src: 'turtle.gif',
        depth: 16,
        speed: 500,
        caught: false,
      },
    ];
  }
  catchFish(i: number): void {
    // this.fishes.splice(i, 1);
    this.fishes[i].caught = true;
  }
  stop(index: number): void {
    this.fishes[index].swimming = false;
  }
  start(index: number): void {
    this.fishes[index].swimming = true;
  }
  incSpeed(index: number): void {
    if (this.fishes[index].speed - 50 > 0) {
      this.fishes[index].speed -= 50;
    }
  }
  decSpeed(index: number): void {
    this.fishes[index].speed += 50;
  }
}
