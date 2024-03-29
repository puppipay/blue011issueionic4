import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Blue011IssueService } from './blue011.issue.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

public issued: any;
public addressbalance : any;

constructor(
	private blue011issue: Blue011IssueService

  ) {
}


ngOnInit() {
  this.issued = {
    "message": "",
    "pin": "",
    "address": "",
    "network": "",
    "type": "",
    };

  this.addressbalance = {
   balanceSat :''
  };
}


generatetestnet() {

    var data = {
      msgtype: "default",
      network: "testnet"
    };

   this.blue011issue.issuemessage(data).then((data: any) => {
      if(data != null)
      {
        this.issued = data;
        this.blue011issue.savemessage(this.issued);
      }
      else {
        alert("Issue failed");
      }
   }, (err)=> {
     alert (err)
   });

}

generatelivenet() {

    var data = {
      msgtype: "default",
      network: "livenet"
    };

   this.blue011issue.issuemessage(data).then((data: any) => {
      if(data != null)
      {
        this.issued = data;
        this.blue011issue.savemessage(this.issued);
      }
      else {
        alert("Issue failed");
      }

   }, (err)=> {
     alert (err)
   });



}

gettestnetbalance() {

if(!this.issued.address) {
 alert("Testnet address empty");
 return;
}

 this.blue011issue.getBalance(this.issued.address, "testnet").then((data: any) => {
      if(data != null)
      {
        this.addressbalance = data;
      }
      else {
        alert("Query failed");
      }
   }, (err)=> {
     alert (err)
   });
}

getlivenetbalance() {

if(!this.issued.address) {
 alert("Livenet address empty");
 return;
}

 this.blue011issue.getBalance(this.issued.address, "livenet").then((data: any) => {
      if(data != null)
      {
        this.addressbalance = data;
      }
      else {
        alert("Query failed");
      }
   }, (err)=> {
     alert (err)
   });
}



 

}
