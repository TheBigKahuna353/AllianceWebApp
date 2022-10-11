// 'use strict';
// import axios from 'axios';


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
    this.state = { selected: "" , clientList: []};
    this.queryClientList();
  }

  render_button(client, index) {
    if (client == this.props.selected) {
      return <button  value={client} 
                      className="clientInfoClicked" 
                      onClick={() => this.props.handleClick(client)}
                      key={index}>
      {client}
      </button>;
    } else {  
      return <button value={client} className="clientInfo" onClick={() => this.props.handleClick(client)}>
      {client}
      </button>;
      }
    }

    queryClientList() {
      // https://623tu9.deta.dev
      axios.get('https://623tu9.deta.dev/api/clientList')
        .then(res => this.setState({clientList : res.data.data[0]}));
      console.log("ClientList: " + this.state.clientList);
  
    };

    createClient() {
      axios.post('https://623tu9.deta.dev/api/clientList', {
        name: "test Client"
      })
      .then(res => this.setState({clientList : res.data.data[0]}))
      .catch(function (error) {
        console.log(error);
      });
    }

    deleteClient() {
      axios.delete('https://623tu9.deta.dev/api/clientList/test%20Client')
      .then(res => this.setState({clientList : res.data.data[0]}))
      .catch(function (error) {
        console.log(error);
      });
    }

  render() {
    return (
      <div>
        {this.state.clientList.map((client, index) => this.render_button(client, index))}
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

