import { Injectable } from '@angular/core';
import { Item } from './item.model'

@Injectable()
export class MensService {
	public items: Item[] = [
	 {
		name : 'T-Shirt',
		price : 1000,
		size : 's,m,l,xl',
		description : '100% cotton material'
	}
	];
	constructor() { 

	}

	public getItems(){
		return this.items;
	}

	public addItem (newItem:Item){
		this.items.push(newItem);
	}

	public removeItem(item:Item){
		this.items = this.items.filter(x => x !== item);
	}

	public editItem(){

	}

}