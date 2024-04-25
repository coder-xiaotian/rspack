const config = require("./jest.config");

/** @type {import('jest').Config} */
module.exports = {
	...config,
	testMatch: ["<rootDir>/tests/HotTestStepWeb.test.js"]
};
