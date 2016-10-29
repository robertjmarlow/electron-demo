const os = jest.genMockFromModule('os');

function platform() {
  return "Platform";
};

function arch() {
  return "Arch";
};

function uptime() {
  return 9001;
};

os.platform = platform;
os.arch = arch;
os.uptime = uptime;

module.exports = os;
