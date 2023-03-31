package com.skilldistillery.trails.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trails.entities.Trails;
import com.skilldistillery.trails.repositories.TrailsRepository;

@Service
public class TrailsServiceImpl implements TrailsService {
	
	@Autowired
	private TrailsRepository trailsRepo;

	@Override
	public List<Trails> listAllTrails() {
		return trailsRepo.findAll();
	}

	@Override
	public Trails getTrails(int id) {
		
		return null;
	}

	@Override
	public Trails create(Trails trails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Trails update(int id, Trails trails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
