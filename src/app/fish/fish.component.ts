import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
})
export class FishComponent implements OnChanges, OnDestroy {
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

  ngOnChanges(changes: SimpleChanges): void {
    // speed changes
    if (changes.speed) {
      const { currentValue, previousValue } = changes.speed;
      if (currentValue !== previousValue) {
        if (this.speedTimer) {
          this.clearTimer();
        }
        this.setTimer();
      }
    }
    // swimming changes
    if (changes.isSwimming) {
      if (changes.isSwimming.currentValue) {
        if (!this.speedTimer) {
          this.setTimer();
        }
      } else if (!changes.isSwimming.currentValue) {
        this.clearTimer();
      }
    }
  }
  ngOnDestroy(): void {
    this.clearTimer();
  }
  swim(): void {
    if (this.left === 90) {
      this.isL2R = false;
    }
    if (this.left === 10) {
      this.isL2R = true;
    }

    if (this.isL2R) {
      this.left += 1;
    } else {
      this.left -= 1;
    }
  }
  setTimer(): void {
    this.speedTimer = setInterval(() => {
      console.log(`${this.name} swimming ${this.depth}`);
      this.swim();
    }, this.speed);
  }
  clearTimer(): void {
    clearInterval(this.speedTimer);
    this.speedTimer = null;
  }
}
