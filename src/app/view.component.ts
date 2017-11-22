import { Component } from '@angular/core';
import {CrudService} from './crud.service';
import {Employee} from './crud';
import 'rxjs/add/operator/map';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component ({
   selector: 'app-root',
   templateUrl: './view.component.html',
   styleUrls :['app.component.css'],
   providers : [CrudService]
})

export   class   AppView  {
constructor
				(private _CrudService: CrudService, private router: Router,
    private route: ActivatedRoute,) { }  
				cruds: Employee[];
				ngOnInit()
				{ 
						this.view();
				}
				view()
				{
					this._CrudService.view()
					.subscribe(cruds => 
					{
						this.cruds = cruds;
					
					});
					
				}
					
		
deleteEmployee(id){
      this._CrudService
        .del(id)
        .subscribe(() => {
        this.view();
      } )
  }

delarr:Employee[]=[];

checkbox(crud:Employee){
if(this.delarr.find(x=>x==crud))
{
this.delarr.splice(this.delarr.indexOf(crud),1)
console.log(this.delarr);

}
else{
this.delarr.push(crud);
console.log(this.delarr);

}
 
}

	delemployee(id){
 

   
    this._CrudService
      .delemp(this.delarr)
       .subscribe(() =>this.goBack());
		console.log(this.delarr);
  
  console.log("success");
  }
goBack(){
    this.router.navigate(['/user']);
  }

 }

				  


				