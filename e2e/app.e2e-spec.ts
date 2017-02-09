import { JobsafPage } from './app.po';

describe('jobsaf App', function() {
  let page: JobsafPage;

  beforeEach(() => {
    page = new JobsafPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
