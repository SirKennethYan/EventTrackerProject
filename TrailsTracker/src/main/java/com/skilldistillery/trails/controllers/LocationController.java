package com.skilldistillery.trails.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.trails.entities.Location;
import com.skilldistillery.trails.services.LocationService;

@RestController
@RequestMapping("api")
public class LocationController {
	
	@Autowired
	private LocationService locatService;
	
	@GetMapping("locationslist")
	public List<Location> getTrailList(){
		return locatService.listAllLocations();
	}

}
