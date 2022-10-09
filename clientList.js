// 'use strict';

const e = React.createElement;

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }

  render_button(val) {
    return <button className="clientInfo">{val}</button>;
    }

  render() {
    return (
      <div>
        {this.render_button("Client 1")}
        {this.render_button("Client 2")}
        {this.render_button("Client 3")}
      </div>
    );
  }
}

const domContainer = document.getElementById('clientList');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ClientList));