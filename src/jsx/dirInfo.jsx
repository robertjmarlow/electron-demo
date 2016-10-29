const { ipcRenderer } = require('electron');
const uniqueId = require('lodash/uniqueId');
const React = require('react');

export default class DirInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      dirContentsArr: [],
    };
  }

  componentDidMount() {
    ipcRenderer.on('getDirectoryContents', (event, arg) => {
      const dirContentsArr = [];

      for (const dirItem of arg) {
        dirContentsArr.push({
          dirItem,
          id: uniqueId(),
        });
      }

      this.setState({
        dirContentsArr,
      });
    });

    ipcRenderer.send('getDirectoryContents', '.');
  }

  render() {
    const dirLines = this.state.dirContentsArr.map(item =>
      <div key={item.id}>{item.dirItem}</div>
    );

    return (
      <div className="dirContents">
        {dirLines}
      </div>
    );
  }
}
