const electron = {};
const ipcRenderer = {};

ipcRenderer.on = function (channel, listener) {
  switch (channel) {
    case 'getDirectoryContents':
      listener({}, ['.', '..', 'foo', 'bar', 'baz']);
      break;
    case 'getFileContents':
      listener({}, 'this\n\n\n\n\n\nis a file\nwith some stuff in it.');
      break;
    default:
      console.log('I don\'t have a handler mocked for ' + channel);
      break;
  }
};

ipcRenderer.send = function (channel) {
};

electron.ipcRenderer = ipcRenderer;

module.exports = electron;
