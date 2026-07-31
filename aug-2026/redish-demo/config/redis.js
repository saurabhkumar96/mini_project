import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'i1k5Q4ZkgmRpP3M4YOqNdgm40woP328Y',
    socket: {
        host: 'symmetrical-hypersolid-wax-87883.db.redis.io',
        port: 16920
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

console.log('Redis client connected');

export default client
