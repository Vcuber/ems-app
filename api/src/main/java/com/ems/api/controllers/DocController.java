package com.ems.api.controllers;

import java.util.ArrayList;
import java.util.List;

import com.ems.api.models.Doctor;
import com.ems.api.repository.DocRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@EnableGlobalAuthentication
@RequestMapping("/apireq")
public class DocController {
    
    @Autowired
    DocRepository docRepository;

    @PostMapping("/doctors/add")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        try {
            Doctor _doctor = docRepository
                .save(new Doctor(doctor.getDocName(), doctor.getDocDept(), doctor.getDocEmail(), doctor.getDocPh()));
            
            return new ResponseEntity<>(_doctor, HttpStatus.CREATED);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Doctor>> getAllDoctors(@RequestParam(required = false) Long docId, String docName, String docDept) {
        try {
            List<Doctor> doctors = new ArrayList<Doctor>();

            if(docDept == null) {
                docRepository.findAll().forEach(doctors::add);
            }
            else {
                docRepository.findByDocDept(docDept).forEach(doctors::add);
            }

            if(doctors.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/doctors/{deptname}")
    public ResponseEntity<List<Doctor>> getDoctorsByDepartment(@PathVariable("deptname") String docDept) {
        try {
            List<Doctor> doctors = docRepository.findByDocDept(docDept);

            if(doctors.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(doctors, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/doctors/{docId}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable("docId") Long docId) {
        try {
            docRepository.deleteById(docId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
