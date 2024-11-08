module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))