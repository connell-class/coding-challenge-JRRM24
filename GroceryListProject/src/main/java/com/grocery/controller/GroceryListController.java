package com.grocery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.grocery.model.*;
import com.grocery.repo.*;
@RestController
@CrossOrigin
@RequestMapping("/list")
public class GroceryListController {
	@Autowired
	private GroceryListDaoContract glc;
	
	@GetMapping
	public List<GroceryList> getAllLissts() {
		return glc.findAll();
	}
	
	@PostMapping
	public GroceryList createList(@RequestBody GroceryList gl) {
		glc.save(gl);
		return gl;
	}
	
	
	@DeleteMapping("/delete/{id}")
	public GroceryList deleteById(@PathVariable int id) {
		GroceryList deleted = glc.getOne(id);
		glc.deleteById(id);
		return deleted;
	}
	
	@PutMapping("/update") 
	public GroceryList updateList(@RequestBody GroceryList gl) {
		glc.save(gl);
		return gl;
	}
	
	@GetMapping("/{id}")
	public GroceryList getListById(@PathVariable int id) {
		return glc.getOne(id);
		
	}
	
}
