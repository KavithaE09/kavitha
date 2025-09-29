import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: false
})
export class EducationComponent {
  education = [
    {
      degree: 'Francis Xavier Engineering College',
      field: 'Information Technology',
      duration: 'Tirunelveli, 2022-Present',
      description: 'Currently pursuing my degree in Information Technology with focus on software development and emerging technologies.'
    },
    {
      degree: 'Angelo Matric Hr Sec School',
      field: 'HSC Computer Science (12th)',
      duration: 'Tirunelveli, 2021-2022',
      description: 'Completed higher secondary education with specialization in Computer Science, building strong foundation in programming concepts.'
    }
  ];
  
  certifications = [
    {
      title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
      issuer: 'NPTEL',
      description: 'Comprehensive course covering Industry 4.0 concepts and IoT implementation in industrial settings.'
    },
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      description: 'Comprehensive course covering privacy protection and security measures in social media platforms.'
    }
  ];
}