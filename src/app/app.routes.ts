import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent} from './pages/search/search.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'terms', component: TermsComponent }
];
