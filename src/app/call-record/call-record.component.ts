import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-call-record',
  templateUrl: './call-record.component.html',
  styleUrls: ['./call-record.component.scss'],
})
export class CallRecordComponent {
  @Input() name: string;
  @Input() duration: string;
  @Input() number: string;
  @Input() direction: string;
  constructor() {}

  // one-way
  toggle(): void {
    this.direction = this.direction === 'In' ? 'Out' : 'In';
  }
}
