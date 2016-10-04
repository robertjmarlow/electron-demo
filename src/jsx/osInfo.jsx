var React = require('react');
const os = require('os')

export default class OsInfo extends React.Component {
  render() {
    return (
      <div>
        <span className="big">Platform:</span> {os.platform()} {os.arch()}
        {" "}
        <span className="big">Uptime:</span> {os.uptime()}
      </div>
    )
  }
};
