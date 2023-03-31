package com.skilldistillery.trails.services;

import java.util.List;

import com.skilldistillery.trails.entities.Trails;

public interface TrailsService {
	
	List<Trails> listAllTrails();
	Trails getTrails(int id);
	Trails create(Trails trails);
	Trails update(int id, Trails trails);
	boolean deleteById(int id);
	
}
