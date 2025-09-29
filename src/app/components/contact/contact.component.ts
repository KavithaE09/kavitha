import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'kavithae704@gmail.com',
      link: 'mailto:kavithae704@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91-XXXXX-XXXXX',
      link: 'tel:+918015498150'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Tirunelveli, Tamil Nadu',
      link: '#'
    }
  ];
  
  socialLinks = [
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kavitha-e-12a44327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/KavithaE09'
    }
  ];
}