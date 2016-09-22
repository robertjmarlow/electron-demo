const { ipcRenderer } = require('electron');
const $ = require('jquery');
const os = require('os');
require('../../css/main.css');

$(document).ready(function() {
  ipcRenderer.on('getFileContents', function(event, arg) {
    $('#file-contents').append('<div class="fileContents">' + arg.toString().replace(/\n/g, '<br/>').replace(/ /g, '&nbsp') + '</div>');
  });

  ipcRenderer.on('getDirectoryContents', function(event, arg) {
    // yes, this was broken in the last checkin...
    $('#dir-contents').append('<div class="fileList">' + arg + '</div>');
  });

  ipcRenderer.send('getFileContents', './main.js');
  ipcRenderer.send('getDirectoryContents', '.');

  $('#os-stuff')
    .append('<div>Your OS is: <span class="big">' + os.platform() + ' ' + os.release() + '</span></div>')
    .append('<div>Your uptime (in seconds) is: <span class="big">' + os.uptime() + '</span></div>')
});
