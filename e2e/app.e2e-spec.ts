import { GictalentPage } from './app.po';

describe('gictalent App', () => {
  let page: GictalentPage;

  beforeEach(() => {
    page = new GictalentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
