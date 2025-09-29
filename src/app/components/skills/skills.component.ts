import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'Python', level: 80, icon: 'fab fa-python' },
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'Angular', level: 75, icon: 'fab fa-angular' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
    { name: 'MySQL', level: 75, icon: 'fas fa-database' }
  ];
  
  designSkills = [
    { name: 'UX/UI Design', level: 85, icon: 'fas fa-pencil-ruler' },
    { name: 'Wireframing', level: 90, icon: 'fas fa-project-diagram' },
    { name: 'Prototyping', level: 80, icon: 'fas fa-cube' },
    { name: 'User Research', level: 75, icon: 'fas fa-search' }
  ];
  
  tools = [
    'Figma', 'Adobe XD', 'VS Code', 'Git', 'GitHub', 'MySQL Workbench', 'Chrome DevTools'
  ];
}