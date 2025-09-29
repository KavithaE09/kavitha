import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: false
})
export class ExperienceComponent {
  experiences = [
    {
      position: 'UX/UI Designer, Digisailor, Tuticorin',
      duration: 'Dec 2024 - Jun 2025',
      description: 'Collaborated closely with backend teams on both web and mobile platforms to enhance overall user experience. Developed new customer experiences, wireframes, prototypes, and high-fidelity visual designs. Delivered wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces.',
      skills: ['UX/UI Design', 'Wireframing', 'Prototyping', 'User Research']
    },
    {
      position: 'Backend Developer, Digisailor, Tirunelveli',
      duration: 'Mar 2024 - June 2024',
      description: 'Gained hands-on experience in developing backend services, debugging server-side issues, and optimizing APIs. Worked on implementing new technologies, web apps and collaborated with the team to enhance code and user data storage.',
      skills: ['Backend Development', 'API Development', 'Database Management', 'Server Optimization']
    }
  ];
}