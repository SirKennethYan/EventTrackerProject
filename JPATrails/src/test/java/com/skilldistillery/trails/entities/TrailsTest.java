package com.skilldistillery.trails.entities;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Locale.Category;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TrailsTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Trails trails;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPATrails");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		trails = em.find(Trails.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		trails = null;
	}

	@Test
	void test_Trails_entity_mapping() {
		assertNotNull(trails);
		assertEquals("Contra Loma Shore Loop", trails.getName());
	}

}
