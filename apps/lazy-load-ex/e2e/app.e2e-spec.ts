import { LazyLoadExPage } from './app.po';

describe('lazy-load-ex App', function() {
  let page: LazyLoadExPage;

  beforeEach(() => {
    page = new LazyLoadExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
