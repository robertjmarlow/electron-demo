const { ipcRenderer } = require('electron');
const uniqueId = require('lodash/uniqueId');
const React = require('react');

export default class FileInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      fileContentsArr: [],
    };
  }

  componentDidMount() {
    ipcRenderer.on('getFileContents', (event, arg) => {
      const fileContentsArr = [];

      arg.toString().split('\n').forEach((element) => {
        fileContentsArr.push({
          line: (element.length === 0 ? ' ' : element),
          id: uniqueId(),
        });
      });

      this.setState({
        fileContentsArr,
      });
    });

    ipcRenderer.send('getFileContents', './main.js');
  }

  render() {
    const fileLines = this.state.fileContentsArr.map(item =>
      <div key={item.id}>{item.line.replace(/ /g, '\u00a0')}</div>
    );

    return (
      <div className="fileContents">
        {fileLines}
      </div>
    );
  }
}
