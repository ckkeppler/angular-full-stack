import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'full-stack-angular';
  status = 'DOWN';

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    this.statusService.getStatus().subscribe((result: any) => {
      this.status = result.status;
      console.log('running');
    });
  }
}
