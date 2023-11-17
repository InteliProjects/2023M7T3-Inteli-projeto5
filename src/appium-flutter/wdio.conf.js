// wdio.conf.js
exports.config = {
  runner: "local",
  specs: ["./tests/**/*.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "emulator-5554",
      "appium:app": require("path").resolve(__dirname, "apk/app-release.apk"),
      "appium:automationName": "UiAutomator2",
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "127.0.0.1",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    [
      "appium",
      {
        command: "appium",
        logPath: "./appium-logs/",
        args: {
          // arguments
        },
      },
    ],
  ],
  framework: "jasmine",
  reporters: ["spec"],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },
};
