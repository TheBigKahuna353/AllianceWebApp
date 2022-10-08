'use strict';

const e = React.createElement;

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }

  render_button(val) {
    return <Button class="clientInfo">{val}</Button>;
    };

  render() {
    return (
        {this.render_button("Client 1")}
        {this.render_button("Client 2")}
        {this.render_button("Client 3")}
    );
  }
}

const domContainer = document.querySelector('#clientList');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ClientList));