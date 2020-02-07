import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderService]
})
export class AppComponent {
  title = "Crud";

  constructor() { }

  ngOnInit() {
    HeaderService.forwardTheHeader.subscribe(
      async title => this.title = await title
    );
  }
}
