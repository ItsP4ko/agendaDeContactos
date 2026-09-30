import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsServices {

  contactList:Contact[] = [
    { id: '1', firstName: 'Juan', lastName: 'Pérez', number: '123456789', address: '', email: '', company: '', description: '', isFavorite: false },
    { id: '2', firstName: 'María', lastName: 'Gómez', number: '987654321', address: '', email: '', company: '', description: '', isFavorite: false },
    { id: '3', firstName: 'Pedro', lastName: 'López', number: '456789123', address: '', email: '', company: '', description: '', isFavorite: false },
    { id: '4', firstName: 'Ana', lastName: 'Martínez', number: '789123456', address: '', email: '', company: '', description: '', isFavorite: false },
    { id: '5', firstName: 'Luis', lastName: 'García', number: '321654987', address: '', email: '', company: '', description: '', isFavorite: false },
    { id: '6', firstName: 'Laura', lastName: 'xyz', number: '654987321', address: '', email: '', company: '', description: '', isFavorite: false }
  ]
  /// agrega contactos
  addContact(contact: Contact) {
    const newId = (this.contactList.length + 1).toString();

    this.contactList.push({
      id: newId,
      firstName: contact.firstName,
      lastName: contact.lastName,
      number: contact.number,
      address: contact.address,
      email: contact.email,
      company: contact.company,
      description: contact.description,
      isFavorite: contact.isFavorite
    });
    return newId;
  }

  /// elimina un contacto por su id
  deleteContact(id: string) {
    this.contactList = this.contactList.filter(c => c.id !== id);
  }

  /// trae contactos en base a un id 
  getContactById(id: string){
   return this.contactList.find(c => c.id === id); 
  }

  /// trae todos los contactos
  getContacts(){
    return this.contactList;
  }

  actualizarContactos(contact: Contact) {
   this.contactList = this.contactList.map(c => c.id === contact.id ? contact : c);
  }
}
