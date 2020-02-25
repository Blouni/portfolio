import { Injectable } from '@angular/core';
import { devopsData } from '../../../assets/data/devops';
import { navItems } from '../../../assets/data/navbar';
import { developmentData } from '../../../assets/data/development';
import { securityData } from '../../../assets/data/security';
import { profile } from '../../../assets/data/profile';

@Injectable()
export class DataService {
  items = [];

  get devopsData() {
    return devopsData;
  }
  get navBar(){
    return navItems;
  }
  get developmentData(){
    return developmentData;
  }
  get securityData(){
    return securityData;
  }
  get profile(){
    return profile;
  }
}