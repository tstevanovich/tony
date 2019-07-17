import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '@app/shared/models/skill.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(
      'https://tony-e6d73.firebaseio.com/skills.json',
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
}
