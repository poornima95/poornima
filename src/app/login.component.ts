import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CrudService } from './crud.service';
import { Employee } from './crud';

@Component({
selector: 'app-root',
templateUrl: './login.component.html',
styleUrls:['app.component.css'],
 providers : [CrudService]
})

export class AppLogin{

	}
	


