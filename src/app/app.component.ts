import { Component, OnInit } from '@angular/core';
import { customerApiService } from "./shared/httpRequests.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private customerApi: customerApiService) { }
  public showApp: boolean = false;
  ngOnInit() {
    this
      .customerApi
      .getAlldata()
      .subscribe(responseData => {
        if (!responseData.error) {
          this.showApp = true;
        }

      }, (err) => {
         
       })
  }
  title = 'app works!';
}
