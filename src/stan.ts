import { connect } from 'node-nats-streaming';

const clusterID = process.env.CLUSTER_ID || 'broker';
const clusterClientID = process.env.CLUSTER_CLIENT_ID || 'mesa-principal';
const clusterURL = process.env.CLUSTER_URL || 'nats://localhost:4222';

export const stan = connect(clusterID, clusterClientID, {
  url: clusterURL,
});
