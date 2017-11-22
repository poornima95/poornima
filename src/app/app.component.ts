import { Component } from '@angular/core';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls:['app.component.css']
})

export class AppComponent{

   appTitle: string = 'CRUD Operations';
   hidelogin: boolean = false;
   color:string='#3c3c3c';
    border:number=0;

toggleImage(): void {
        this.hidelogin = !this.hidelogin;
    }

	}


