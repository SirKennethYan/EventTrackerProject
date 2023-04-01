package com.skilldistillery.trails.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trails.entities.Trail;
import com.skilldistillery.trails.repositories.TrailRepository;

@Service
public class TrailServiceImpl implements TrailService {
	
	@Autowired
	private TrailRepository trailsRepo;

	@Override
	public List<Trail> listAllTrails() {
		return trailsRepo.findAll();
	}

	@Override
	public Trail getTrails(int id) {
		
		return null;
	}

	@Override
	public Trail create(Trail trails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Trail update(int id, Trail trails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
