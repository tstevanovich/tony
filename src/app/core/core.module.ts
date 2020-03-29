import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@NgModule({
  // modules
  imports: [CommonModule, HttpClientModule, RouterModule],
  // header, footer
  declarations: [HeaderComponent],
  // guards, interceptors, services
  providers: [],
  // header, footer
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
