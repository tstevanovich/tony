import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsRoutingModule } from '@app/features/skills/skills-routing.module';
import { SkillsComponent } from '@app/features/skills/skills.component';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [SkillsComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule, SkillsRoutingModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class SkillsModule {}
