package com.skilldistillery.trails.services;

import java.util.List;

import com.skilldistillery.trails.entities.Trail;

public interface TrailService {
	
	List<Trail> listAllTrails();
	Trail getTrailById(int id);
	Trail create(Trail trail);
	Trail update(int id, Trail trail);
	boolean deleteById(int id);
	
}
