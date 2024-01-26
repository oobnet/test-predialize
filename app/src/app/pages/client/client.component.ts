import { Component, OnInit } from "@angular/core";
 import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})




export class ClientComponent implements OnInit {

 public clients: any[];



  constructor(
    private readonly client: ClientService) {}

  ngOnInit(): void {
    this.getClients()
  }


  getClients(){
    this.client.getAll().subscribe((resp: any) => {
      this.clients = resp.data
    })
  }

 
}
