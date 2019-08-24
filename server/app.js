const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://mongodb:27017/gql-teste', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('Connected to the database'); 
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`Listening for requests on port 4000`);
});
