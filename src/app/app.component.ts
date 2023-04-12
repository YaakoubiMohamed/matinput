import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });

    this.form.valueChanges.subscribe(formValue => {
      const startDate: Moment = formValue.startDate;
      const endDate: Moment = formValue.endDate;
      console.log(`Start Date: ${startDate.format('DD-MM-YYYY')}`);
      console.log(`End Date: ${endDate.format('DD-MM-YYYY')}`);
    });
  }
}
