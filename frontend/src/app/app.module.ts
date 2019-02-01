import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DocenteService } from '../app/services/docente.service';

import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { TabsRegistroComponent } from './tabs-registro/tabs-registro.component';
import { DashboardChatsComponent } from './dashboard-chats/dashboard-chats.component';
import { VentanaModalComponent } from './ventana-modal/ventana-modal.component';
import { MenuDashboardChatsDocenteComponent } from './menu-dashboard-chats-docente/menu-dashboard-chats-docente.component';
import { ConfiguracionesChatComponent } from './configuraciones-chat/configuraciones-chat.component';
import { GlosariosComponent } from './glosarios/glosarios.component';
import { GlosarioService } from './services/glosario.service';
import { UploadsComponent } from './uploads/uploads.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    RegistroComponent,
    HomeComponent,
    TabsRegistroComponent,
    DashboardChatsComponent,
    VentanaModalComponent,
    MenuDashboardChatsDocenteComponent,
    ConfiguracionesChatComponent,
    GlosariosComponent,
    UploadsComponent,

  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [
    appRoutingProviders,
    DocenteService,
    GlosarioService
  ],
  entryComponents: [
    ConfiguracionesChatComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
