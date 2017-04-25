import { EventAppPage } from './app.po';

describe('event-app App', function() {
  let page: EventAppPage;

  beforeEach(() => {
    page = new EventAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
