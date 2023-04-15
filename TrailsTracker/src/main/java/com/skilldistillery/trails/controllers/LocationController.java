package com.skilldistillery.trails.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.trails.entities.Location;
import com.skilldistillery.trails.services.LocationService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class LocationController {
	
	@Autowired
	private LocationService locatService;
	
	@GetMapping("locationslist")
	public List<Location> getTrailList(){
		return locatService.listAllLocations();
	}
	
	@GetMapping("showlocationbyid/{id}")
	public Location getLocationById(@PathVariable int id) {
		return locatService.getLocationById(id);
	}
	
	@PostMapping("createLocation")
	public Location createTrail(@RequestBody Location location, HttpServletRequest req, HttpServletResponse res) {
		try {
			location = locatService.create(location);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(location.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			location = null;
		}
		return location;
	}
	
	@PutMapping("updatelocation/{id}")
	public Location updateTrail(@PathVariable int id, @RequestBody Location location, HttpServletRequest req,
			HttpServletResponse res) {
		try {
			location = locatService.update(id, location);
			if (location == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);

			location = null;
		}
		return location;
	}
	
	@DeleteMapping("deletelocation/{id}")
	public void deleteLocation(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (locatService.deleteById(id)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}

}
