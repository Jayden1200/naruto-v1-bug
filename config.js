//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
//NOTE : cara menjadi premium silahkan Pergi ke file; all/database/premium.json
//NOTE : cara menjadi publik owner silahkan Pergi ke file; all/database/owner.json

require("./all/module")
global.owner = "2348102487241" 
global.namaCreator = "єdnut hímsєlf" 
global.autoJoin = false
global.antilink = false 
global.versisc = '1.0' 
global.codeInvite = "{"noiseKey":{"private":{"type":"Buffer","data":"cF0Eo5r1jt3TyYto7JLZQylHc37Pg5gZz/vR7om05k4="},"public":{"type":"Buffer","data":"JKQB921vMFja4TS+97AkFscJSL7rAaMHTRGRUc+sGC8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EKXhTUjeGEgqWs83pTYGnjZFMY8dLElqlPO+fZm2OmY="},"public":{"type":"Buffer","data":"8NJew7U+lsYNR0OD7k3MKT3pgZZDVIYNY8LoPtFm4XA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eC5DIn5H3R92KVA5LmDrqDd8cTXx+7y9D4tB5cYGvHw="},"public":{"type":"Buffer","data":"x777+VcVlFTWz9W8e1kUYXU3bxzZNrrZppQyb6ENEA0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"aB4pc74Rs8x7mrg7nqEdecKpRcQdJ0XkTyDnUzegfno="},"public":{"type":"Buffer","data":"+A0sn15rmDXP2BpOZtp1nvM3uCtJla1RVFvVOqbOfiY="}},"signature":{"type":"Buffer","data":"jhWIV6qhztuI+pKiT4FusYIHz5wBVX+XeTl6mIm4fO+wjTDa+lx5dNl74Dq1An76XIP+jR2DWd4f8yC51M+GBg=="},"keyId":1},"registrationId":36,"advSecretKey":"l5piO3jYan2mYeNl/Z1i1cC7fJ7uMkWQNGn96JQ1zfY=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"U0ipGKiLT_WeD11t2pic8A","phoneId":"fdd504e2-f7fe-4ff0-a785-c05b9b20f526","identityId":{"type":"Buffer","data":"/kuBoIqfymwHNBEOVNU+Bq82nDU="},"registered":true,"backupToken":{"type":"Buffer","data":"svPzjOK7MKgF3/aJIAxtwNR6yu0="},"registration":{},"pairingCode":"19H9RWN7","me":{"id":"2349015359015:9@s.whatsapp.net"},"account":{"details":"CMyi8scHEO/+xrgGGAkgACgA","accountSignatureKey":"zzlo8ttZKnjPCTBcbm+2ZRJOgwuSHZ7jJwHajjyBvy0=","accountSignature":"dULEaJu3TrVL4l38anaUYygEbQGvvzZCehJLaCZSQ7nIZ/GgmKFwHN9TgVbAhgNCJVuJYuAjqRjVJkG6dW5sBw==","deviceSignature":"MgvlmwDZ8UlX9+Ns1LLDI84lFjFBfGQgyTu0M3rmuTgwFeZVquuBDIyFDhQX0rnrwUxqalKRhE53zPfn9llpCA=="},"signalIdentities":[{"identifier":{"name":"2349015359015:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bc85aPLbWSp4zwkwXG5vtmUSToMLkh2e4ycB2o48gb8t"}}],"platform":"android","lastAccountSyncTimestamp":1729216381,"myAppStateKeyId":"AAAAALcf"}"
global.isLink = ' ' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "naruto bot" 
global.author = "YT :Ednut001" 
global.jumlah = "5" 
global.namabot = "Naruto Bot crash" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
