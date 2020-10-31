import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Enter your server name here!';
  constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. The name of the server is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
   this.serverName = (<HTMLInputElement>event.target).value; /*<HTMLInputElement>*/ //had to look in inspect element for this
  }

}
