import { YuxitPage } from './app.po';

describe('yuxit App', function() {
  let page: YuxitPage;

  beforeEach(() => {
    page = new YuxitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
