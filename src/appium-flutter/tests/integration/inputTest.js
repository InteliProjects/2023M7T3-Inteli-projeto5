describe("App test", () => {

  it("should open FAQ", async () => {
    await browser.pause(2000);
    const menu = await driver.$("~Open navigation menu");

    await menu.click();
    await browser.pause(2000);
    const faqButton = await driver.$("~FAQ");
    await faqButton.click();
    await browser.pause(2000);
    const isFaqOpen = await $(
      '(//android.view.View[@content-desc="Lorem ipsum dolor asit met?"])[1]'
    );
    await expect(isFaqOpen).toBeExisting();
    await menu.click();
    await browser.pause(1000);
    const homeButton = await driver.$("~Home");
    await homeButton.click();
    await browser.pause(1000);
  });

  it("should open Results", async () => {
    await browser.pause(1000);
    const menu = await driver.$("~Open navigation menu");
    await menu.click();
    const resultsButton = await driver.$("~Results");
    await resultsButton.click();
    const audioButton = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button"
    );
    await expect(audioButton).toBeExisting();
    await browser.pause(1000);
    await menu.click();
    const homeButton = await driver.$("~Home");
    await homeButton.click();

  })

  it("should type in input and click button", async () => {
    // Assuming the app takes time to load
    await browser.pause(4000);

    // Find the input element and type text
    const inputElement = await $("android.widget.EditText");
    await inputElement.click();
    await browser.pause(2000);
    await inputElement.setValue("Seu texto aqui");
    await browser.pause(2000);

    // Find the send button by XPath and click it
    const sendButton = await $(
      '//android.view.View[@content-desc="Hold to Record\nSales\nMarketing"]/android.widget.EditText/android.widget.Button'
    );
    await sendButton.click();

    await browser.pause(4000);

    const processingText = await $("~Processing...");

    expect(processingText).toBeExisting();
  });
  
});
