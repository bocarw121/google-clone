import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerLinks = [
    {
      name: 'Advertising',
      href: 'https://ads.google.com/intl/en_ca/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1',
      section: 'left',
    },

    {
      name: 'Business',
      href: 'https://smallbusiness.withgoogle.com/intl/en_ca/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=CA#!/',
      section: 'left',
    },
    {
      name: 'How Search Works',
      href: 'https://www.google.com/search/howsearchworks/?fg=1',
      section: 'left',
    },
    ,
    {
      name: 'Privacy',
      href: 'https://policies.google.com/privacy?hl=en-CA&fg=1',
      section: 'right',
    },
    {
      name: 'Terms',
      href: 'https://policies.google.com/terms?hl=en-CA&fg=1',
      section: 'right',
    },
    ,
    {
      name: 'Settings',
      href: '#',
      section: 'right',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
