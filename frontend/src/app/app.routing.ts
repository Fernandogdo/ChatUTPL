import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { VentanaModalComponent } from './ventana-modal/ventana-modal.component';
import { DashboardChatsComponent } from './dashboard-chats/dashboard-chats.component';
import { AuthGuard } from './auth/auth.guard';
import { GlosariosComponent } from './glosarios/glosarios.component';

const appRoutes:Routes = [
    {path: '', component: RegistroComponent},
    {path: 'dashboardChats', component: DashboardChatsComponent, canActivate:[AuthGuard]},
    {path: 'confChat', component: GlosariosComponent},
    {path: 'modal', component: VentanaModalComponent},
    {path: '**', component: RegistroComponent}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
