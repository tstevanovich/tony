import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '@app/shared/models/skill.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  jsonUrl = 'assets/json/skills.json';
  skillsSubject: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);
  skillsList$ = this.skillsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getSkills() {
    this.http.get(this.jsonUrl).subscribe((data: Skill[]) => {
      this.skillsSubject.next(data);
    });
  }
}
