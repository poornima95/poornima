import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactLog} from './contactlog';

import {Panel} from './panel.component';

@Component({
selector: 'app-root',
templateUrl: './contactlog.component.html',
styleUrls:['contactlog.component.css'],



})

export class ContactlogComponent{
    public showdiv:boolean=false;
    public click:boolean=false;
    public attachment:boolean=false;
    public roles = [
        { value: '1', display: 'Fianchan O Morain(60411772402)' },
        { value: '2', display: 'Oliver Moran(6011772400)' },
    
    ];
    public hobbies = [
        { value: '1', display: 'Bothways' },
        { value: '2', display: 'InBound' },
        { value: '2', display: 'OutBound' },
    
    ];
    public status = [
        { value: '1', display: 'Call' },
        { value: '2', display: 'Email' },
        { value: '2', display: 'Claim' },
        { value: '2', display: 'Appeal' },
    ];
public month = [
    {  month: 'September', attachments:[ 
        { attach:'attachment1'},
        { attach:'attachment2'},
        {attach: 'attachment3'},
        {attach:'attachment4'}]
    },
    {  month: 'August', attachments:[ 
        { attach:'attachment1'},
        { attach:'attachment2'},
        {attach: 'attachment3'},
        {attach:'attachment4'}]
    },
    {  month: 'July', attachments:[ 
        { attach:'attachment1'},
        { attach:'attachment2'},
        {attach: 'attachment3'},
        {attach:'attachment4'}]
    },
    {  month: 'February', attachments:[ 
        { attach:'attachment1'},
        { attach:'attachment2'},
        {attach: 'attachment3'},
        {attach:'attachment4'}]
    },
    {  month: 'January', attachments:[ 
        { attach:'attachment1'},
        { attach:'attachment2'},
        {attach: 'attachment3'},
        {attach:'attachment4'}]
    },
   
    
    
   
];  
public detail = [
    {  desc: 'desc'},
    {  desc: 'desc1'},
    {   desc: 'desc2'},
    {   desc: 'desc3'},
    {   desc: 'desc4'},
    {   desc: 'desc5'},
];
title: string = 'my awesome title';

  body: string = 'my awesome content';





show(){
    this.showdiv=!this.showdiv;
}
clickhide(){
    this.click=!this.click;
   
	}
    attachhide(){
        this.attachment=!this.attachment;
       
        }
}