package com.skilldistillery.trails.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trails.entities.Location;
import com.skilldistillery.trails.entities.Trail;
import com.skilldistillery.trails.repositories.LocationRepository;
import com.skilldistillery.trails.repositories.TrailRepository;

@Service
public class LocationServiceImpl implements LocationService {
	
	@Autowired
	private LocationRepository locatRepo;


	@Override
	public List<Location> listAllLocations() {
		return locatRepo.findAll();
	}

	@Override
	public Location getLocations(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location create(Location location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location update(int id, Location location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
