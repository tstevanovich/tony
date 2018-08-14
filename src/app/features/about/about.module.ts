import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AboutComponent } from './about.component';
import { TimelineComponent } from './timeline/timeline.component';

const COMPONENTS = [AboutComponent, TimelineComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class AboutModule {}
