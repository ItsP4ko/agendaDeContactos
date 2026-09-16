import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { Agenda } from './pages/agenda/agenda';
import { AgendaDetails } from './pages/agenda-details/agenda-details';
import { CreateEditContact } from './pages/create-edit-contact/create-edit-contact';


export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "agenda",
        component: Agenda
    },
    {
        path: "agenda/create",
        component: CreateEditContact
    },
    {
        path: "agenda/:id",
        component: AgendaDetails
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'agenda'
    }
];
