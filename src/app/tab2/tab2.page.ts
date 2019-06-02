import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Blue011IssueService } from '../tab1/blue011.issue.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

public messages = [];

constructor(
	private blue011service: Blue011IssueService
  ) {
}

ngOnInit() {
  this.getissuedmessages();
}


getissuedmessages() {

   this.blue011service.getmessages().then((data: any) => {
      if(data != null)
      {
        this.messages = data;
      }
      else {
        alert("No messages ");
    }
    });

}
 

}
