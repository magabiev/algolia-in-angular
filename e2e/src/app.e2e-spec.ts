import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let blocksComponent = element.all(by.tagName("s-cnt-faq-blocks"));
  beforeEach(() => {
    page = new AppPage();
  });
  it('Open page', () => {
    page.navigateTo();
  });
  it('length component "blocks"', () => {
    expect(blocksComponent.count()).toEqual(12);
  })
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
