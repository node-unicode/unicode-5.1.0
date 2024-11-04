module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))