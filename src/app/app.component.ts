import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "./shared/httpRequests.service"; 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(  private httpSERVICE: HttpRequestService ) { }
  public showApp: boolean = false;
  ngOnInit(){
    this
    .httpSERVICE
    .getAlldata()
    .subscribe(responseData => {
      if (!responseData.error) {
        console.log(responseData);
        this.showApp = true;
      }
      
    }, (err) => { })
  }
  title = 'app works!';
}
