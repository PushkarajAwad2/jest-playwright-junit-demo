/// <reference types="jest-playwright-preset" />

import { BrowserContext } from "playwright";

const fs = require('fs');

describe('test suite 1', () => {
  let adminContext: BrowserContext;
  beforeEach(async () => {
    adminContext = await browser.newContext({  });

    });
  beforeAll(async () => {

  });

  it('should be logged in', async () => {
    const page = await adminContext.newPage();
    await page.goto('https://online.visualstudio.com/environments');
    const element = await page.waitForSelector('text="Create Codespace"');
    expect(element).toBeTruthy();
    await page.close();
  });

});
