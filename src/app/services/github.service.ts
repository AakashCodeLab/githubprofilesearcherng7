import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '007d1a056b5ecdceb001';
    private client_secret = 'e14fb8bc5a47a7083f8caaa0850c618f317916f0';

    constructor(private _http: HttpClient) {
console.log('github service ready...');
this.username = 'aakash18012';
    }
getUser() {
   return this._http.get('https://api.github.com/users/'+this.username+'?cient_id='+this.client_id+'&client_secret='+this.client_secret);

}
getRepos() {
      return this._http.get('https://api.github.com/users/'+this.username+'/repos?cient_id='+this.client_id+'&client_secret='+this.client_secret);

 }
 updateUser(username:string){

this.username=username;
 }
}
