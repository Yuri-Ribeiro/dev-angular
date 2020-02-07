import { Component, ChangeDetectorRef } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderService]
})
export class AppComponent {
  title = "Crud";

  constructor(private cdRef:ChangeDetectorRef) { }

  ngAfterViewChecked() {
    HeaderService.forwardTheHeader.subscribe(
      title => this.title = title
      // nome => setTimeout (() => this.title = nome, 0)
    );
    // Executar a detecção de alterações explicitamente após a alteração
    this.cdRef.detectChanges();
  }
}
