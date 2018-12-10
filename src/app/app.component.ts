import { Component } from '@angular/core';
import { interval } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {GithubService} from './services/github.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private snackbar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
this.swUpdate.checkForUpdate().then(() => {

        const snack = this.snackbar.open('Update Available', 'Reload');
        snack
          .onAction()
          .subscribe(() => {
            window.location.reload();
          });

        setTimeout(() => {
          snack.dismiss();
        }, 5000);
      });
    });


  }
}
