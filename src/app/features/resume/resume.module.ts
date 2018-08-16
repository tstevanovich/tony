import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResumeRoutingModule } from '@app/features/resume/resume-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ResumeComponent } from './resume.component';

const COMPONENTS = [ResumeComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule, ResumeRoutingModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class ResumeModule {}
