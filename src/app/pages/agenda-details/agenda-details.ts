import { Component, computed, inject, input } from '@angular/core';
import { ContactsServices } from '../../services/contacts-services';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-agenda-details',
  imports: [],
  templateUrl: './agenda-details.html',
  styleUrl: './agenda-details.scss',
})
export class AgendaDetails {
  id = input<string>('');
  contactServices = inject(ContactsServices);
  contact: Contact | undefined;

  ngOnInit() : void{
   this.contact =  this.contactServices.getContactById(this.id());
  }  
}
