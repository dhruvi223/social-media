const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const graphQLSchema = require('./graphql/schema/index');
const graphQLResolvers = require('./graphql/resolver/index');

const app = express();

app.use(bodyParser.json());



app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue:graphQLResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@atlascluster.6opwfzg.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=AtlasCluster`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

//booking/cancelling event = saving/unsave posts
//creating/deleting event = posting/deleting posts
