package com.grocery.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name ="grocery_item" )
public class GroceryItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	private String name;
	private String type; 
	
	@ManyToOne
	@JoinColumn(name="list_id")
	@JsonIgnore
	private GroceryList gl;

	public GroceryItem(int id, String type, String name, GroceryList gl) {
		super();
		this.name = name;
		this.id = id;
		this.type = type;
		this.gl = gl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public GroceryItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public GroceryList getGl() {
		return gl;
	}

	public void setGl(GroceryList gl) {
		this.gl = gl;
	}

	
}
