import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../item.model'

@Component({
  selector: 'app-mens-add',
  templateUrl: './mens-add.component.html',
  styleUrls: ['./mens-add.component.css']
})
export class MensAddComponent implements OnInit {
	@Output() addedItem: EventEmitter<Item> = new EventEmitter<Item>();
	public itemName: string = ''
	public itemPrice: string = ''
	public itemSize: string = ''
	public itemDescription: string = '';
	public descriptionDisabled: boolean = true;
	constructor() { }

	ngOnInit() {
	}

	public addItem(){
		let item = new Item();
		item.name = this.itemName || 'Jeans';
		item.price = 4000;
		item.size = this.itemSize || 'L,XL';
		item.description = this.itemDescription || 'Jeans Original';
		this.addedItem.emit(item);
		this.itemName = '';
		this.itemDescription = '';
	}

}