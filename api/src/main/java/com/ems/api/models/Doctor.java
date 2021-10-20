package com.ems.api.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long docId;

    @Column(name = "docname")
    private String docName;

    @NotBlank
    @Column(name = "docdept")
    private String docDept;

    @Column(name = "docemail")
    @Email
    @NotBlank
    private String docEmail;

    @Column(name = "docph")
    @NotBlank
    private String docPh;

    public Doctor() {

    }

    public Doctor(String docName, String docDept, String docEmail, String docPh) {
        this.docName = docName;
        this.docDept = docDept;
        this.docEmail = docEmail;
        this.docPh = docPh;
    }
    
    public Long getDocId() {
		return this.docId;
	}

	public String getDocName() {
		return this.docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocDept() {
		return this.docDept;
	}

	public void setDocDept(String docDept) {
		this.docDept = docDept;
	}

	public String getDocEmail() {
		return this.docEmail;
	}

	public void setDocEmail(String docEmail) {
		this.docEmail = docEmail;
	}

	public String getDocPh() {
		return this.docPh;
	}

	public void setDocPh(String docPh) {
		this.docPh = docPh;
	}

}
