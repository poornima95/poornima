import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ContactlogComponent} from './contactlog.component';
import {ContactLog} from './contactlog';
import { HttpModule } from '@angular/http';
import {Panel} from './panel.component';
import {Header} from './header.component';
import {Log} from './log.component';
import {Footer} from './footer.component';
@NgModule({
  declarations:[
    
    ContactlogComponent,
    Panel,Header,Log,Footer,
	
	],
  
  imports: [
    BrowserModule,
    HttpModule,

],
  
  bootstrap: [ContactlogComponent],

})
export class ContactlogModule { }