package com.skilldistillery.trails.services;

import java.util.List;

import com.skilldistillery.trails.entities.Location;

public interface LocationService {
	
	List<Location> listAllLocations();
	Location getLocations(int id);
	Location create(Location location);
	Location update(int id, Location location);
	boolean deleteById(int id);

}
