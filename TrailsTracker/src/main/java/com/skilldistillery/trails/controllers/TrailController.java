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

import com.skilldistillery.trails.entities.Trail;
import com.skilldistillery.trails.services.TrailService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class TrailController {

	@Autowired
	private TrailService trailService;

	@GetMapping("showall")
	public List<Trail> listAllTrails() {
		return trailService.listAllTrails();
	}

	@GetMapping("showtrailbyid/{id}")
	public Trail getTrailById(@PathVariable int id) {
		return trailService.getTrailById(id);
	}

	@PostMapping("createtrail")
	public Trail createTrail(@RequestBody Trail trail, HttpServletRequest req, HttpServletResponse res) {
		try {
			trail = trailService.create(trail);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(trail.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			trail = null;
		}
		return trail;
	}

	@PutMapping("updatetrail/{id}")
	public Trail updateTrail(@PathVariable int id, @RequestBody Trail trail, HttpServletRequest req,
			HttpServletResponse res) {
		try {
			trail = trailService.update(id, trail);
			if (trail == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);

			trail = null;
		}
		return trail;
	}
	
	@DeleteMapping("deletetrail/{id}")
	public void deleteTrail(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (trailService.deleteById(id)) {
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
