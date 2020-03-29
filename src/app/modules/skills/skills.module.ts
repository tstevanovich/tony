import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SkillsHomeComponent } from './pages/skills-home/skills-home.component';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  declarations: [SkillsHomeComponent],
  imports: [CommonModule, SharedModule, SkillsRoutingModule]
})
export class SkillsModule {}
