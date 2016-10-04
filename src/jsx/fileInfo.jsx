const { ipcRenderer } = require('electron');
const uniqueId = require('lodash/uniqueId');
const React = require('react');

export default class FileInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      fileContentsArr: []
    };
  }

  componentDidMount() {    
    ipcRenderer.on('getFileContents', function(event, arg) {
      var fileContentsArr = [];

      arg.toString().split('\n').forEach(function(element) {
        fileContentsArr.push({
          line: element,
          id: uniqueId()
        });
      });

      this.setState({
        fileContentsArr: fileContentsArr
      });
    }.bind(this));

    ipcRenderer.send('getFileContents', './main.js');
  }

  render() {
    var fileLines = this.state.fileContentsArr.map(function(item) {
      return (
        <div key={item.id}>{item.line.replace(/ /g, '\u00a0')}</div>
      );
    });

    return (
      <div className='fileContents'>
        {fileLines}
      </div>
    );
  }
};
