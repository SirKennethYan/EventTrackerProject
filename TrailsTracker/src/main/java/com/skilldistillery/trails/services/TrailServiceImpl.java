package com.skilldistillery.trails.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trails.entities.Trail;
import com.skilldistillery.trails.repositories.TrailRepository;

@Service
public class TrailServiceImpl implements TrailService {
	
	@Autowired
	private TrailRepository trailRepo;

	@Override
	public List<Trail> listAllTrails() {
		return trailRepo.findAll();
	}

	@Override
	public Trail getTrailById(int id) {
		return trailRepo.getTrailById(id);
	}

	@Override
	public Trail create(Trail trail) {
		return trailRepo.saveAndFlush(trail);
	}

	@Override
	public Trail update(int id, Trail trail) {
		Optional<Trail> trailOpt = trailRepo.findById(id);
		if (trailOpt.isPresent()) {
			Trail updatedTrail = trailOpt.get();
			updatedTrail.setName(trail.getName());
			updatedTrail.setImageUrl(trail.getImageUrl());
			updatedTrail.setDescription(trail.getDescription());
			updatedTrail.setTrailLength(trail.getTrailLength());
			updatedTrail.setElevationGain(trail.getElevationGain());
			updatedTrail.setRouteType(trail.getRouteType());
			updatedTrail.setDateHiked(trail.getDateHiked());
			trailRepo.saveAndFlush(updatedTrail);
			return updatedTrail;
		}
		return null;
	}

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
