package com.skilldistillery.trails.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.trails.entities.Trails;
import com.skilldistillery.trails.services.TrailsService;

@RestController
@RequestMapping("api")
public class TrailsController {
	
	@Autowired
	private TrailsService trailsService;
	
	@GetMapping("traillist")
	public List<Trails> getTrailList(){
		return trailsService.listAllTrails();
	}

}
