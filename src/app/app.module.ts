import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AsideComponent } from './Components/aside/aside.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { QuienesSomosComponent } from './Components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { TestimoniosComponent } from './Components/testimonios/testimonios.component';
import { ContactanosComponent } from './Components/contactanos/contactanos.component';

import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
  {path:'Inicio', component:InicioComponent},
  {path:'QuienesSomos', component:QuienesSomosComponent},
  {path:'Servicios', component:ServiciosComponent},
  {path:'Testimonios', component:TestimoniosComponent},
  {path:'Contactanos', component:ContactanosComponent},
  {path:'**',redirectTo:'Inicio',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
