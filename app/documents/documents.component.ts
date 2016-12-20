import { Component } from '@angular/core';
import { Document } from './document';

@Component ({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: `documents.component.html`
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard";
    documents:Document[] = [
        {
            title: "My first doc",
            description: "abcdefg",
            file_url:"https://github.com/kevinzhang2012",
            updated_at:"11/02/1994",
            image_url:"https://github.com/kevinzhang2012",
        },
        {
            title: "My second doc",
            description: "abcdefg",
            file_url:"https://github.com/kevinzhang2012",
            updated_at:"11/02/1994",
            image_url:"https://github.com/kevinzhang2012",
        },
        {
            title: "My third doc",
            description: "abcdefg",
            file_url:"https://github.com/kevinzhang2012",
            updated_at:"11/02/1994",
            image_url:"https://github.com/kevinzhang2012",
        },
    ];
    
}