import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {DetailCommunityComponent} from '@app/detail-community/detail-community.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'detail-community/:id-community', component: DetailCommunityComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DetailCommunityRoutingModule { }
