const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("RegisterDisasterModule", (m) => {
  const registerDisaster = m.contract("RegisterDisaster");

  return { registerDisaster };
});