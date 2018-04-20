import { Injectable } from '@angular/core';
import { Item } from './item.model'

@Injectable()
export class GirlsService {
	public items: Item[] = [{
		name : 'Tan Top',
		price : 2000,
		size : 's,m,l',
		description : '100% cotton material',
		image : 'item-1.jpg'
	},
    {
		name : 'Maxi Dress',
		price : 10000,
		size : 's,m',
		description : '100% cotton material',
		image : 'item-2.jpg'
	},
	 {
		name : 'T-Shirt',
		price : 1000,
		size : 's,m,l,xl',
		description : '100% cotton material',
		image : 'item-3.jpg'
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