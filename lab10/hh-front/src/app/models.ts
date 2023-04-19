import {IterableDiffers} from "@angular/core";

export interface Company{
  id? : number;
  name : String;
  description: String;
  city : String;
  address: String;
}

export interface Vacancy {
  id? : number;
  name : String;
  description: String;
  salary: GLfloat;
  companyId: number;
}
