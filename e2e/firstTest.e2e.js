describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say Hello World', async () => {
    await expect(element(by.text('Hello World'))).toBeVisible();
  });

});
