import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false
})
export class ProjectsComponent {
  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  projects = [
    {
      title: 'Health Connect',
      description: 'A comprehensive healthcare web application developed as an academic project. Features include online doctor appointment booking, medicine purchase system, and health record management. Built with modern web technologies to provide a seamless user experience.',
      technologies: ['React', 'Node.js', 'Firebase'],
      category: 'Academic Project',
      image: '/assets/health-connect.png',
      githubLink: 'https://github.com/KavithaE09/healthconnect-tirunelveli',
      liveLink: 'https://healthconnect-tirunelveli.vercel.app/',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Travel Planner',
      description: 'An interactive travel planning platform created during my web development learning journey. The application helps users plan trips, explore destinations, and manage travel bookings. Perfect showcase of fullstack development skills.',
      technologies: ['React', 'Node.js', 'MySQL'],
      category: 'Learning Project',
      image: '/assets/travel-planner.png',
      githubLink: 'https://github.com/KavithaE09/tamizhagam',
      liveLink: 'https://tamizhagam.vercel.app/',
      icon: 'fas fa-plane'
    }
  ];
}