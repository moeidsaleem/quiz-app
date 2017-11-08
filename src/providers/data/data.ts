import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

	data: any;
	 quiz;
	 category;
	 sub;
	constructor(public http: Http) {

	}

	load(){

		if(this.data){
			return Promise.resolve(this.data);
		}

		return new Promise(resolve => {

			console.log(this.category);
			console.log(this.sub);
			console.log(this.quiz);
			this.http.get('./assets/data/quizes/'+this.category+'/'+this.sub+'/'+this.quiz+'.json').map(res => res.json()).subscribe(data => {
			
					this.data=data.questions;
					resolve(this.data);
			
			});

		});

	}

}