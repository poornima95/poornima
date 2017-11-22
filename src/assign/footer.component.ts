import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls:['footer.component.css'],

 

})
export class Footer {
  public hidefooter:boolean=false;
  public dropdown1 = [
    {  display: 'Oliver Moran(61102457)' },
    {  display: 'Oifo Ni chiian (679109473)' },
    {  display: 'Fianchina O  Morian(678044345)' }
];
public dropdown2 = [
  {  display: 'Normal'}
];
public dropdown3 = [
  {  display: 'LOG AS CALL IN-BOUND'}
];
  show(){
    this.hidefooter= !this.hidefooter
  }
  }
