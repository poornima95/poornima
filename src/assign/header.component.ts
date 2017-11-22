import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'header', 
  templateUrl: './header.component.html',
  styleUrls:['header.component.css'],
})
export class Header {
    public checkbox = [
        {  display: 'Call' },
        {  display: 'Email' },
        {  display: 'Claim' },
        {  display: 'Appeal' },
    ];
    public dropdown2 = [
      {  display: 'Bothways' },
      {  display: 'In-Bound' },
      {  display: 'Out-Bound' }
  ];
  public dropdown1 = [
    {  display: 'Oliver Moran(61102457)' },
    {  display: 'Oifo Ni chiian (679109473)' },
    {  display: 'Fianchina O  Morian(678044345)' }
  ];
  }
