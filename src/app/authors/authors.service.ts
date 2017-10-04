import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { 
    
  }

  getAthors() {
   return ["Author1","Author2","Author3"]; 
  }
}
