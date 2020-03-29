import { Component, OnInit } from '@angular/core';
import { SkillsService } from '@app/modules/skills/services/skills.service';
import { Skill } from '@app/shared/models/skill.model';

@Component({
  selector: 'app-skills-home',
  templateUrl: './skills-home.component.html',
  styleUrls: ['./skills-home.component.scss']
})
export class SkillsHomeComponent implements OnInit {
  skills: Skill[];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((skills: Skill[]) => {
      this.skills = skills;
    });
  }
}
