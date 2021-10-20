package com.ems.api.models;

import javax.persistence.*;

@Entity
@Table(name = "appointment")
public class Appointments {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long appointmentId;

    @Column(name = "name")
    private String fullname;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;

    @Column(name = "consdept")
    private String consDept;

    @Column(name = "mobno")
    private String mobileNo;

    public Appointments() {

    }

    public Appointments(String fullname, String date, String time, String consDept, String mobileNo) {
        this.fullname = fullname;
        this.date = date;
        this.time = time;
        this.consDept = consDept;
        this.mobileNo = mobileNo;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getConsDept() {
        return consDept;
    }

    public void setConsDept(String consDept) {
        this.consDept = consDept;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    @Override
    public String toString() {
        return "Appointments [appointmentId="+appointmentId+", fullname="+fullname+", date"+date+", time="+time+", consDept="+consDept+", mobileNo="+mobileNo+"]";
    }
}