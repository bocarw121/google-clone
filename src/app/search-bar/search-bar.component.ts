import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { googleIcon } from '../utils';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  query = new FormControl('');
  googleBaseUrl = 'https://www.google.com/search?q=';
  searchIcon = faSearch;
  microphone = faMicrophone;
  googleIcon = googleIcon;

  redirectToGoogleQuery(event: KeyboardEvent) {
    if (this.query.value === '') return;

    if (event.code === 'Enter') {
      document.location.href = `${this.googleBaseUrl}${this.query.value}`;
    }
  }
}
