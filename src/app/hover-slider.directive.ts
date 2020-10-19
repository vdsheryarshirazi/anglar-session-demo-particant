import { Directive, HostListener } from '@angular/core';
interface JQuery {
  chosen(options?:any):JQuery;
}

import * as $ from 'jquery';

@Directive({
  selector: '[appHoverSlider]'
})
export class HoverSliderDirective {

  constructor() {}

  @HostListener('mouseover', ['$event'])
  onMouseOver(evt) {
    var windowWidth = $(window).width();

    var cartWidth = $(".product").length * 200;
      if (windowWidth < cartWidth)
        $(".cart")
          .stop(false, true)
          .animate({
            left: -(evt.clientX / windowWidth) * (cartWidth - windowWidth),
          });
      else
        $(".cart").stop(false, true).css({
          left: 0,
        });
  }


}
