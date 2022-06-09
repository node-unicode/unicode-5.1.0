module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))