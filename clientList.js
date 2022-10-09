// 'use strict';

const e = React.createElement;

class ClientParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: "" };
        this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div>
        <div className="clientSearch">
            <ClientList handleClick={this.handleClick} selected={this.state.selected} />
        </div>
        <ClientInfo selected={this.state.selected} />
      </div>
    );
  }

  handleClick(client) {
    this.setState({ selected: client });
    console.log("ClientParent: " + client);
  };
}


class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }

  render_button(client) {
    if (client == this.props.selected) {
      return <button value={client} className="clientInfoClicked" onClick={() => this.props.handleClick(client)}>
      {client}
      </button>;
    } else {  
      return <button value={client} className="clientInfo" onClick={() => this.props.handleClick(client)}>
      {client}
      </button>;
      }
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

class ClientInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.selected == "") {
      return (
        <div className="clientShow">
          <p className="notSelected"> Select a client to view their details </p>
        </div>
      );
    }
    console.log(this.props.selected);
    return (
      <div className="clientShow">
        <div className="selected">
          <h1>Client Info</h1>
          <p>Client Name: {this.props.selected}</p>
          <p>Client Address: 1234 Main St.</p>
        </div>
      </div>
    );
  }
}

const domContainer = document.getElementById('clientParent');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ClientParent));

