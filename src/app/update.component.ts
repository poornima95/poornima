import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CrudService } from './crud.service';
import { Employee } from './crud';

@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CrudService]
})
export class AppUpdate implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit() {
      this.getSingleEmployee();
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
  id = this.route.snapshot.params['id'];
  name = this.route.snapshot.params['name'];
  getSingleEmployee(){

   
    this.crudService
      .getemp(this.id)
      .subscribe(employee =>{
          this.model = employee[0];
		  
          })
		 
  };
  
  updateEmployee(){
   console.log(this.model); 
      this.crudService
        .updateEmployee(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/view']);
  }

  
  }