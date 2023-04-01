package com.skilldistillery.trails.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.trails.entities.Trail;
import com.skilldistillery.trails.services.TrailService;

@RestController
@RequestMapping("api")
public class TrailController {
	
	@Autowired
	private TrailService trailService;
	
	@GetMapping("showall")
	public List<Trail> listAllTrails(){
		return trailService.listAllTrails();
	}
	
	@GetMapping("showtrailbyid")
	public Trail getTrailById(int id) {
		return trailService.getTrailById(id);
	}
	
	@PostMapping("create")
	public Trail create(Trail trail) {
		return trailService.create(trail);
	}

}
