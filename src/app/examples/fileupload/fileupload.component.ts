import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UploadForm } from './uploadvaluesmodel';
import {UploadService} from './upload.service';
 
@Component({
  selector: 'my-fileupload',
  templateUrl: './fileupload.component.html'
})
export class FileuploadComponent implements OnInit {
  uploadForm: UploadForm;
  fileform: FormGroup;
  filePath: any;
  files:File[];
  id:number=10;
  step:string="er";
  constructor(private fb: FormBuilder,private service:UploadService) {

  }
 
  ngOnInit() {
    this.fileform = this.fb.group({
      firstName: [''],
      lastName: [''],
      file: []
    });
  }
  fileChange(event) {    
    this.files = <File[]>event.target.files;
    console.log(this.files);
  }
  onSubmit(): void {
    this.uploadForm =new UploadForm();
    this.uploadForm.firstName = this.fileform.get('firstName').value;
    this.uploadForm.lastName = this.fileform.get('lastName').value;
    this.uploadForm.files = this.files;
    this.service.submit(this.id,this.step,this.uploadForm).subscribe(res=>{ console.log(res)});
    // let a=JSON.stringify(this.uploadForm);
    // let b={"user":this.uploadForm};
    //console.log(b); 
  }
  uploadFile() {

  }
  clearFile() {
    this.fileform.reset();
  }
}







