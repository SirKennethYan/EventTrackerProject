package com.skilldistillery.trails.services;

import java.util.List;

import com.skilldistillery.trails.entities.Trail;

public interface TrailService {
	
	List<Trail> listAllTrails();
	Trail getTrails(int id);
	Trail create(Trail trails);
	Trail update(int id, Trail trails);
	boolean deleteById(int id);
	
}
