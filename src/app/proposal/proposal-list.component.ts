import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: 'module.id',
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent{
    proposalOne: Proposal = new Proposal(15, 'ABC Company', "https://github.com/kevinzhang2012/KEV2000-UI", 'Ruby on Rails', 150, 120, 15, 'kevinzhang2012@live.cn');
    proposalTwo: Proposal = new Proposal(19, 'BBC Company', "https://github.com/kevinzhang2012/KEV2000-UI", 'Ruby on Rails', 150, 120, 15, 'kevinzhang2012@live.cn');
    proposalThree: Proposal = new Proposal(18, 'XYZ Company', "https://github.com/kevinzhang2012/KEV2000-UI", 'Ruby on Rails', 150, 120, 15, 'kevinzhang2012@live.cn');

    proposals: Proposal[] = [
        this.proposalOne, 
        this.proposalTwo, 
        this.proposalThree
    ];
}