import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutHomeComponent } from '@app/modules/about/pages/about-home/about-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutHomeComponent },
  {
    path: 'skills',
    loadChildren: () =>
      import('./modules/skills/skills.module').then((m) => m.SkillsModule)
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./modules/resume/resume.module').then((m) => m.ResumeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
