import { Kev2000UiPage } from './app.po';

describe('kev2000-ui App', function() {
  let page: Kev2000UiPage;

  beforeEach(() => {
    page = new Kev2000UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
