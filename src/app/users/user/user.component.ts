import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ICoordinate } from '../../data/ICoordinate';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent
  implements OnInit, AfterContentInit, AfterContentChecked, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy /*, DoCheck */ {
  @Input() name;
  @Input() loaded = false;
  @Input() location: ICoordinate;
  locationLoaded = false;
  showForm = false;
  @ViewChild('nameRef', { static: false }) nameRef: ElementRef;

  /**
   * called very first sets Dependency Injector (DI)
   * called multiple types: ❌
   * only once: ✅
   */
  constructor() {
    console.log(`%cUserComponent: [constructor] name -> ${this.name}`, 'background: #222; color: red');
  }
  /**
   * when receives values (changes) from parent via @Input
   * only for component: ❌
   * called multiple types: ✅
   * only once: ❌
   * ⚠️ ngOnChanges and ngDoCheck should not called together
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.loaded.currentValue) {
      this.locationLoaded = true;
    }
    console.log(`\n\n%cUserComponent: [ngOnChanges] name -> ${this.name}`, 'background: #222; color: red');
    console.table(changes);
  }

  /**
   * Initialize the component after Angular first displays the data-bound properties and sets the component's input properties
   * Called once, after the first ngOnChanges()
   * only for component: ❌
   * called multiple types: ❌
   * only once: ✅
   */
  ngOnInit() {
    console.log(`%cUserComponent: [ngOnInit] name -> ${this.name}`, 'background: #222; color: red');
  }

  /*
   * AfterContentInit & AfterContentChecked hooks on child component instance (AfterContentInit is called only during first check)
   * Notifies that Angular ran change detection for the projected content (ng-content).
   * Use it if you need to query projected elements using @ContentChildren decorator.
   * only for component: ✅
   */
  ngAfterContentInit() {
    console.log(`%cUserComponent: [ngAfterContentInit] name -> ${this.name}`, 'background: #222; color: red');
  }
  ngAfterContentChecked() {
    console.log(`%cUserComponent: [AfterContentChecked] name -> ${this.name}`, 'background: #222; color: red');
  }
  /**
   * Notifies that Angular ran change detection for the view content.
   * Use it if you need to query view elements using @ViewChildren decorator.
   * only for component: ✅
   */
  ngAfterViewChecked() {
    console.log(`%cUserComponent: [ngAfterViewChecked] nameRef -> ${this.nameRef}`, 'background: #222; color: red');
  }
  ngAfterViewInit() {
    console.log(`%cUserComponent: [ngAfterViewChecked] nameRef -> ${this.nameRef}`, 'background: #222; color: red');
  }
  /**
   * calls before component destroy
   * only for component: ❌
   * called multiple types: ❌
   * only once: ✅
   */
  ngOnDestroy() {}
  /**
   * whenever component is being checked
   * only for component: ❌
   * called multiple types: ✅
   * only once: ❌
   */
  /* ngDoCheck() {
    console.log(`%cUserComponent: [ngDoCheck] name -> ${this.name}`, 'background: #222; color: red');
  } */

  toggleForm() {
    this.showForm = !this.showForm;
    console.log(`%cUserComponent: [toggleForm] nameRef -> ${this.nameRef}`, 'background: #222; color: red');
  }
}
