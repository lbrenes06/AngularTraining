import { Component, OnInit } from '@angular/core';
import { GirlsService } from './girls.service';
import { Item } from './item.model';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  constructor(private girlsService:GirlsService) {
	}


  ngOnInit() {
  }

  public addedItem(item:Item){
		this.girlsService.addItem(item);
}

}
