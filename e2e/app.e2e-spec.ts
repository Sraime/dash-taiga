import { DashTaigaPage } from './app.po';

describe('dash-taiga App', () => {
  let page: DashTaigaPage;

  beforeEach(() => {
    page = new DashTaigaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
