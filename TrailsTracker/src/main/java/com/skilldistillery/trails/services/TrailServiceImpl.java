package com.skilldistillery.trails.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.trails.entities.Trail;
import com.skilldistillery.trails.repositories.LocationRepository;
import com.skilldistillery.trails.repositories.TrailRepository;

@Service
public class TrailServiceImpl implements TrailService {
	
	@Autowired
	private TrailRepository trailRepo;
	
	@Autowired
	private LocationRepository localRepo;

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
		if (trail.getLocation() == null) {
			trail.setLocation(localRepo.getLocationById(1));
		}
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
		boolean deleted = false;
		Optional<Trail> trailOpt = trailRepo.findById(id);
		if (trailOpt.isPresent()) {
			trailRepo.delete(trailOpt.get());
			deleted = true;
		}
		return deleted;
	}

}
