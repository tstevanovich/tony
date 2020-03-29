import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { AboutHomeComponent } from './pages/about-home/about-home.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

@NgModule({
  declarations: [AboutHomeComponent, TimelineComponent],
  imports: [CommonModule, SharedModule]
})
export class AboutModule {}
