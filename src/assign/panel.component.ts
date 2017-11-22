import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'panel',
  styleUrls:['panel.component.css'],
  template: `
  <div *ngIf="title">
  <table  [ngClass]="{hide:opened}">
  <tr  (click)="toggle()"> 
    <td class="material-icons attachment-icon">attachment</td>
    <td class="title">{{title}}</td>
    <td class="col">Call in-bound 12/06/17 09:31 (Mornel,Normal)</td>
  </tr>
  </table>
  <div  [ngClass]="{hide: !opened}" (click)="toggle()"  class="panel-height"><ng-content></ng-content></div>
  </div>
 `,
  inputs: ['title']
})

export class Panel {
    opened: Boolean = false;
    toggle () {
      this.opened = !this.opened;
    }
  }
