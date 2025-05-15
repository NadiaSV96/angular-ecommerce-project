import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  titleService: Title = inject(Title);

  formService: ProductsService = inject(ProductsService);

  contactform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor() {
    this.titleService.setTitle('Ma Boutique Café | Contact');
  }

  submitForm() {
    this.formService.contactData(
      this.contactform.value.firstname || '',
      this.contactform.value.lastname || '',
      this.contactform.value.email || '',
      this.contactform.value.message || ''
    );
  }
}
