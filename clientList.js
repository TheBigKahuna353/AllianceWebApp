'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return <h1>Client List</h1>;
  }
}


const domContainer = document.querySelector('#clientList');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));