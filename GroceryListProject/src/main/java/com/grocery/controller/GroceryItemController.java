package com.grocery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.model.GroceryItem;
import com.grocery.model.GroceryList;
import com.grocery.repo.GroceryItemDaoContract;
import com.grocery.repo.GroceryListDaoContract;

@RestController
@CrossOrigin
@RequestMapping("/item")

public class GroceryItemController {
	@Autowired
	private GroceryItemDaoContract dao;
	@Autowired
	private GroceryListDaoContract gldao;
	
	@GetMapping("/{list_id}")
	public List<GroceryItem> getItemByListId(@PathVariable int list_id) {
		return dao.getItemsbyListId(list_id);
	}
	
	@GetMapping("/create/{type}/{list_id}/{name}")
	public GroceryItem makeItem(@PathVariable String type, @PathVariable int list_id, @PathVariable String name) {
		int newId = dao.findAll().size();
		GroceryList gl = gldao.getOne(list_id);
		GroceryItem newItem = new GroceryItem(newId, type, name, gl);
		dao.save(newItem);
		return newItem;

	}
	
	@DeleteMapping("/delete/{id}")
	public GroceryItem deleteItemById(@PathVariable int id) {
		GroceryItem deleted = dao.getOne(id);
		dao.deleteById(id);
		return deleted;
	}
	
	
	
}


