import { Component, OnInit } from '@angular/core';
import { MensService } from './mens.service';
import { Item } from './item.model';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  constructor(private mensService:MensService) {
	}


  ngOnInit() {
  }

  public addedItem(item:Item){
		this.mensService.addItem(item);
}

}
