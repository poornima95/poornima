import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDetailComponent } from './products/product-detail.component';
import { AppComponent } from './app.component';
import { AppView } from './view.component';
import { AppInsert } from './insert.component';
import { AppEdit } from './edit.component';
import { AppDelete } from './delete.component';
import { AppUpdate } from './update.component';
import { AppLogin } from './login.component';
import { AppUser } from './user.component';
import { ProductService } from './products/product.service';
import { TodosComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo-list/todo-list.service';


const appRoutes: Routes = [
   { path: 'details/:productId', component: ProductDetailComponent },
   { path: 'view', component: AppView },
   { path: 'insert', component: AppInsert },
   { path: 'edit', component: AppEdit },
   { path: 'delete', component: AppDelete },
   { path: 'update/:id', component: AppUpdate},
   { path: 'login', component: AppLogin},
    { path: 'user', component: AppUser}
   
  
];

@NgModule({
  declarations:[
    
	ProductListComponent,
	WelcomeComponent,
	ProductFilterPipe,
	StarComponent,
  ProductDetailComponent,
  AppComponent,  
  AppView,
  AppInsert,
  AppEdit,
  AppDelete,
  AppUpdate,
  AppLogin,
  AppUser,
  TodosComponent

	
	],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  HttpClientModule,
	 RouterModule.forRoot(appRoutes),
	
   
   
   
  ],
  
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }