import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileComponent }  from './components/profile.component';
import {FormsModule} from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {

  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule, MatSnackBar
} from '@angular/material';
import { OfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    OfflineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [SwUpdate],
  bootstrap: [AppComponent]
})
export class AppModule {

 /* constructor(private swUpdate: SwUpdate, private swPush: SwPush, private snackbar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
   console.log('da');
    });
    const snack = this.snackbar.open('Update Available', 'Reload');

    snack
      .onAction()
      .subscribe(() => {
        window.location.reload();
      });

    setTimeout(() => {
      snack.dismiss();
    }, 2000);
  }*/
}
