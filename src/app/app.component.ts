import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [AppModule],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}

