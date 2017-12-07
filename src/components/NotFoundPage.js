import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        Go back to <Link to='/'>Home</Link>
      </div>
    )
  }
}
 
export default NotFoundPage;