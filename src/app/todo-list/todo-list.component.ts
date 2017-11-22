import { Component } from '@angular/core';
import { TodoService } from './todo-list.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './todo-list.component.html',
  providers : [TodoService]
  

})
export class TodosComponent {

  public foods;
  public books;
  public movies;

  public food_name;

  constructor(private _todoservice: TodoService) { }

  ngOnInit() {
    this.getFoods();
    this.getBooksAndMovies();
  }

  getFoods() {
    this._todoservice.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.foods = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  getBooksAndMovies() {
    this._todoservice.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }

  createFood(name) {
    let food = {name: name};
    this._todoservice.createFood(food).subscribe(
       data => {
         // refresh the list
         this.getFoods();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  updateFood(food) {
    this._todoservice.updateFood(food).subscribe(
       data => {
         // refresh the list
         this.getFoods();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  deleteFood(food) {
    if (confirm("Are you sure you want to delete " + food.name + "?")) {
      this._todoservice.deleteFood(food).subscribe(
         data => {
           // refresh the list
           this.getFoods();
           return true;
         },
         error => {
           console.error("Error deleting food!");
           return Observable.throw(error);
         }
      );
    }
  }
}