import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsHomeComponent } from './pages/skills-home/skills-home.component';

const routes: Routes = [{ path: '', component: SkillsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule {}
