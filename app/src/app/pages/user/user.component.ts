import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  client: any = null;
  _id : any = null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly clientService: ClientService
    ) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {this._id = routeParams.id });
    this.getClientById()


  }


  getClientById(){
      this.clientService.getById(this._id).subscribe((resp:any) => {
        this.client = resp.client
      })
  }

}
