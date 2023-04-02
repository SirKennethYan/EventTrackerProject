package com.skilldistillery.trails.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.trails.entities.Location;
import com.skilldistillery.trails.entities.Trail;

public interface LocationRepository extends JpaRepository<Location, Integer>{
	Location getLocationById(int id);
}
