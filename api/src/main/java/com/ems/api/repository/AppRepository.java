package com.ems.api.repository;

import java.util.List;

import com.ems.api.models.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppRepository extends JpaRepository<Appointments, Long>{
    List<Appointments> findByFullname(String fullname);
    List<Appointments> findByMobileNo(String mobileNo);
}
