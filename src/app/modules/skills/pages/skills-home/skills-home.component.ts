import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SkillsService } from '@app/modules/skills/services/skills.service';
import { Skill } from '@app/shared/models/skill.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills-home',
  templateUrl: './skills-home.component.html',
  styleUrls: ['./skills-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsHomeComponent implements OnInit {
  skills$: Observable<Skill[]> = this.skillsService.skillsList$;

  constructor(private skillsService: SkillsService) {
    this.skillsService.getSkills();
  }

  ngOnInit() {}
}
