package com.skilldistillery.trails.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trails.entities.Location;
import com.skilldistillery.trails.repositories.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationRepository locatRepo;

	@Override
	public List<Location> listAllLocations() {
		return locatRepo.findAll();
	}

	@Override
	public Location getLocationById(int id) {
		return locatRepo.getLocationById(id);
	}

	@Override
	public Location create(Location location) {
		return locatRepo.saveAndFlush(location);
	}

	@Override
	public Location update(int id, Location location) {
		Optional<Location> locationOpt = locatRepo.findById(id);
		if (locationOpt.isPresent()) {
			Location updatedLocation = locationOpt.get();
			updatedLocation.setCity(location.getCity());	
			locatRepo.saveAndFlush(updatedLocation);
			return updatedLocation;
		}
		return null;
	}

	@Override
	public boolean deleteById(int id) {
		boolean deleted = false;
		Optional<Location> locationOpt = locatRepo.findById(id);
		if (locationOpt.isPresent()) {
			locatRepo.delete(locationOpt.get());
			deleted = true;
		}
		return deleted;
	}

}
