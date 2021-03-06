import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import {CommunityService} from '@app/domain/service/community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CommunityService]
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  communities: any[];
  panelOpenState = false;
  constructor(private quoteService: QuoteService, private communityService: CommunityService) {
    this.getCommunities();
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  getCommunities() {
    this.communityService.getCommunities().then(result => {
      this.communities = result;
    });
  }

}
