import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TodoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get('/assets/food.json').map((res:Response) => res.json());
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    getBooksAndMovies() {
        return Observable.forkJoin(
        this.http.get('/assets/books.json').map((res:Response) => res.json()),
        this.http.get('/assets/movies.json').map((res:Response) => res.json())
        );
    }

    createFood(food) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(food);
        return this.http.post('/assets/food.json/', body, options).map((res:Response) => res.json());
    }

    updateFood(food) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(food);
        return this.http.put('/assets/food.json/' + food.id, body, options).map((res:Response) => res.json());
    }

    deleteFood(food) {
        return this.http.delete('/assets/food.json/' + food.id);
    }

}