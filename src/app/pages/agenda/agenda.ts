import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactsServices } from '../../services/contacts-services';
import { Contact } from '../../interfaces/contact';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss',
})
export class Agenda {
  contactServices = inject(ContactsServices);

  contacts: Contact[] = [];
  
  ngOnInit() : void{
    this.actualizarContactos();
  }

  private actualizarContactos(): void {
    this.contacts = this.contactServices.getContacts();
  }
  
  eliminarContacto(id: string) {
    this.contactServices.deleteContact(id);
    this.actualizarContactos();

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Contacto eliminado',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
    });
  }

}
