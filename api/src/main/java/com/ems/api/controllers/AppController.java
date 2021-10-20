package com.ems.api.controllers;

import com.ems.api.repository.AppRepository;

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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.ems.api.models.Appointments;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@EnableGlobalAuthentication
@RequestMapping("/apireq")
public class AppController {
    
    @Autowired
    AppRepository appRepository;

    @GetMapping("/appointments")
    public ResponseEntity<List<Appointments>> getAllAppointments(@RequestParam(required = false) Long appointmentId, String fullname, String mobileNo) {
        try {
            List<Appointments> appointments = new ArrayList<Appointments>();
            
            if(fullname == null)
                appRepository.findAll().forEach(appointments::add);
            else
                appRepository.findByFullname(fullname).forEach(appointments::add);
            
            if(appointments.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(appointments, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/appointments/{id}")
    public ResponseEntity<Appointments> getAppointmentsByMobileNo(@PathVariable("id") Long appointmentId) {
        Optional<Appointments> appointmentData = appRepository.findById(appointmentId);
        if(appointmentData.isPresent()) {
            return new ResponseEntity<>(appointmentData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/appointments")
    public ResponseEntity<Appointments> createAppointments(@RequestBody Appointments appointments) {
        try {
            Appointments _appointments = appRepository
                .save(new Appointments(appointments.getFullname(), appointments.getDate(), appointments.getTime(), appointments.getConsDept(), appointments.getMobileNo()));
            
                return new ResponseEntity<>(_appointments, HttpStatus.CREATED);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<HttpStatus> deleteAppointments(@PathVariable("id") Long appointmentId, @RequestBody Appointments appointments) {
        try {
            appRepository.deleteById(appointmentId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/appointments")
    public ResponseEntity<HttpStatus> deleteAllAppointments() {
        try {
            appRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/appointments/{mobileNo}")
    public ResponseEntity<List<Appointments>> findByMobileNo(@RequestParam("mobileNo") String mobileNo) {
        try {
            List<Appointments> appointments = appRepository.findByMobileNo(mobileNo);

            if(appointments.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(appointments, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/appointments/{fullname}")
    public ResponseEntity<List<Appointments>> findByFullname(@RequestParam("fullname") String fullname) {
        try {
            List<Appointments> appointments = appRepository.findByFullname(fullname);

            if(appointments.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(appointments, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}