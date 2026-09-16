import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsServices {

  coloresDisponibles = ['#f472b6', '#f59e0b', '#22c55e', '#f97316', '#38bdf8', '#a78bfa'];
  contactList:Contact[] = [
    { id: "1", nombre: 'Juan', apellido: 'Pérez', telefono: '123456789', color: this.coloresDisponibles[0] },
    { id: "2", nombre: 'María', apellido: 'Gómez', telefono: '987654321', color: this.coloresDisponibles[1] },
    { id: "3", nombre: 'Pedro', apellido: 'López', telefono: '456789123', color: this.coloresDisponibles[2] },
    { id: "4", nombre: 'Ana', apellido: 'Martínez', telefono: '789123456', color: this.coloresDisponibles[3] },
    { id: "5", nombre: 'Luis', apellido: 'García', telefono: '321654987', color: this.coloresDisponibles[4] },
    { id: "6", nombre: 'Laura', apellido: 'xyz', telefono: '654987321', color: this.coloresDisponibles[5] }

  ]
  /// agrega contactos
  addContact(contact: Contact) {
    const newId = this.contactList.length.toString();

    this.contactList.push({
      id: newId,
      nombre: contact.nombre,
      apellido: contact.apellido,
      telefono: contact.telefono,
      color: this.coloresDisponibles[this.contactList.length % this.coloresDisponibles.length]
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
}
