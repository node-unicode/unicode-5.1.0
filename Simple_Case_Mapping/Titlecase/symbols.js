module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))