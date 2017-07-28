import { TimesheetPage } from './app.po';

describe('timesheet App', () => {
  let page: TimesheetPage;

  beforeEach(() => {
    page = new TimesheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
