import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-girls-view',
  templateUrl: './girls-view.component.html',
  styleUrls: ['./girls-view.component.css']
})
export class GirlsViewComponent implements OnInit {

    @Input() item;

	constructor() { }

	ngOnInit() {
	}

}