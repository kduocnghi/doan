import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import {CommunityService} from '@app/domain/service/community';

@Component({
  selector: 'app-home',
  templateUrl: './detail-community.component.html',
  styleUrls: ['./detail-community.component.scss'],
  providers: [CommunityService]
})
export class DetailCommunityComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  communities: any[];
  panelOpenState = false;
  constructor( private communityService: CommunityService) {
    this.getCommunities();
  }

  ngOnInit() {
    this.isLoading = true;
  }

  getCommunities() {
    this.communityService.getCommunities().then(result => {
      this.communities = result;
    });
  }

}
