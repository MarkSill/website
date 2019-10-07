import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact = [
    {
      text: '@MarkSillian',
      icon: 'logo-twitter',
      href: 'https://twitter.com/MarkSillian'
    },
    {
      text: 'MarkSill',
      icon: 'logo-youtube',
      href: 'https://youtube.com/MarkSill0'
    },
    {
      text: '/u/MarkSill',
      icon: 'logo-reddit',
      href: 'https://reddit.com/u/MarkSill'
    },
    {
      text: 'mark@marksill.dev (I don\'t check this often.)',
      icon: 'mail',
      href: 'mailto:mark@marksill.dev'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
