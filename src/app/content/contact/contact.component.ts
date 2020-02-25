import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  profile: Profile = new Profile();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.profile = this.dataService.profile;
  }

}
