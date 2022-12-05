import { Component, OnInit } from '@angular/core';
import { faBraille } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  leftLinks = [
    {
      name: 'About',
      href: 'https://about.google/?fg=1&utm_source=google-CA&utm_medium=referral&utm_campaign=hp-header',
    },
    {
      name: 'Store',
      href: 'https://store.google.com/CA/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-CA',
    },
  ];
  rightLinks = [
    {
      name: 'Gmail',
      href: 'https://mail.google.com/mail/',
    },
    {
      name: 'Images',
      href: 'https://www.google.ca/imghp?hl=en&tab=ri&authuser=0&ogbl',
    },
    {
      name: 'Logo1',
      href: '#',
      icon: '../../assets/dots-menu.png',
    },
    {
      name: 'Avatar',
      href: '#',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
