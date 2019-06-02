import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import {environment} from '../config/environment';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
addressbalance = 0;
receiveaddress : string;
url: string;

constructor(public http: Http, public storage: Storage) {


}

generatetestnetwallet() {
 alert("Not implemented");
 alert("User your own wallet ");
}

generatelivenetwallet() {
 alert("Not implemented");
 alert("User your own wallet ");
}

savetestnetwallet() {
 alert("Not implemented");
 alert("User your own wallet ");
}

savelivenetwallet() {
 alert("Not implemented");
 alert("User your own wallet ");
}

loadtestnetwallet() {
 alert("Not implemented");
 alert("User your own wallet ");
}

loadlivenetwallet() {
 alert("Not implemented");
 alert("User your own wallet ");
}


gettestnetbalanace() {
 alert("Not implemented");
 alert("User your own wallet ");
}

getlivenetbalanace() {
 alert("Not implemented");
 alert("User your own wallet ");
}


}
