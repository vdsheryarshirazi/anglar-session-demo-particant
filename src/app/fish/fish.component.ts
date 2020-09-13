import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
})
export class FishComponent {
  @Input() speed: number;
  @Input() depth: number;
  @Input() src: string;
  @Input() name: string;
  @Input() isSwimming: boolean;

  private speedTimer: number;
  isL2R: boolean;
  left: number;

  constructor() {
    this.left = 0;
    this.depth = 0;
    this.isL2R = true;
  }
}
