import { Component, inject, input, signal } from '@angular/core';
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

  id = input<string>();

  contactServices = inject(ContactsServices);
  router = inject(Router);
  
  newContact = signal<Contact>({
    id: '',
    firstName: '',
    lastName: '',
    number: '',
    address: '',
    email: '',
    company: '',
    description: '',
    isFavorite: false
  });

  ngOnInit(): void {
    if (this.id()) {
      const contact = this.contactServices.getContactById(this.id()!);
      if (contact) {
        this.newContact.set(contact);
      }
    }
  }
  
  formCreate = form(this.newContact);
  onSubmit(event: Event) {
    event.preventDefault();
    let idcontactoCreado;

    if (this.id()) {
      this.actualizarContacto();
    }
    else {
      this.crearContacto();
    }
  }

  crearContacto() {
    const contactoId = this.contactServices.addContact(this.newContact());
    this.swal().fire({
      icon: "success",
      title: "Contacto creado"
    });
    this.router.navigate(['/agenda', contactoId]);
  }

  actualizarContacto() {
    this.contactServices.actualizarContactos(this.newContact());
   this.swal().fire({
      icon: "success",
      title: "Contacto editado"
    });
    this.router.navigate(['/agenda']);
  }

  swal(){
    return Swal.mixin({
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
    });
  }

}
