package com.skilldistillery.trails.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.trails.entities.Trails;

public interface TrailsRepository extends JpaRepository<Trails, Integer> {

}
