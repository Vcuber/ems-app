package com.ems.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.ems.api.models.Doctor;

public interface DocRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findByDocDept(String docDept);
}
