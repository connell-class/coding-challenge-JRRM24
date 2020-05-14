import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {GroceryListService} from 'C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-list.service'
import {GroceryItemService} from 'C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-item.service'
@Component({
  selector: 'app-singlelisthome',
  templateUrl: './singlelisthome.component.html',
  styleUrls: ['./singlelisthome.component.css']
})
export class SinglelisthomeComponent implements OnInit {
  @Input() list; 
  items = [];
  constructor(
    private groceryItemSerivce: GroceryItemService,
    private groceryListService: GroceryListService
  ) { }

  ngOnInit(): void {
   let id = this.list.id;
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
}

