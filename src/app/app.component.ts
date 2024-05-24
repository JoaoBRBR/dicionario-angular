import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TermsComponent } from './pages/terms/terms.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    TermsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dicionario-angular';
  // constructor(private http: HttpClient) {}
}
