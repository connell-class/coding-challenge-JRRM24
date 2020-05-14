import { Component, OnInit } from '@angular/core';
import {GroceryListService} from 'C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-list.service'
import {GroceryItemService} from 'C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-item.service'
@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {
  lists = [];

  constructor(
    private groceryListService: GroceryListService,
    private groceryItemService: GroceryItemService
  ) { }

  ngOnInit(): void {
    this.groceryListService.getAllLists()
    .then(response => this.populateList(response));
  }

  publicList(response) {
    for (let i = 0; i < response.length(), i++) {
      this.lists.push(response[i]);
    }
  }

}



//     .then(response => response.json())
//.then(json => implant(json))