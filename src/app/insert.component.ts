import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CrudService } from './crud.service';
import { Employee } from './crud';


@Component({
  selector: 'app-root',
  templateUrl: './insert.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CrudService]
})
export class AppInsert implements OnInit {

   

  constructor(
    private crudService: CrudService,
     private router: Router) { }

  ngOnInit() {
  }
public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];
public roles = [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
];

public hobbies = [
    { value: 'game', display: 'Gaming' },
    { value: 'tech', display: 'Technology' },
    { value: 'life', display: 'Lifestyle' },
];
public status = [
    { value: 'active', display: 'Active' },
    { value: 'inactive', display: 'In-active' },
];
 


model = new Employee('','','','',[],'','');

  addEmployee(){
   
     
     
      this.crudService
        .addemp(this.model)
        .subscribe(()=> this.goBack());
		console.log(this.model);
  }
  
   goBack(){
    this.router.navigate(['/view']);
  }

 

}
 
  
  