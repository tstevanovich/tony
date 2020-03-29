import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ResumeHomeComponent } from './pages/resume-home/resume-home.component';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  declarations: [ResumeHomeComponent],
  imports: [CommonModule, SharedModule, ResumeRoutingModule]
})
export class ResumeModule {}
