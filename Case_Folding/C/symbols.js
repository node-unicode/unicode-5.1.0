module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))