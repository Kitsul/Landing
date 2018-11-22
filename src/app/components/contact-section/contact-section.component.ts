import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  contactForm: FormGroup;
  name = new FormControl('');
  constructor() {
    this.contactForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      legalCheckbox: new FormControl('', Validators.requiredTrue),
      marketingCheckbox: new FormControl()
    });
   }
  ngOnInit() {
  }

  public Submit(lastName: HTMLInputElement): void {
    const elem = document.getElementById('arrow');
    elem.style.backgroundColor = 'green';
  }
}
