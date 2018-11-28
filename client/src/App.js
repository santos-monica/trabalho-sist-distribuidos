import React, { Component } from 'react';
import ApolloCliente from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import BookList from './components/BookList'
import AddBook from './components/AddBook'


const client = new ApolloCliente({
  uri:'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
