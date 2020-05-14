package com.grocery.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.model.*;
public interface GroceryListDaoContract extends JpaRepository<GroceryList, Integer> {

}
