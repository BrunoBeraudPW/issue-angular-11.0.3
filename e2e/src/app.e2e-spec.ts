import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { fakeAsync } from '@angular/core/testing';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('will throw an error', () => {
    it('true equal true using fake async', () => {
      fakeAsync(() => {
        expect(true).toBeTrue();
      });
    });
    it('true equal true', () => {
        expect(true).toEqual(true);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
