import { Component, inject, signal } from '@angular/core';
import { ContactsServices } from '../../services/contacts-services';
import { Contact } from '../../interfaces/contact';
import { form, FormField } from '@angular/forms/signals';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit-contact',
  imports: [FormField],
  templateUrl: './create-edit-contact.html',
  styleUrl: './create-edit-contact.scss',
})
export class CreateEditContact {


  contactServices = inject(ContactsServices);
  router = inject(Router);
  
  newContact = signal<Contact>({
    id: '',
    nombre: '',
    apellido: '',
    telefono: '',
    color: ''
  });

  formCreate = form(this.newContact);
  onSubmit(event: Event) {
    event.preventDefault();
    const idContactoCreado = this.contactServices.addContact(this.newContact());

    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      theme: 'dark',
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "success",
      title: "Contacto creado"
    });

    this.router.navigate(['/agenda', idContactoCreado]);
  }

}
