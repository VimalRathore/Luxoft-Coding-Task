import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Employee } from '../_models/employee';

@Component({
  selector: 'app-FormModal',
  templateUrl: './FormModal.component.html',
  styleUrls: ['./FormModal.component.css']
})
export class FormModalComponent {
  myForm: FormGroup;
  @ViewChild('addForm') addForm : NgForm;
  newEmployee:Employee= new Employee();
  
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  private submitForm() {
    console.log(this.newEmployee);
    this.newEmployee.id = 0;
    this.activeModal.close(this.newEmployee);
  }
}