package com.skilldistillery.trails.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.trails.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Integer>{

}
