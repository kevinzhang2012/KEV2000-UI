import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { UserService } from './user/user.service';
import {NgsRevealModule} from 'ng-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalNewComponent,
    ProposalListComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    NgsRevealModule.forRoot()
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
