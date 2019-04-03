import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  selectedFile: File;
  formdata = new FormData();;
  jobForm = new FormGroup({
    companyname: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    jd: new FormControl(''),

  })


  constructor() { }

  ngOnInit() {
  }

  chooseFile(event) {
    this.selectedFile = event.target.files.item(0);
  }

  submit(form) {
    this.formdata.append('name', form.companyname);
    this.formdata.append('desig', form.designation);
    this.formdata.append('Image',this.selectedFile);
    console.log(this.formdata);
  }

}
