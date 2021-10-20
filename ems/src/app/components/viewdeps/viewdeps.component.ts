import { Component, OnInit } from '@angular/core';
import { ApireqService } from 'src/app/services/apireq.service';

@Component({
  selector: 'app-viewdeps',
  templateUrl: './viewdeps.component.html',
  styleUrls: ['./viewdeps.component.css']
})
export class ViewdepsComponent implements OnInit {

  cardioData: any;
  oncoData: any;
  paedData: any;
  orthoData: any;
  entData: any;
  ogData: any;
  neuroData: any;
  nephroData: any;
  opthaData: any;

  cardiodataSource: any;
  oncodataSource: any;
  paeddataSource: any;
  orthodataSource: any;
  entdataSource: any;
  ogdataSource: any;
  neurodataSource: any;
  nephrodataSource: any;
  opthadataSource: any;

  constructor(private apireqService: ApireqService) { }

  ngOnInit(): void {
    this.retCardio();
    this.retEnt();
    this.retNephro();
    this.retNeuro();
    this.retOg();
    this.retOnco();
    this.retOptha();
    this.retOrtho();
    this.retPaed();
  }

  retCardio() {
    this.apireqService.showCardiology("Cardiology").subscribe(
      data => {
        this.cardioData = data;
        this.cardiodataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retOnco() {
    this.apireqService.showOncology("Oncology").subscribe(
      data => {
        this.oncoData = data;
        this.oncodataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retPaed() {
    this.apireqService.showPaediatrics("Paediatrics").subscribe(
      data => {
        this.paedData = data;
        this.paeddataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retOrtho() {
    this.apireqService.showOrthopaedics("Orthopaedics").subscribe(
      data => {
        this.orthoData = data;
        this.orthodataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retEnt() {
    this.apireqService.showEnt("ENT").subscribe(
      data => {
        this.entData = data;
        this.entdataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retOg() {
    this.apireqService.showObsGyn("Obsterics/Gynaecology").subscribe(
      data => {
        this.ogData = data;
        this.ogdataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retNeuro() {
    this.apireqService.showNeuro("Neurology").subscribe(
      data => {
        this.neuroData = data;
        this.neurodataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retNephro() {
    this.apireqService.showNephro("Nephrology").subscribe(
      data => {
        this.nephroData= data;
        this.nephrodataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  retOptha() {
    this.apireqService.showOptha("Opthamology").subscribe(
      data => {
        this.opthaData = data;
        this.opthadataSource = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  displayedColumns: string[] = ['docId', 'docName', 'docEmail', 'docPh','docDept'];
}
