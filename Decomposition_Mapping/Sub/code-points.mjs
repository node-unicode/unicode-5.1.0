import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEzWQyREEIQwDE9IDXxyxqMg/jS3Pil83yNiYXOUO2qh70RKgWUqyZUmqZUsmeHJKVsuLbfBMk5wWxWK0fLEdPsDcYgPziB2sIQ6wTJxgubjACvEEK8ULrBJvsKb4gKW+PUSqNgzcy/VqODjVLQJMTREJ5jvvb7+XVq/tXexezpMDmqs8Bzj/MbPYnRvz3vsDd1crhHoBAAA=', 'base64'))));
