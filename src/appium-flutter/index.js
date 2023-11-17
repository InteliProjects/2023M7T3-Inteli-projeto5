// baseTest.js
const path = require("path");
const apkPath = path.resolve(__dirname, "apk/app-release.apk");
const wd = require("wd");
const serverConfig = {
  host: "127.0.0.1",
  port: 4723,
};

const desiredCapabilities = {
  platformName: "Android",
  deviceName: "emulator-5554",
  app:apkPath,
  automationName: "UiAutomator2",
};

const driver = wd.promiseChainRemote(serverConfig);

module.exports = {
  driver,
  desiredCapabilities,
};
