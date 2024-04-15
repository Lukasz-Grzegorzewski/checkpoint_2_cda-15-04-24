import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { dataSource } from './datasource';
import { CountryResolver } from './resolvers/Country.resolver';


async function start() {
  const port = 4000;

  const schema = await buildSchema({
    resolvers: [CountryResolver]
  });

  const server = new ApolloServer({ schema });

  await dataSource.initialize();
  await startStandaloneServer(server, { listen: { port } });

  console.log(`🚀 Server has started on ${port}!`);
}

start();
