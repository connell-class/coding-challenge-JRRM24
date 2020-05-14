import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {GroceryListService} from 'C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-list.service'
import {GroceryItemService} from 'C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-item.service'

@Component({
  selector: 'app-grocery-details',
  templateUrl: './grocery-details.component.html',
  styleUrls: ['./grocery-details.component.css']
})
export class GroceryDetailsComponent implements OnInit {

  list;
  items = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private groceryItemSerivce: GroceryItemService,
    private groceryListService: GroceryListService
  ) { }

  deleteItem(id) {

  }
  
  ngOnInit(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.groceryListService.getListById(id)
    .then(response => this.list = response);

    this.groceryItemSerivce.getItemsByListId(id)
    .then(response => this.populateList(response));
    console.log(this.items);
  
  }

  populateList(object) {
    console.log(object);
    for (let item of object) {
      this.items.push(item);
    }
  }

  goBack(): void {
    this.location.back();
  }
}