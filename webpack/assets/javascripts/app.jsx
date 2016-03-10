import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';

class NewItemType2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      errors: {}
    };
  }

  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: ''
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return $.ajax({
      method: 'POST',
      url: '/item_types/react_create',
      dataType: 'json',
      data: { item_type: { name: this.state.name } }
    })
      .done((xhr, status, err) => {
        location.assign('/item_types');
      })
      .fail((xhr, status, err) => {
        this.setState({ errors: xhr.responseJSON.errors });
      });
  }

  displayFlashMessage() {
    if(this.state.errors.name) {
      return (<div className='alert'>{this.state.errors.name}</div>);
    }
  }

  render () {
    return (
      <div id='other-react-form'>
        <h3>Webpack React Form</h3>

        { this.displayFlashMessage() }

        <form className='new_item_type' id='react_new_item_type' onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='item_type_name'>Name</label>
          <input type='text' name='item_type[name]' id='item_type_name' value={this.state.name} onChange={this.handleChangeName.bind(this)} />
          <input type='submit' name='commit' value='Submit' />
        </form>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('webpack-react-form')) {
    ReactDOM.render(
      <NewItemType2 />,
      document.getElementById('webpack-react-form')
    );
  }
});
