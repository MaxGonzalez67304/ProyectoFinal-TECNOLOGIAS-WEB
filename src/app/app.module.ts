import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaComponent } from './components/lista/lista.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TelefonoComponent } from './components/telefono/telefono.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ForoComponent } from './components/foro/foro.component';
import { VideoComponent } from './components/video/video.component';
import { DomseguroPipe } from './domseguro.pipe';
import { ContactoComponent } from './components/contacto/contacto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListaComponent,
    TelefonoComponent,
    HomeComponent,
    CatalogoComponent,
    DomseguroPipe,
    ForoComponent,
    VideoComponent,
    ContactoComponent,
    BebidasComponent,
    GraficaComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    NgbModule,
    NgxQRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
