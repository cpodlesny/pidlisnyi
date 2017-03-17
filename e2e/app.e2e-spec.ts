import { PidlisnyiPage } from './app.po';

describe('pidlisnyi App', () => {
  let page: PidlisnyiPage;

  beforeEach(() => {
    page = new PidlisnyiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
