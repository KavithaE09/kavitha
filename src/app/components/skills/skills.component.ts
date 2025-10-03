import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false
})
export class SkillsComponent {
  technicalSkills = [
     { name: 'React', level: 85, icon: 'fab fa-react' },
     { name: 'MongoDB', level: 85, icon: 'fab fa-mongodb' },
    { name: 'Express.js', level: 85, icon: 'fab fa-node-js' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'MySQL', level: 95, icon: 'fas fa-database' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
     { name: 'Python', level: 80, icon: 'fab fa-python' },
     { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
     { name: 'Java', level: 90, icon: 'fab fa-java' },
  ];
  
  designSkills = [
    { name: 'UI/UX Design', level: 85, icon: 'fas fa-pencil-ruler' },
    { name: 'Wireframing', level: 90, icon: 'fas fa-project-diagram' },
    { name: 'Prototyping', level: 80, icon: 'fas fa-cube' }
  ];
  
  tools = [
    'Figma', 'Adobe XD', 'VS Code', 'Git', 'GitHub', 'MySQL Workbench','Google Colab'
  ];
}