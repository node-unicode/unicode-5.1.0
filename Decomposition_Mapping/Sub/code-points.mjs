import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H5oA+MVsW6wsEvkHggHPpn2HnmFBgrvp5PT/pS1oCQYggUPzooA/voYwJ8IeIkxrmIb70v9aSJxEnmsnEjXrhtZQ6mSPIke4+Dwg9ws=', 'base64')).toString());
