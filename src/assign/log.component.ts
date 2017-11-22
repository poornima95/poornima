import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls:['log.component.css'],

 

})
export class Log {
    public month = [
        {  month: 'September', attachments:[ 
            {attach:'Vulgo,Impedit' ,description:'Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, in California.',
            documents:[{doc:'Document1'},{doc:'Document2'}],categories:[{category:'Category 1 > Subcategory 1'},{category:'Category 2 > Subcategory 2' }]},
            {attach:'attachment2'},
            {attach: 'attachment3'},
            {attach:'attachment4'}],
           
        },
        {  month: 'August', attachments:[ 
            { attach:'attachment1'},
            { attach:'attachment2'},
            {attach: 'attachment3'},
            {attach:'attachment4'}],documents:[{doc:'Document1'}]
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
  }
