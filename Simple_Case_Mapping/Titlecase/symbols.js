module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))