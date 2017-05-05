import { Ng2StarterPage } from './app.po';

describe('ng2-starter App', () => {
  let page: Ng2StarterPage;

  beforeEach(() => {
    page = new Ng2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
