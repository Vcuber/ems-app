package com.ems.api.repository;

import java.util.Optional;

import com.ems.api.models.Role;
import com.ems.api.models.Roles;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
    Optional<Role> findByName(Roles name);
}