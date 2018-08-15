import { Component, OnInit } from '@angular/core';
import { SkillsService } from '@app/features/skills/services/skills.service';
import { Skill } from '@app/shared/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService.getSkills().subscribe((skills: Skill[]) => {
      this.skills = skills;
    });
  }
}
