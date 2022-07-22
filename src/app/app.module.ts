import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EditorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [
    //  Add a dependency provider using the TINYMCE_SCRIPT_SRC
    //  token to enable lazy loading
    // { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
