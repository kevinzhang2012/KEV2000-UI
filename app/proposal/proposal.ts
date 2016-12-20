export class Proposal {
    constructor(
        public id? :number,   // ? means optional
        public customer? :string,
        public portfolio_url: string = 'http://',
        public tools?: string,
        public estimated_hours? :number,
        public hourly_rate? : number,
        public weeks_to_complete? :number,
        public client_email? : string,
    ) {}
}

// 15, 'ABC Company', "https://github.com/kevinzhang2012/KEV2000-UI", 'Ruby on Rails', 150, 120, 15, 'kevinzhang2012@live.cn'