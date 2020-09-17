import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-link-component',
  template: `
    <a
      [href]="href"
      (mouseenter)="onEnter($event)"
      (mouseleave)="onLeave($event)"
      >{{ text }}</a
    >
    <br />
    <p *ngIf="description">{{ description }}</p>
  `,
  styleUrls: [`link.component.scss`],
  /*
    emulates the behavior: component style ✅ > global style ✅. override global style ❌
  */
  // encapsulation: ViewEncapsulation.Emulated,
  /*
    browser's native shadow: component style ✅. global style ❌. override global style ❌
  */
  // encapsulation: ViewEncapsulation.ShadowDom,
  /*
    no shadow DOM: global style ❌. component style ✅. override global style ✅
  */
  // encapsulation: ViewEncapsulation.None,

  // encapsulation: ViewEncapsulation.Native // deprecated 🚫
})
export class AppLinkComponent {
  @Input() href: string;
  @Input() text: string;
  description: string;

  onEnter(e) {
    this.description = `Search Engine`;
  }
  onLeave(e) {
    this.description = ``;
  }
}
