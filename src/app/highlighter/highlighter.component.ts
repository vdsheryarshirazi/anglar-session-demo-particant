import { Component, Input } from '@angular/core';

@Component({
  selector: `app-highlighter`,
  template: `
    <div>
      <span>
        {{ content }}
      </span>
    </div>
  `,
  // styleUrls: [`style.scss`],
  styles: [
    `
      /* only css works */
      /* div {
        background: yellow;
        span {
          color: red;
        }
      } */
      div {
        background: yellow;
      }
      span {
        color: red;
      }
    `,
  ],
})
export class AppHighlighterComponent {
  @Input() content: any;
}
