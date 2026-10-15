import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3HO04CYQCF0b18lcZbKCqPwpWQKSwspCEhgVA6A87gMzrQ2MrbTggdG6CRNTgrMb/c7px6nd/NJ+KWSMFjRMueINr2FNGxZ4iflTMPWTsLxD52liGp8xWS/adI7hCndow4sxNEye4hzu0+4sK+R1zaKaJsZ4iKPUBU7QdEzX5EnNhPiGKQe8+IK/sFcWS/Io7tN8S1/Y64sXNE0x4iuvYIsfs45HuLaBBFfwRBdspxAQAA', 'base64'))));
