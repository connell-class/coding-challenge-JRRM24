package com.grocery.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.grocery.model.*;
public interface GroceryItemDaoContract extends JpaRepository<GroceryItem, Integer> {
	
	@Query(value="select * from grocery_item where list_id = ?1",
			nativeQuery = true)
	public List<GroceryItem> getItemsbyListId(int id);
	
	
}
