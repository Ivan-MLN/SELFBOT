/*
* Thanks For 𝗠𝗵𝗮𝗻𝗸𝗕𝗮𝗿𝗕𝗮𝗿
*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WAimageMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
const qrcode = require("qrcode-terminal");

const moment = require("moment-timezone");

const fs = require("fs");

const brainly = require("brainly-scraper");

const { color, bgcolor } = require('./lib/color');

const { fetchJson } = require('./lib/fetcher');

const { recognize } = require('./lib/ocr');

const 
 { 
  wait,
  simih,
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start, 
  info,
  success
} = require('./lib/functions');

const axios = require("axios");

const os = require('os');

const util = require('util');

const ffmpeg = require('fluent-ffmpeg');

const { virtex } = require('./src/virtex');

const imgbb = require('imgbb-uploader');

const imageToBase64 = require('image-to-base64');

const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')

const { removeBackgroundFromImageFile } = require('remove.bg');

const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
;
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));

const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))

const videonye = JSON.parse(fs.readFileSync('./src/video.json'))

const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))

const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))

const setting = JSON.parse(fs.readFileSync('./setting.json'))

const { spawn, exec, execSync } = require("child_process")

const speed = require('performance-now')

//Settings
publik = false
prefix = setting.prefix
fake = setting.fake
targetprivate = ''
blocked = []

//apikey
lol = setting.lol
zeks = setting.zeks
imgbb_key = setting.imgbb_key

//finction
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]
const time_now = moment().format('HH:mm:')

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				var penghitungRmd = 0
			if (moment().format('MM') == 03) {
				penghitungRmd = 44
			} else if (moment().format('MM') == 04) {
				penghitungRmd = 14
			}
			let v = new Date
				let localle = 'id'
					const harinya = d.toLocaleDateString(locale, { weekday: 'long' })
				
				var ramadhan = Math.floor(penghitungRmd - moment().format('DD:HH:mm')) 
				let hri = new Date
				let localev = 'id'
					var hari= hri.toLocaleDateString(localev, { weekday: 'long' })
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const vanz = new WAConnection()

vanz.on('qr', qr => {
	qrcode.generate(qr, { small: true })
	console.log(`${setting.fake} @Ivanzz`)
})

vanz.on('credentials-updated', () => {
	const authInfo = vanz.base64EncodedAuthInfo()
	console.log(`credentials updated!`)
	fs.writeFileSync('./IvanzzConnect.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./IvanzzConnect.json') && vanz.loadAuthInfo('./IvanzzConnect.json')
vanz.connect();

//welcome
vanz.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await vanz.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = vanz.contacts[num] != undefined ? vanz.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : vanz.contacts[num].notify || vanz.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await vanz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			vanz.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${setting.ucapan_welcome} 👋@${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
			})
			//leave
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		const moment = require('moment-timezone')
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = vanz.contacts[num] != undefined ? vanz.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : vanz.contacts[num].notify || vanz.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await vanz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			vanz.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${setting.ucapan_leave}👋@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})

vanz.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us', 's.whatsapp.net'))
	}
})

vanz.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
	
	//ANTIDEL
vanz.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? vanz.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = hurtz.key.id
			const conts = hurtz.key.fromMe ? vanz.user.jid : vanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? vanz.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Text
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
*+ Pesan :* ${body ? body : '-'}`
				vanz.sendMessage(from, strConversation, MessageType.text)
				
				
			} else if (int.type == 'stickerMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Sticker
*+ Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.sticker)
				fs.unlinkSync(savedFilename)
				
				
			} else if (int.type == 'audioMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* VoiceNote/Audio
*+ Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'documentMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Document
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.document, { mimetype: 'aplication/document', filename: 'document'})
				fs.unlinkSync(savedFilename)
				
			} else if (int.type == 'locationMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Location
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.location)
				fs.unlinkSync(savedFilename)
				
			} else if (int.type == 'liveLocationMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* liveLocation
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.liveLocation)
				fs.unlinkSync(savedFilename)
				
			} else if (int.type == 'contactMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Contact
*+ Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.contact)
				fs.unlinkSync(savedFilename)
				
			} else if (int.type == 'gifMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Gif
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				vanz.sendMessage(from, strConversation, MessageType.text)
				vanz.sendMessage(from, buff, MessageType.gif)
				fs.unlinkSync(savedFilename)
				
				
			} else if (int.type == 'imageMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Image
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
*+ Pesan :* ${body ? body : '-'}`
vanz.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			} else if (int.type == 'videoMessage') {
				const filename = `${sender.split('@')[0]}-${moment().unix()}`
				const savedFilename = await vanz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

*+ Nama :* ${pushname}
*+ Nomer :* wa.me/${sender.split('@')[0]}
*+ Tipe :* Image
*+ Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*+ Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
*+ Pesan :* ${body ? body : '-'}`
vanz.sendMessage(from, buff, MessageType.video, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})


vanz.on('message-new', async (vnz) => {
	try {
		if (!vnz.message) return
		if (vnz.key && vnz.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(vnz)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
		 if (!vnz.message) return
		if (vnz.key && vnz.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(vnz.message)[0]
		budo = (typei === 'conversation') ? vnz.message.conversation : (typei === 'extendedTextMessage') ? vnz.message.extendedTextMessage.text : ''
			if(vnz.key.fromMe){
			}

		if (!publik) {
			if (!vnz.key.fromMe) return
		}
		global.prefix
		global.blocked
		vnz.message = (Object.keys(vnz.message)[0] === 'ephemeralMessage') ? vnz.message.ephemeralMessage.message : vnz.message
		global.batrei = global.batrei ? global.batrei : []
		vanz.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
	vanz.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        vanz.updatePresence(from, Presence.composing) 
        vanz.sendMessage(`${callerId}`, `Maaf Kami Tidak Menerima Panggilan !!!`, text, {quoted:fdoc})
        setTimeout( () => {
        vanz.blockUser(`${callerId}`)
        }, 5000)
        console.log(color(`[WARN] ${callerId.split('@')[0]} is calling!`, 'red'))})
        
		const content = JSON.stringify(vnz.message)
		const from = vnz.key.remoteJid
		const type = Object.keys(vnz.message)[0]
		var tipe = 'Teks'
			if (type == 'imageMessage') {
				tipe = 'Gambar'
			} else if (type == 'stickerMessage') {
				tipe = 'Stiker'
			} else if (type === 'extendedTextMessage' && content.includes('imageMessage')) {
				tipe = 'Reply Gambar'
			} else if (type === 'extendedTextMessage' && content.includes('stickerMessage')) {
				tipe = 'Reply Stiker'
			} else if (type === 'extendedTextMessage' && content.includes('audioMessage')) {
				tipe = 'Reply Audio'
			} else if (type === 'extendedTextMessage' && content.includes('videoMessage')) {
				tipe = 'Reply Video'
			} else if (type === 'extendedTextMessage' && content.includes('conversation')) {
				tipe = 'Reply Teks'
			} else if (type === 'extendedTextMessage' && content.includes('productMessage')) {
				tipe = 'Reply Produk'
			} else if (type === 'extendedTextMessage' && content.includes('documentMessage')) {
				tipe = 'Reply Dokumen'
			} else if (type === 'extendedTextMessage' && content.includes('orderMessage')) {
				tipe = 'Reply Orderan'
			} else if (type === 'extendedTextMessage' && content.includes('contactMessage')) {
				tipe = 'Reply Kontak'
			} else if (type === 'extendedTextMessage' && content.includes('imageMessage')) {
				tipe = 'Reply Lokasi'
			} else if (type === 'extendedTextMessage' && content.includes('mentionedJid')) {
				tipe = 'Menyebut Orang'
			} else if (type === 'extendedTextMessage' && content.includes('matchedText')) {
				tipe = 'Link'
			} else if (type == 'videoMessage') {
				tipe = 'Video'
			} else if (type == 'conversation') {
				tipe = 'Teks'
			} else {
				tipe = 'Belum Diketahui'
			}
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && vnz.message.conversation.startsWith(prefix)) ? vnz.message.conversation : (type == 'imageMessage') && vnz.message.imageMessage.caption.startsWith(prefix) ? vnz.message.imageMessage.caption : (type == 'videoMessage') && vnz.message.videoMessage.caption.startsWith(prefix) ? vnz.message.videoMessage.caption : (type == 'extendedTextMessage') && vnz.message.extendedTextMessage.text.startsWith(prefix) ? vnz.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? vnz.message.conversation : (type === 'extendedTextMessage') ? vnz.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		

		mess = {
			success: 'Berhasil!',
			error: {
				stick: 'Itu video gblk!',
				Iv: 'Linknya mokad:v'
			},
			mess: {
				ownerB: 'Grup only bruh...',
				ownerB: 'Owner grup only bruh...',
				ownerB: 'Lu siapa?',
				admin: 'Mimin grup only bruh...',
				Badmin: 'Jadiin gw admin dlu su!'
			}
		}

		const botNumber = vanz.user.jid
		const ownerNumber = ["6282126046864@s.whatsapp.net"] // ganti nomer lu yo
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? vnz.participant : vnz.key.remoteJid
		const totalchat = await vanz.chats.all()
		const groupMetadata = isGroup ? await vanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUrl = (url) => {
			return (new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const reply = (teks) => {
			vanz.sendMessage(from, teks, text, { quoted: ftoko })
		}
		const math = (teks) => {
				return Math.floor(teks)
			}
const fileurl = async(link, type) => {
 woy = await getBuffer(link)
 vanz.sendMessage(from, woy, type, {quoted:ftoko})
}
	const ephe = (teks) => {
	 gass = fs.readFileSync("./src/Ivan.jpg")
	 
 vanz.sendMessage(from, teks, MessageType.text, { thumbnail: gass, sendEphemeral: true })
	}
	
	//FAKE STATUS
	const fimg = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}
	}
	const fdoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "documentMessage": { "title":"SELEP BOT","h": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}
	}
	const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"SELEP BOT","h": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}
	}
const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title":"SELEP BOT","h": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}
	}	
	const sendFileFromUrl = async(link, type, options) => {
  const hasil = await getBuffer(link)
	vanz.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	vanz.sendMessage(from, hasil, type, options).catch(e => {
	vanz.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
	const fvid = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "videoMessage": { "title":"SELEP BOT","h": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}
	}
   const ftoko = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./src/Ivan.jpg`)
					},
					"title": `${setting.fake}`,
					"description": "",
					"currencyCode": "IDR",
					"priceAmount1000": `${setting.harga_toko}`,
					"retailerId": "Self Bot",
					"productImageCount": 999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
			const sendFFU = (url, tipe) => {
			buf = await.getBuffer(url)
			 vanz.sendMessage(from, buf, tipe, {quotrd:vnz})
			}
	
		const sendMess = (hehe, teks) => {
			vanz.sendMessage(hehe, teks, text)
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? vanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : vanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": memberr } })
		}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		switch (command) {
			case 'hidetag1':
			case 'hidetag':
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbotty = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				{
					members_id = []
					teks = (args.length > 1) ? args.join(' ').trim() : `${args.join(' ')}`
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true, MessageType.text, selepbotty)
				}
				break

			
				case 'hidetag2':
				var value = args.join(' ')
					var group = await vanz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionssss = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: ftoko
					}
					vanz.sendMessage(from, optionssss, text)
					break
			case 'group':
			case 'grup':
			   case 'gc':
				if (!isGroup) return reply(mess.only.group)
				if (args[0] === 'buka') {
					vanz.sendMessage(from, `*「 SUCKSES MEMBUKA GRUP 」*`, MessageType.text, ftoko)
					vanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'tutup') {
					await vanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					vanz.sendMessage(from, `*「 SUKSES MENUTUP GRUP 」*`, MessageType.text, groupp)
				}
				break
			case 'bukutatang':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `BUKU TATANG SUTARMAN`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const wimki = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var teks = args.join(' ')
				axios.get(`https://api-melodicxt-2.herokuapp.com/api/wikiapi?query=${teks}&langue=id&apiKey=administrator`).then((res) => {
					vanz.sendMessage(from, 'Mencari Halaman Tatang Sutarman...', MessageType.text, wimki)
					let hasil = `Menurut buku tatang sutarman:\n\n${res.data.result.data}`;
					vanz.sendMessage(from, hasil, MessageType.text, wimki);
				})
				break
			case 'gcname':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const gcname = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				await vanz.groupUpdateSubject(from, `${args.join(' ')}`)
				vanz.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text, gcname)
				break
			case 'gcdesk':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const gcdesk = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				await vanz.groupUpdateDescription(from, `${args.join(' ')}`)
				vanz.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text, gcdesk)
				break
			case 'tinyurl':
				const tinyurl = args.join(' ')
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const srotlink = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				axios.get(`https://tobz-api.herokuapp.com/api/tinyurl?url=${tinyurl}&apikey=BotWeA`).then((res) => {
					let hasil = `${res.data.result}`;
					vanz.sendMessage(from, hasil, MessageType.text, srotlink)
				})
				break
			case 'uptime':
				runtime = process.uptime()
				teks = `${kyun(runtime)}`
				
				vanz.sendMessage(from, `${teks}`, MessageType.text, rtimebro)
				break
				case 'joox':
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${args.join(' ')}&apikey=BotWeA`, { method: 'get' })
				teks = '-「 Play Music From Joox 」-\n'
				const joox = data.result
				teks += `\n- Judul : ${joox.title}\n- Album : ${joox.album}\n- Publish At : ${joox.dipublikasi}\n\n   -「 ${setting.fake} - vanzGANSS 」-`
				thumb = await getBuffer(joox.thumb)
				vanz.sendMessage(from, mess.wait, MessageType.text, selepbot)
				vanz.sendMessage(from, thumb, image, { quoted: ftoko, caption: teks })
				buffer = await getBuffer(joox.mp3)
				vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted: ftoko })
				break
			case 'pin':
				const papapale = args.join(' ')
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args.join(' ')}`, {method: 'get'})
				if (data.error) return reply(data.error)
				const amsulah = data.result
					const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
					thumb = await getBuffer(pimterest)
				vanz.sendMessage(from, mess.wait, MessageType.text, selepbot)
				vanz.sendMessage(from, thumb, image, { quoted: ftoko, caption: `- Pinterest : ` + papapale })
				break
			case 'truth':
				const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengharuh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				vanz.sendMessage(from, truteh, image, { caption: 'Truth\n\n' + ttrth, quoted: ftoko })
				break
			case 'dare':
				const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				vanz.sendMessage(from, tod, image, { quoted: ftoko, caption: 'Dare\n\n' + der })
				break
			case 'fitnah':
				
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: split[0]
							}
						}
					}
				}
				vanz.sendMessage(from, `${split[1]}`, MessageType.text, target)
				break
			case 'e':
				const a = `${setting.fake}`
				const b = "Ivan-MLN"
				let op = "author: " + a + "\n"
				op += "pack: " + b + "\n"
				op += "name: 𝐒𝐄𝐋𝐅𝐁𝐎𝐓"
				if (isMedia && !m.message.imageMessage || isQuotedVideo) {
					const decryptMedia = isQuotedVideo ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
					const mediaData = await vanz.downloadMediaMessage(decryptMedia)
					if (Buffer.byteLength(mediaData) >= 6186598.4) return vanz.sendMessage(from, `_max size 9mb_`, MessageType.text)
					modifWebp(jam, mediaData).then(res => {
						vanz.sendMessage(from, res, MessageType.sticker, {
							contextInfo: {
								participant: "6285865781508@s.whatsapp.net",
								quotedMessage: {
									conversation: op
								}
							}
						})
					})
				} else if (isMedia && !m.message.videoMessage || isQuotedImage) {
					const decryptMedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
					let asu = (fs.readFileSync('./src/Ivan.jpg', {
						encoding: 'base64'
					}))
					const roundedCorners = Buffer.from(
						'<svg><rect x="0" y="0" width="600" height="600" rx="300" ry="300"/></svg>'
					);
					await vanz.downloadMediaMessage(decryptMedia).then(mediaData => {
						}).composite([{
							input: roundedCorners,
							blend: 'dest-in'
						}]).webp().toBuffer().then(buffer => {
							modifExif(buffer, jam, (res) => {
								vanz.sendMessage(from, res, MessageType.sticker, {
									quoted: ftoko,
									thumbnail: asu.toString("base64")
								})
							})
						})
				}
				break
			 case 'pe':
				
				var eaghoib = `${ghoibsu}`
				var ghoib = `${numbernye}@s.whatsapp.net`
				var teksgw = `${myteks}`
				var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const gaskeun = {
					contextInfo: {
						participant: ghoib,
						quotedMessage: {
							extendedTextMessage: {
								text: eaghoib
							}
						}
					}
				}
				//vanz.sendMessage(from, a, contextInfo: { participant: mentionedJidList[0], quotedMessage: { conversation: b } })
				vanz.sendMessage(from, `${teksgw}`, MessageType.text, gaskeun)
				break
			//case 'setghoibreply':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝙂𝙝𝙤𝙞𝙗`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				ghoibsu = args[0]
				//vanz.sendMessage(from, `Succes Mengganti Ghoib Reply : ${ghoibsu}`, MessageType.text, selepbot)
				break
			case 'setmyteks':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝙂𝙝𝙤𝙞𝙗`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				myteks = args[0]
				vanz.sendMessage(from, `Succes Mengganti My Teks : ${myteks}`, MessageType.text, selepbot)
				break

			//case 'settarget':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝙉𝙪𝙢𝙗𝙚𝙧 𝙂𝙝𝙤𝙞𝙗`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				targetprivate = args[0]
				vanz.sendMessage(from, `Succes Mengganti target Private Fake Reply : ${targetprivate}`, MessageType.text, selepbot)
				break
			case 'fitnahpc':
				jids = `${targetprivate}@s.whatsapp.net` // nomer target
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const options = {
					contextInfo: {
						quotedMessage: {
							extendedTextMessage: {
								text: split[0]
							}
						}
					}
				}
				const responye = await vanz.sendMessage(jids, `${split[1]}`, MessageType.text, options)
				await vanz.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
				break
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return vanz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return vanz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						vanz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						vanz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return vanz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						vanz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						vanz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return vanz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return vanz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					vanz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						vanz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						vanz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						vanz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						vanz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'motionblur':
				reply('wait...')
				try {
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vnz
				encmediaP = await vanz.downloadAndSaveMediaMessage(mediaP)
				exec("convert "+encmediaP+" -resize 1280x1280 -gravity Center -geometry +0+0 -motion-blur 20x30\! './database/tmp/blur.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Welcome'))
					.on('exit', () => {
					sendImg('database/tmp/blur.jpg')
					})
					} catch {
				reply(`Kirim gambar dengan caption ${prefix}motionblur, atau reply gambar yang sudah dikirim`)
				}
				break
			case 'kbbi':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const kbbigan = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var kbbi = args.join(' ')
				axios.get(`https://tobz-api.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=BotWeA`).then((res) => {
					let hasil = `「 HASIL 」\n${res.data.result}`;
					vanz.sendMessage(from, hasil, MessageType.text, kbbigan);
				})
				break
			case 'linkgc':
				var itsme = `${numbernye}@s.whatsapp.net`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const linkgcgan = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (!isGroup) return reply(mess.only.group)
				const linkgc = await vanz.groupInviteCode(from)
				vanz.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, MessageType.text, linkgcgan)
				break
			case 'logowolf':
				var gh = args.join(' ')
				var teks1 = gh.split("|")[0];
				var teks2 = gh.split("|")[1];
				if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}logowolf anjay|ohh`)
				reply(mess.wait)
				anu = await fetchJson(`https://api.zeks.xyz/api/wolflogo?apikey=${zeks}&text1=${teks}&text2=${teks}`, { method: 'get' })
				buffer = await getBuffer(anu.result)
				vanz.sendMessage(from, buffer, image, { quoted: ftoko })
				break
			case 'loli':
				{
					var items = ["anime loli"];
					var nime = items[Math.floor(Math.random() * items.length)];
					var url = "https://api.fdci.se/rep.php?gambar=" + nime;

					axios.get(url)
						.then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nivnz = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nivnz)
								.then(
									(response) => {
										var buf = Buffer.from(response, 'base64');
										vanz.sendMessage(from, buf, MessageType.image, { caption: `LOMLI`, quoted: ftoko })
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
						});
				}
				break
			case 'tht':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙃𝘼𝙍𝙏𝘼 𝙏𝘼𝙃𝙏𝘼 𝘼𝙋𝘼`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const tahta = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var teks = encodeURIComponent(args.join(' '))
				if (!teks) return vanz.sendMessage(from, 'Input teks yang ingin di tulis', msgType.text, { quoted: ftoko })
				var buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=${zeks}`)
				vanz.sendMessage(from, buffer, MessageType.image, { caption: `HARTA TAHTA ${teks}`, quoted: ftoko })
				break
			case 'map':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				const maping = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var teks = args.join(' ')
				axios.get('API LU' + teks)
					.then((res) => {
						imageToBase64(res.data.gambar)
							.then(
								(ress) => {
									var buf = Buffer.from(ress, 'base64')
									vanz.sendMessage(from, buf, MessageType.image, { caption: `${teks}`, quoted: ftoko })
								})
					})
				break
			case 'thunder':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const thunder = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var teks = encodeURIComponent(args.join(' '))
				if (!teks) return vanz.sendMessage(from, 'Teksnya mana block!', MessageType.text, { quoted: ftoko })
				var buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/thunder?apikey=${lol}&text=${teks}`)
				vanz.sendMessage(from, buffer, MessageType.image, { caption: `THUNDER : ${teks}`, quoted: ftoko })
				break
			case 'randomhentai':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				gatauda = args.join(' ')
				vanz.sendMessage(from, mess.wait, MessageType.text, selepbot)
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, { method: 'get' })
				buffer = await getBuffer(anu.result)
				vanz.sendMessage(from, buffer, image, { caption: `RANDOM HENTAI!`, quoted: ftoko })
				break
			case 'nsfwblowjob':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				gatauda = args.join(' ')
				vanz.sendMessage(from, mess.wait, MessageType.text, selepbot)
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, { method: 'get' })
				buffer = await getBuffer(anu.result)
				vanz.sendMessage(from, buffer, image, { caption: `BLOWJOB!`, quoted: ftoko })
				break
			case 'huggif':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				gatauda = args.join(' ')
				vanz.sendMessage(from, mess.wait, MessageType.text, selepbot)
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, { method: 'get' })
				buffer = await getBuffer(anu.result)
				vanz.sendMessage(from, buffer, image, { quoted: ftoko })
				break
			case 'waifu':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				axios.get(`https://naufalhoster.xyz/anime/randomwaifu?apikey=${lol}`).then((res) => {
					imageToBase64(res.data.img)
						.then(
							(ress) => {
								var buf = Buffer.from(ress, 'base64')
								vanz.sendMessage(from, mess.wait, MessageType.text, selepbot)
								vanz.sendMessage(from, buf, MessageType.image)
							})
				})
				break			
				case 'join':
					vanz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Succes Bergabung Dalam Group')
break
case 'kontak':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
             if (args[0].startsWith('62')) return reply('Gunakan kode + kak')
             if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
             if (args.length == 0) return reply(`Usage: ${prefix + command} nomer|name\nContoh: ${prefix + command} +6288224859350|Mevanz :v`)
                    var gh = args.join(' ')
                var entah = gh.split("|")[0];
                var disname = gh.split("|")[1];
                    if (isNaN(entah)) return reply('Invalid phone number'.toUpperCase());
                    vcard2 = 'BEGIN:VCARD\n'
                    + 'VERSION:3.0\n'
                    + `FN:${disname}\n`
                    + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                    + 'END:VCARD'.trim()
                     vanz.sendMessage(from, {displayName: disname, vcard: vcard2}, contact)
                     vanz.sendMessage(from, 'Kalo gk pake + ngebug ntar', text, {quoted: ftoko})
                     break
                    case 'kontag':
             if (args[0].startsWith('62')) return reply('Gunakan kode + kak')
             if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
              if (args.length == 0) return reply(`Usage: ${prefix + command} nomer|name\nContoh: ${prefix + command} +6288224859350|Mevanz :v`)
				var gh = args.join(' ')
                var tyu = gh.split("|")[0];
                var ajc = gh.split("|")[1];
                    if (isNaN(tyu)) return reply('Invalid phone number');
                    members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
                    vcard3 = `BEGIN:VCARD\n`
                     + `VERSION:3.0\n`
                     + `FN:${ajc}\n`
                     + `TEL;type=CELL;type=VOICE;waid=${tyu}:${phoneNum('+' + tyu).getNumber('internasional')}\n`
                     + 'END:VCARD'.trim()
                     vanz.sendMessage(from, {displayName: ajc, vcard: vcard3}, contact, { contextInfo: {"mentionedJid": members_ids}})
                     break
                     
case 'help':
case 'menu':
   case 'h':
				runtime = process.uptime()
				teks = `${kyun(runtime)}`
const moment = require('moment-timezone')

const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')

			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				
				var num = vnz.participant
				gambar = fs.readFileSync('./src/help.jpg')
				fakee = fs.readFileSync('./src/fake.jpg')
			
				isi = ` *SELF - BOT*
				
*+ Bot Type :* NodeJS
*+ Lib :* Baileys
*+ Prefix :* [ ${prefix} ] 
*+ Creator :* ${setting.name}
*+ Jam :* ${jmn}
*+ Hari :* ${week} ${weton}
*+ Tanggal :* ${calender}
*+ Runtime :* ${teks}

*+ ${prefix}gc* [ buka | tutup ]
*+ ${prefix}gcname* [ nama ]
*+ ${prefix}gcdesk* [ teks ]
*+ ${prefix}tagall* [ tagall mem]
*+ ${prefix}leave* [ keluar grup ]
*+ ${prefix}hidetag* [teks]
*+ ${prefix}getpic* [@tag]
*+ ${prefix}hekgc* [ gc force close ]
*+ ${prefix}fitnah* [ @tag teks|teks ]
*+ ${prefix}fitnahpc* [ pribchat ]
*+ ${prefix}hekgc* [ force close ] 

*+ ${prefix}lirik* [ judul ]
*+ ${prefix}ytmp3* [ link yt ]
*+ ${prefix}ytmp4* [ link yt ]
*+ ${prefix}ytmp32* [ link yt ]
*+ ${prefix}ytmp42* [ link yt ]
*+ ${prefix}yts* [ yt search ]
*+ ${prefix}playmp3* [ judul ]
*+ ${prefix}playmp4* [ judul ]
*+ ${prefix}tiktok* [ link tt ]
*+ ${prefix}tiktok2* [ link tt ]
*+ ${prefix}tiktokaudio* [ link tt ]
*+ ${prefix}ig* [ link ig]
*+ ${prefix}joox* [ judul lagu]
*+ ${prefix}igtv* [ lnk ugtv ]
*+ ${prefix}ssweb* [ ss web ]
*+ ${prefix}pin* [ pinterest ]
*+ ${prefix}brainly* [ soal ]

*+ ${prefix}tahta* [ teks ]
*+ ${prefix}toimg* [ reply img ]
*+ ${prefix}tomp3* [ reply video | vn]
*+ ${prefix}tovn* [ reply vid | audio]
*+ ${prefix}s* [ reply img ]
*+ ${prefix}swm* [ srick with wm ]
*+ ${prefix}ocr* [ reply img ]

*+ ${prefix}addsticker* [nama ]
*+ ${prefix}getsticker* [nama ]
*+ ${prefix}liststicker* [ jumlah stik ]
*+ ${prefix}addvn* [ nama ]
*+ ${prefix}getvn* [ nama ]
*+ ${prefix}listvn* [ jumlah vn ]
*+ ${prefix}addvideo* [ nama ]
*+ ${prefix}getvideo* [ nama ]
*+ ${prefix}listvideo* [ jumlah video]
*+ ${prefix}addimage* [ nama ]
*+ ${prefix}getimage* [ nama ]
*+ ${prefix}listimage* [ jumlah img ]

*+ ${prefix}antidelete* [ aktif|mati ]
*+ ${prefix}antidelete* [ ctaktif | ctmati ]
*+ ${prefix}antidelete* [ banct ]
*+ ${prefix}setthumbreply* [ thumbreply ]
*+ ${prefix}setthumbmenu* [ thumbmenu ]
*+ ${prefix}settfakethumb* [ thumb palsu ]
*+ ${prefix}setprefix* [ simbol ]
*+ ${prefix}setreply* [ teks ]
*+ ${prefix}speed* [ ping ]
*+ ${prefix}settarget* [ target fitnahpc ]
*+ ${prefix}block* [ @tag ]
*+ ${prefix}unblock* [ @tag ]
*+ ${prefix}blocklist* [ jumlah block ]
*+ ${prefix}cekchat* [ jumlah chat ]
*+ ${prefix}donasi* [ bagi yang mau donasi ]

*+ ${prefix}bass* [ option ]
*+ ${prefix}tempo* [ option ]
*+ ${prefix}vibra* [ option ]
*+ ${prefix}gemes* [ reply audio ]
*+ ${prefix}gemuk* [ reply audio ]
*+ ${prefix}trigger* [ reply audio ]
*+ ${prefix}nightcore* [ reply audio ]
*+ ${prefix}balik* [ reply audio ]
*+ ${prefix}volume* [ option ]
*+ ${prefix}hode* [ reply audio ]
*+ ${prefix}imut* [ reply audio ]
*+ ${prefix}robot* [ reply audio ]

*+ ${prefix}return* [ javascript ]
*+ ${prefix}>* [ eval ]
*+ ${prefix}run* [ run javascript]
*+ ${prefix}$* [ exec termux ]
`
vanz.sendMessage(from, gambar, image, { quoted: ftoko, caption: isi, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'playmp3':   
               var teks = encodeURIComponent(args.join(' '))
                 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${args.join(' ')}`)
				  buffer = await getBuffer(anu.link)
				  ga = `Sedang Di Proses...`
				  vanz.sendMessage(from, ga, text, {quoted: ftoko})
				  vanz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
				break
				case 'tiktok':
 reply('wait')
 pe = args.join(' ')
  anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${pe}`)
teks = `Nih Boss Videonya...`
					buffer = await getBuffer(`${anu.result}`)
					vanz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ftoko, caption: teks})
					break
					case 'tiktok2':
 reply('wait')
 pe = args.join(' ')
  anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${pe}`)
teks = `Nih Boss Videonya...`
					buffer = await getBuffer(`${anu.result}`)
					vanz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ftoko, caption: teks})
					break
case 'ig':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video}`)
 vanz.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
 break
 case 'igtv':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igtv/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video_url}`)
 vanz.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
 break
 case 'lirik':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${pe}`)
 buf = await getBuffer(`${anu.result.lirik}`)
 vanz.sendMessage(from, buf, text, {quoted:ftoko })
 break
 case 'ytmp32':
 pe = args.join(' ')
 anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3?url=${pe}&apikey=apivinz`)
 buf = await getBuffer(`${anu.result.url_audio}`)
 vanz.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'ytmp3':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 vanz.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'tiktokaudio':
 pe = args.join(' ')
 anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_audio?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 vanz.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'ssweb':
 pe = args.join(' ')
 anu = await getBuffer(`https://api-rull.herokuapp.com/api/ssweb?url=${pe}`)
 vanz.sendMessage(from, anu, image, {quoted: ftoko})
 break
 case 'ytmp42':
 pe = args.join(' ')
 anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${pe}&apikey=${zeks}`)
 buf = await getBuffer(`${anu.result.url_video}`)
 vanz.sendMessage(from, buf, video, {mimetype: 'video/mp4', quoted: ftoko})
 break
 case 'ytmp4':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 vanz.sendMessage(from, buf, video, {mimetype: 'video/mp4', quoted: ftoko})
 break
 case 'balik':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				case 'volume':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
				case 'robot':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
				case 'imut':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
				case 'hode':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
			case 'findhost':
				try {
					if (!q) return fakestatus(mess.wrongFormat)
					anu = await fetchJson(`https://api.banghasan.com/domain/hostsearch/${q}`, { method: 'get' })
					fakestatus(anu.hasil)
				} catch (err) {
					fakestatus(`Error: ${err}`)
				}
				break
			case 'return':
				return vanz.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: fdoc})
break
				break
			case 'tomp3':
				vanz.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
						fs.unlinkSync(ran)
					   })
				break
			case 'getsticker':
			case 'gets':
				var itsme = `${numbernye}@s.whatsapp.net`
				namastc = args.join(' ')
				result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
				vanz.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "${setting.name}", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
				break
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				vanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": setiker } })
				break
			case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = args.join(' ')
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vanz.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				vanz.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftoko })
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vanz.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				vanz.sendMessage(from, `Sukses Menambahkan  Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftoko })
				break
				case 'jadwalsolat':
				 
 namanya = args.join(' ')
const res = await jadwalSolat(`${namanya}`)

let hasil = `❒「  *Jadwal Solat*  」
❖ *Daerah :* ${res[0].daerah}
❖ *Tanggal :* ${res[0].tanggal}
❖ *Subuh :* ${res[0].subuh}
❖ *Dzuhur :* ${res[0].dzuhur}
❖ *Ashar :* ${res[0].ashar}
❖ *Magrib :* ${res[0].maghrib}
❖ *Isya :* ${res[0].isya}
`
vanz.sendMessage(from, `${hasil}`, text, {quoted:ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				vanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vanz.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				vanz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: ftoko })
				break
			case 'getimage':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				vanz.sendMessage(from, buffer, image, { quoted: ftoko, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				vanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'addvideo':
				svst = args.join(' ')
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vanz.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				vanz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftoko })
				break
			case 'getvideo':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				vanz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko })
				break
			case 'videolist':
			case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				vanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": videonye } })
				break
			case 'howax':
			case 'hoax':
			case 'howak':
			case 'hoak':
				vanz.updatePresence(from, Presence.composing)
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, { method: 'get' })
				teks = '────────────────────\n\n'
				for (let i of data.result) {
					teks += `Title : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n────────────────────\n`
				}
				reply(teks.trim())
				break
			case 'leave':
			   
				vanz.sendMessage(from, 'Byeeee kawann', MessageType.text)
				anu = await vanz.groupLeave(from, 'See you........', groupId)
				break
			case 'papweb':
				if (args.length < 1) return reply('Urlnya mana om')
				teks = args.join(' ')
				reply(mess.wait)
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
				buff = await getBuffer(anu.gambar)
				vanz.sendMessage(from, buff, image, { caption: `Result : ${teks}`, quoted: ftoko })
				break
				case 'ph':
                var text1 = args.join(' ')
					var text2 = text1.split("|")[0];
					var gbl2 = text1.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/textprome/pornhub/${text1}/${text2}?apikey=${lol}`, {method: 'get'})
					bufferpoi = await getBuffer(anu.result)
					vanz.sendMessage(from, bufferpoi, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'ninjalogo':
               if (args.length < 1) return reply('Teks nya mana?')
                      var text1 = args.join(' ')
                      var text2 = text1.split("|")[0];
                      var gl2n = text1.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`http://lolhuman.herokuapp.com/api/textprome/ninjalogo/text1/text2?apikey=${lol}`, {method: 'get'})
                      bufqf = await getBuffer(anu.result)
                      vanz.sendMessage(from, bufqf, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                      break
					  case 'apakah':
                apakah = args.join(' ')
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					vanz.sendMessage(from, 'Jawaban : '+ kah, text, { quoted: ftoko })
					break
					case 'bolehkah':
                bolehkahh = args.join(' ')
					const boleh =['boleh','Tidak boleh']
					const kahh = boleh[Math.floor(Math.random() * boleh.length)]
					vanz.sendMessage(from, 'Jawaban : '+ kahh, text, { quoted: ftoko })
					break
					case 'playstore':
				text = args.join(' ')
					reply(mess.wait)
					anu = await getBuffer(`https://api.zeks.xyz/api/sgplay?apikey=${zeks}&q=${text}`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					vanz.sendMessage(from, anu, image, {quoted: ftoko, caption: capty})
					break
					case 'epep':
					if (args.length < 1) return reply(mess.blank)
					teks = args.join(' ')
					if (teks.ength > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/epep?text=${teks}&apikey=${zeks}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					 vanz.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
			case 'chatlist':
			case 'cekchat':
				vanz.updatePresence(from, Presence.composing)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝘾𝙀𝙆 𝘼𝙇𝙇-𝘾𝙃𝘼𝙏`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				//teks = 'This is list of chat number :\n'
				// for (let all of totalchat) {
				//teks += `~> @${totalchat}\n`
				//}
				teks = `Total : ${totalchat.length}`
				vanz.sendMessage(from, teks, MessageType.text, selepbot)
				break

case 'speed':
 case 'ping':
				   case 'p':
				var groups = vanz.chats.array.filter(v => v.jid.endsWith('g.us'))
				var private = vanz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 4000).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 4000)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await vanz.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? '⚡' : ''
					const latensi = speed() - timestamp
					var total = math(`${groups.length}*${private.length}`)
					teks = `*BOT STATISTICS:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${private.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${kyun(uptime)}\n\n*PHONE STATISTICS:*\n*- Baterai :* ${JSON.stringify(baterai)}%${listrik}\n*- Charging Status :* ${charge}\n*- Penggunaan Ram :* ${ram2}\n*- Platform :* ${os.platform()}\n*- Hostname :* ${os.hostname()}\n*- Uptime :* ${kyun(os.uptime())}\n*- Wa Version:* ${vanz.user.phone.wa_version}\n*- Os Version:* ${vanz.user.phone.os_version}\n*- Device Manufacturer:* ${vanz.user.phone.device_manufacturer}\n*- Device Model:* ${vanz.user.phone.device_model}\n*- Os Build Number:* ${vanz.user.phone.os_build_number}`
					vanz.sendMessage(from, teks, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
			case '$':
				const cmd = args.join(' ')
				exec(cmd, (err, stdout) => {
					if (err) return vanz.sendMessage(from, `${err}`, text, { quoted: ftoko })
					if (stdout) {
						vanz.sendMessage(from, stdout, text, { quoted:ftoko})
					}
				})
				break
			case 'donasi':
			case 'sedekah':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `*PAYMENT-INFO*`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				vanz.sendMessage(from, `*──「 DONATE 」──\n- Dana : 085742088184\n- Gopay : 08812904283\n\n*──「 SELF-BOT 」──* `, MessageType.text, selepbot)
				break
			case 'neko':
				{
					var items = ["anime neko"];
					var nime = items[Math.floor(Math.random() * items.length)];
					var url = "https://api.fdci.se/rep.php?gambar=" + nime;

					axios.get(url)
						.then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nivnz = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nivnz)
								.then(
									(response) => {
										var buf = Buffer.from(response, 'base64');
										vanz.sendMessage(from, buf, MessageType.image, { caption: `Neko!`, quoted: ftoko })
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
						});
				}
				break
			case 'blocklist':
				teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
				for (let block of blocked) {
					teks += `- @${block.split('@')[0]}\n`
				}
				teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
				vanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": blocked } })
				break
			case 'ocr':
				if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
					const media = await vanz.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
					await recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
						.then(teks => {
							reply(teks.trim())
							fs.unlinkSync(media)
						})
						.catch(err => {
							reply(err.message)
							fs.unlinkSync(media)
						})
				} else {
					reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
				}
				break

			
				case 'batrei':
				 case 'battrey':
         let batreiNow = global.batrei[global.batrei.length - 1]
         vanz.sendMessage(from, `${batreiNow}%`, text)
         break
				
case 'virtex':
                    vanz.sendMessage(from, virtex(prefix), text, { quoted: ftoko })
                    break
                    case 'totts':
				vanz.updatePresence(from, Presence.composing)
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				const tts = require('./lib/gtts')(args[0])

				if (args.length < 2) return vanz.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, { quoted: ftoko })

				dtt = args.join(' ')
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function () {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							vanz.sendMessage(from, buff, encmedia, audio, { quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
							fs.unlinkSync(rano)
						})
					})
				break
			case 'gtts':
			case 'tts':
				if (args.length < 1) return vanz.sendMessage(from, 'kode bahasa nya mna?', text, { quoted: ftoko })
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return vanz.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, { quoted: ftoko })
				dtt = args.join(' ')
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function () {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							vanz.sendMessage(from, buff, encmedia, audio, { quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
							fs.unlinkSync(rano)
						})
					})
				break
				
			case 'setprefix':
				prefix = args.join(' ')
				vanz.sendMessage(from, `Succes Mengganti Prefix : ${prefix}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
				/*-------------[ Tictactoe Handler ]-------------*/
                case 'tictactoe':
                    if (fs.existsSync(`./sampah/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Tictactoe Game 🎳*
     
     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         vanz.sendMessage(from, chatMove, MessageType.text, {
                              quoted: ftoko,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (args.length < 1)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *!tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.split("@s.whatsapp.net", "");
                    boardnow.O = args[1].split("@", "");
                    fs.writeFileSync(
                         `./sampah/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎮 Memulai game tictactoe 🎳*
     
     @${sender.split(
                         "@s.whatsapp.net",
                         ""
                    )} menantang anda untuk menjadi lawan game
     
     _[ ${args[1]} ] Ketik Y/N untuk menerima atau menolak permainan_ 
     `;
                    vanz.sendMessage(from, strChat, MessageType.text, {
                         quoted: ftoko,
                         contextInfo: {
                              mentionedJid: [sender, args[1].split("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
               case 'delttc':
                    // if (!isOwner) return vanz.sendMessage(id, yan, MessageType.text);
                    if (fs.existsSync("./sampah/" + from + ".json")) {
                         fs.unlinkSync("./sampah/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
                    }
                    break
			case 'setreply':
			case 'setfake':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙨𝙖𝙩𝙞𝙤𝙣`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				fake = args[0]
				vanz.sendMessage(from, `Succes Mengganti Conversation Fake : ${fake}`, MessageType.text, selepbot)
				break
			case 'setnumber':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝙉𝙪𝙢𝙗𝙚𝙧`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				numbernye = args[0]
				vanz.sendMessage(from, `Succes Mengganti Number Conversation : ${numbernye}`, MessageType.text, selepbot)
				break
			case 'settarget':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝙉𝙪𝙢𝙗𝙚𝙧 𝙂𝙝𝙤𝙞𝙗`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				targetprivate = args[0]
				vanz.sendMessage(from, `Succes Mengganti target Private Fake Reply : ${targetprivate}`, MessageType.text, selepbot)
				break
			case 'meme':
				meme = await kagApi.memes()
				buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
				vanz.sendMessage(from, buffer, image, { quoted: ftoko, caption: '.......' })
				break
			case 'dare':
				vanz.updatePresence(from, Presence.composing)
				vanz.chatRead(from)
				dare = [
					'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
					'spill orang yang bikin kamu jedag jedug',
					'telfon crush/pacar sekarang dan ss ke pemain',
					'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
					'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
					'marah² ga jelas ke penonton sw kamu urutan 30',
					'telfon mantan bilang kangen',
					'yanyiin reff lagu yang terakhir kamu setel',
					'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
					'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
					'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
					'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
					'sebutin nama nama mantan',
					'buatin 1 pantun untuk pemain pertama!',
					'ss chat wa',
					'chat random people dengan bahasa alay lalu ss kesini',
					'ceritain hal memalukan versi diri sendiri',
					'tag orang yang dibenci',
					'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
					'ganti nama jadi " BOWO " selama 24 jam',
					'teriak " anjimm gabutt anjimmm " di depan rumah mu',
					'snap/post foto pacar/crush',
					'sebutkan tipe pacar mu!',
					'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
					'record voice baca surah al-kautsar',
					'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
					'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
					'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
					'ketik pake bahasa sunda 24 jam',
					'pake foto sule sampe 3 hari',
					'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
					'kirim voice note bilang can i call u baby?',
					'ss recent call whatsapp',
					'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
					'pap ke salah satu anggota grup'
				]
				drre = dare[Math.floor(Math.random() * (dare.length))]
				vanz.sendMessage(from, drre, text, { quoted: ftoko })
				break
			case 'memeindo':
				buffer = await getBuffer(`https://api.zeks.xyz/api/memeindo?apikey=${zeks}`)
				vanz.sendMessage(from, buffer, image, { quoted: ftoko, caption: '.......' })
				break
			case 'tagme':
				var nom = vnz.participant
				const tag = {
					text: `@${nim.split("@s.whatsapp.net")[0]} Ku tag kau sayang❤️🗿!`,
					contextInfo: { mentionedJid: [nom] }
				}
				vanz.sendMessage(from, tag, text, { quoted: ftoko })
				break
			case 'tagall':
				members_id = []
				teks = (args.length > 1) ? args.join(' ').trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `Mampus! @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
			case 'clearall':
				if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?')
				anu = await vanz.chats.all()
				vanz.setMaxListeners(25)
				for (let _ of anu) {
					vanz.deleteChat(_.jid)
				}
				reply('𝗰𝗹𝗲𝗮𝗿 𝗮𝗹𝗹 𝘀𝘂𝗸𝘀𝗲𝘀 𝘆𝗮𝗵 𝘁𝗼𝗱 :)')
				break
				case 'block':
					vanz.updatePresence(from, Presence.composing) 
				    vanz.blockUser (`${args.join(' ')}@c.us`, "add")
					vanz.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗠𝗲𝗺𝗯𝗹𝗼𝗸𝗶𝗿`, text)
				break
				case 'unblock':
					vanz.updatePresence(from, Presence.composing) 
					vanz.blockUser (`${args.join(' ')}@c.us`, "remove")
					vanz.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗶𝗿`, text)
				break 
			case 'lep':
				if (!isGroup) return reply(mess.only.group)
				vanz.vanz.leaveGroup(from, 'Cyaaa', MessageType.text)
				await vanz.vanz.leaveGroup(from, '𝗕𝘆𝗲𝗲', groupId)
				break
			case 'bc':
				if (args.length < 1) return reply('.......')
				anu = await vanz.chats.all()
				if (isMedia && !vnz.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
					buff = await vanz.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						vanz.sendMessage(_.jid, buff, image, { caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${args.join(' ')}` })
					}
					reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
				} else {
					for (let _ of anu) {
						sendMess(_.jid, `*INFO NEW*\n\n${args.join(' ')}`)
					}
					reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
				}
				break
			case 'add':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Yang mau di add jin ya?')
				if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					vanz.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return vanz.sendMessage(from, 'Diprivate asu:v', MessageType.text)
				}
				break
			case 'promote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Promote :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					vanz.groupMakeAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					vanz.groupMakeAdmin(from, mentioned)
				}
				break
			case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Demote :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					vanz.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					vanz.groupDemoteAdmin(from, mentioned)
				}
				break
			case 'listadmin':
				if (!isGroup) return reply(mess.only.group)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
				break
			case 'toimg':
					if (!isQuotedSticker) return reply('stickernya mana block!')
					reply('[ Wait ] Sabarr...')
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('itu sticker?')
						buffer = fs.readFileSync(ran)
						vanz.sendMessage(from, buffer, image, { caption: 'Done bruhh' })
						fs.unlinkSync(ran)
					});
				break
			case 'clone':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
				if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let {jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await vanz.getProfilePicture(id)
					buffer = await getBuffer(pp)
					vanz.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
				}
				break
			case 'wait':
				if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(mess.wait)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
					media = await vanz.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
						vanz.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
					}).catch(err => {
						reply(err)
					})
				} else {
					reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗼𝗰𝗿')
				}
				break
				case 'modapk':
				case 'apkmod':
				case 'mod':
                   vanz.sendMessage(from, modapk(prefix), text, { quoted: ftoko })
                    break
					case 'kodenuklir':
						var itsme = `${numbernye}@s.whatsapp.net`
						var split = `${fake}`
						tod = await getBuffer(``)
					vanz.sendMessage(from, tod, image, { quoted: ftoko, caption: kodenuklir()})
					break
		     case 'nilai':
					case 'rate':
				rate = args.join(' ')
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					vanz.sendMessage(from, 'Jawaban : '+ te+'%', text, { quoted: ftoko })
					break
					case 'kapankah':
					kapankah = args.join(' ')
							const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
							const koh = kapan[Math.floor(Math.random() * kapan.length)]
							vanz.sendMessage(from, 'Jawaban : '+ koh, text, { quoted: ftoko })
							break
				case 'dadu':
				kapankah = args.join(' ')
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					vanz.sendMessage(from, ule, text, { quoted: ftoko })
					break
					case 'quran':
				    anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					vanz.sendMessage(from, quran, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'hilih':
				if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${args.join(' ')}&apikey=${zeks}`, {method: 'get'})
					reply(anu.result)
					break
					case 'brainly':
                    brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					vanz.sendMessage(from, teks, text, {quoted: ftoko})
                        console.log(res)
                    })
                
break
					// case by itsmeiky663
					case 'bass':     
               var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
									case 'vibra':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
									case 'vibrav':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
										vanz.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
})
					break
					case 'trigger':
					   encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await vanz.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
					// case by itsmeiky633
					
					
				case 'katailham':
				anu = await fetchJson(`https://api.shizukaa.xyz/bacotanilham?apikey=itsmeiky633`, {method: 'get'})
				kata = anu.result
				vanz.sendMessage(from, kata, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
				case 'asupan':
				reply(mess.wait)
                anu = await fetchJson(`https://api.shizukaa.xyz/asupan?apikey=itsmeiky633`)
                asup = await getBuffer(anu.result)
                vanz.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: ftoko, caption: 'Asupannya Tuan:v'}) 
                break
				case 'happymod':
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${args.join(' ')}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: `${teks}`})
			break
			case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${args.join(' ')}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: `${teks}`})
			break
			case 'hek':
				var nn = args.join(' ')
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				vanz.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
			
					case 'fakta':
                    gatauda = args.join(' ')
					anu = await fetchJson(`https://api-shizuka.herokuapp.com/fakta?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					break
					case 'bucin':
                    gatauda = args.join(' ')
					anu = await fetchJson(`https://api-shizuka.herokuapp.com/katacinta?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					break
					case 'katabijak':
	    			anu = await fetchJson(`https://api-shizuka.herokuapp.com/quotebijak?apikey=itsmeiky633`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					vanz.sendMessage(from, katabijak, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break 
					case 'ahegao':
				    try {
						res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
				case 'tebakgambar':
                anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					vanz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					vanz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					vanz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					vanz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					vanz.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'sideoppai':
				    try {
                    res = await fetchJson(`https://api-shizuka.herokuapp.com/pussy?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
					case 'apiteks':
				   if (args.length < 1) return reply('Teksnya mana um')
					love = args.join(' ')
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                    reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${love}&apikey=${zeks}`, {method: 'get'})
					vanz.sendMessage(from, bufferxcz, image, {quoted: ftoko, caption: ' '+love})
					break
					case 'nsfwloli':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'WADOOOHHH'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
					case 'swm2':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels3 = args.join(' ')
  tels = tels3.split("/")[0];
 tels2 = tels3.split("/")[1];
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}&img=${anu.display_url}&package=${tels}&author=${tels2}`)
 vanz.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
					case 'nsfwwaifu':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					} 
					break
					
					case 'nsfwtrap':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					} 
					break
					case 'nsfwneko':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
					case 'quotemaker':
                var gh = args.join(' ')
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					vanz.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: ftoko})
					break
					case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${args.join(' ')}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
				break
					case 'pastebin':
                  reply(mess.wait)
				paste = `${args.join(' ')}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})				
                   break 
				   case 'pantun':
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
			break 
			case 'jamdunia':
	        reply(mess.wait)
		 jamdunia = `${args.join(' ')}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${lol}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			vanz.sendMessage(from, wtime, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) 
			break
			case 'encbinary':
			encbinary = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decbinary':
				decbin = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'pratebucin':
			case 'bucinrate':
			 if (args.length < 1) return reply('Mana Nama?')
				rate = args.join(' ')
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi/Pakgerl","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi/Pakgerl","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi/Pakgerl","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				vanz.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: ftoko })
				break  
				case 'kick':
				   if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						vanz.groupRemove(from, mentioned)
					} else {
						mentions(`Bye Bye Beban Grup@${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						vanz.groupRemove(from, mentioned)
					}
					break
				case 'infogempa':
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   gempa = `•Lokasi *${anu.lokasi}*\n*+ Waktu: *${anu.waktu}* \n*+ Potensi: *${anu.potensi}*\n*+ Magnitude: *${anu.magnitude}*\n*+ Kedalaman: *${anu.kedalaman}*\n*+ Koordinat: *${anu.koordinat}*`
                   vanz.sendMessage(from, buff, image, {quoted: ftoko, caption: gempa})
                   break 
				   case 'dorking':
			    dork = `${args.join(' ')}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					vanz.sendMessage(from, hasil, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'encode64':
				encode64 = `${args.join(' ')}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${lol}&type=encode&string=${encode64}`, {method: 'get'})
				vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decode64':
			    decode64 = `${args.join(' ')}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${lol}&type=decode&string=${decode64}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decode32':
				decode32 = `${args.join(' ')}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${lol}&type=decode&string=${decode32}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'encode32':
				encode32 = `${args.join(' ')}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${lol}&type=encode&string=${encode32}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'encoctal':
				encoc = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decoctal':
				decoc = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break  
				case 'becrypt':
				becry = `${args.join(' ')}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${lol}&string=${becry}`, {method: 'get'})
				vanz.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break 
					case 'hashidentifier':
					hash = `${args.join(' ')}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  vanz.sendMessage(from, hasilhash, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					  break 
					  case 'jadwaltv':
                reply(mess.wait)
                jadwaltv = `${args.join(' ')}`
                anu = await fetchJson(`https://api.zeks.xyz/api/?channel=${jadwaltv}&apikey=${zeks}`, {method: 'get'})
                jtv = `${anu.result}`
                vanz.sendMessage(from, jtv, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
               	break
				   case 'darkjokes':
				vanz.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				 data = fs.readFileSync('./sticker/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 vanz.sendMessage(from, darkjokes, image, {quoted: ftoko, caption: '...`'})
				break
				case 'quotes':
				vanz.updatePresence(from, Presence.composing) 
				  data = fs.readFileSync('./sticker/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 vanz.sendMessage(from, randQuote, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'mimpi':
			    anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${args.join(' ')}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${args.join(' ')}* Adalah:\n${anu.result.hasil}`
			        vanz.sendMessage(from, mimpi, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) 
			       	break
					   case 'miku':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vanz.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: ftoko })
					break
					case 'pinterest':
					case 'pin':
					 reply('wait..')
					 anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args.join(' ')}`, {method: 'get'})
					 mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vanz.sendMessage(from, nye, image, { caption: 'Pinterest', quoted: ftoko })
					break
					case 'kurumi':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					vanz.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: ftoko }) 
					break 
					case 'itori':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					vanz.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: ftoko })
					case 'sasuke':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					vanz.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: ftoko })
					break 
				case 'sakura':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					vanz.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: ftoko })
					break 
 				case 'toukachan':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					vanz.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: ftoko })
					break 
				case 'rize':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					vanz.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: ftoko })
					break 
				case 'akira':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					vanz.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: ftoko })
					break 
					case 'anime':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					vanz.sendMessage(from, pok, image, { quoted: ftoko , caption: 'nihhh'})
					break  
				case 'naruto':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					vanz.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: ftoko })
					break 
				case 'minato':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					vanz.sendMessage(from, nye, image, { caption: 'minato!!', quoted: ftoko })
					break 
				case 'boruto':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					vanz.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: ftoko })
					break 
				case 'hinata':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					vanz.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: ftoko })
					break
					case 'levi':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=levi+ackerman`, {method: 'get'})
					levi = JSON.parse(JSON.stringify(anu));
					ackerman =  levi[Math.floor(Math.random() * levi.length)];
					nye = await getBuffer(ackerman)
					vanz.sendMessage(from, nye, image, { caption: 'levi!!', quoted: ftoko })
					break
					case 'eren':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=eren+yeager`, {method: 'get'})
					er = JSON.parse(JSON.stringify(anu));
					en =  er[Math.floor(Math.random() * er.length)];
					nye = await getBuffer(en)
					vanz.sendMessage(from, nye, image, { caption: 'eren!!', quoted: ftoko })
					break
					case 'kodenuklir2':
					anu = await getBuffer(`https://i.ibb.co/qm1qjdD/images-2020-12-28-T142307-987.jpg`)
					vanz.sendMessage(from, image, { quoted: ftoko, caption: kodenuklir2()})
					break
					case 'ttp':
				res = await getBase64(anu.base64)
				vanz.sendMessage(from, res, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
case 'bitly':
				vanz.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args.join(' ')}&apikey=BotWeA`)
                hasil = `link : ${args.join(' ')}\n\nOutput : ${data.result}`
                reply(hasil)
                //
                break
case 'tempo':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
})
				break
				case 'mfire':
				   var teks = args.join(' ')
				vanz.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=${zeks}&url=${teks}`)
                hasil = `link : ${teks}\n\nMediafire : ${data.result}`
                reply(hasil)
                //
                break
                case 'surl':
				vanz.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args.join(' ')}&apikey=${zeks}`)
                hasil = `link : ${args.join(' ')}\n\nMediafire : ${data.result}`
                reply(hasil)
                //
                break
                case 'run':
                
                sy = args.join(' ')
                return eval(sy)
               
break
case '>':
var konsol = args.join(' ')
function sendResult(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
break
case 'fast':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break

			  
			case 'ingfo':
				vanz.sendMessage(from, `\n❁۪۪ AUTHOR : Ivan-MLN\n❁۪۪ PREFIX : [ ${prefix}]\n❁۪۪ ${setting.fake} BY : ./Z-IvanMLN`, text, { quoted: { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Ingfo?", 'jpegThumbnail': fs.readFileSync('./src/image/Ivan.jpg')}}}})

break
								case 'kicktime':
					if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 vanz.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`OTW BOS KU , SIAP BRO? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 vanz.sendMessage(from, 'GAPAKE LAMA LANGSUNG GW KICK AJA !', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 vanz.sendMessage(from, 'BYE BYE', text, { quoted: ftoko }) // ur cods
					}, 0) // 1000 = 5s,
					}
					break
					case 'tiktod':
					var gh = args.join(' ')
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext test|test`)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					vanz.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					//
					break
						case 'gemes':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
						case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
					case 'hek':
				vanz.sendMessage(from, 'https://www.nasa.gov', text, {thumbnail: fs.readFileSync('./src/Ivan.jpg'), matchedText: 'https://kontlo'})
			    break
			    case 'harrypotter':
				ween = args.join(' ')
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${ween}`)
		    vanz.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
		    break
		    case 'cmd':
	var teks = encodeURIComponent(args.join(' '))
				if (!teks) return vanz.sendMessage(from,  msgType.text, { quoted: ftoko })
var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/cmd?code=${teks}`)
vanz.sendMessage(from, buffer, image)
break
case 'sideshow':
	var teks = encodeURIComponent(args.join(' '))
				if (!teks) return vanz.sendMessage(from,  'textnya mana', MessageType.extendedText, { quoted: ftoko })
var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/photooxy/slideshow?text=${teks}`)	
vanz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko})
				break
				break


				case 'sideshow2':
	var teks = encodeURIComponent(args.join(' '))
				if (!teks) return vanz.sendMessage(from,  'textnya mana', MessageType.extendedText, { quoted: ftoko })
var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/photooxy/slideshow?text=${teks}&style2`)	
vanz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko})
				break
				                                
				                                
				
				case 'ffname':
				 var anunya = encodeURIComponent(args.join(' '))
anunye = await fetchJson(`http://api.lolhuman.xyz/api/freefire/${anunya}?apikey=${lol}`)
nganu = `❒ *Nickname :* ${anunye.result}
❒ *UID :* ${anunya}`
vanz.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'lolhumancek':
   case 'ceklolkey':
 anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
vanz.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'mylolkey':
 anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
vanz.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'attp':
					if (args.length < 1) return reply('Textnya mana gan?')
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					vanz.sendMessage(from, attp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
				
				case 'play-doc':   
               var teks = encodeURIComponent(args.join(' '))
                 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${args.join(' ')}`)
				  thumb = await getBuffer(anu.thumb)
				  buffer = await getBuffer(anu.link)
				  ga = `❒「  *${setting.name}*  」
*+ *Judul :* ${anu.title}
*+ *Durasi :* ${anu.duration}
*+ *Size :* ${anu.filesize}
*+ *Channel :* ${anu.channel}
*+ *Upload :* ${anu.uploaded}
*+ *views :* ${anu.total_view}
*+ *link :* ${anu.link}   `
				  vanz.sendMessage(from, thumb, image, {quoted: ftoko, caption: ga})
				  vanz.sendMessage(from, buffer, document, {mimetype: 'audio/doc',  filename: `${anu.title}.mp3`, quoted: ftoko })
				break
					case 'teruskan':
vanz.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            				case 'welcome':
					if (args.length < 1) return reply('1=on & 2=off')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Welcome Sudah Aktif')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Berhasil Mengaktifkan Fitur Welcome')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Berhasil Mematikan Fitur Welcome')
					}
					break
					case 'cm':
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} "origin(rgb24).png" -c:v libx264 -preset placebo -qp 0 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv444p10le -sws_flags spline+accurate_rnd+full_chroma_int -vf "colormatrix=bt470bg:bt709" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 "colormatrix_yuv444p10le.avi" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
					})
					break
					
               case 'del':
               case 'd':
               vanz.deleteMessage(from, { id: vnz.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
               case 'wasted':
					var imgbb = require('imgbb-uploader')
					if (((isMedia && !vnz.message.videoMessage) || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz;
						reply(mess.wait);
						owgi = await vanz.downloadAndSaveMediaMessage(ger);
						anu = await imgbbuploader('20a14861e4f7591f3dc52649cb07ae02', owgi);
						teks = `${anu.display_url}`;
						anu1 = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${teks}`);
						fs.writeFileSync('wasted.jpg', anu1)
						vanz.sendMessage(from, fs.readFileSync('wasted.jpg'), MessageType.image)
					} else {
						reply('Gunakan foto!');
					}
					break
					
					
               case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)

  anu = await imgbb(${imgbb_key}, owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Di Cari Orang Gila&text2=Hub : 08812904283`)
 vanz.sendMessage(from, hehe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
}
break
case 'draw':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'ocean':

var imgbb = require('imgbb-uploader')

if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
				case 'ss2':
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${args.join(' ')}`
					reply(mess.wait)
					anu = await fetchJson(`https://api-rull.herokuapp.com/api/ssweb?url=${teks}`)
					ssweb = await getBuffer(anu.result)
					vanz.sendMessage(from, ssweb, image, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break 
case 'skets':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break

case 'fire':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/burning-fire?url=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'gtavpp':
var imgbb = require('imgbb-uploader')
if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('Siap Boss')

					mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]

						pp = await vanz.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
  anu = await imgbb(${imgbb_key},buffer)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

break
case 'invert':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=freeKeY`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'tovid':
 case 'tomp4':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.StickerMessage || isQuotedSticker) && args.length == 0) {
  ted = isQuotedSticker ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
case 'old':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/greyscale?url=${anu.display_url}&apikey=freeKeY`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'stik':
 case 's':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, sticker, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'scircle':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${lol}&img=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
 case 'swm':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}&img=${anu.display_url}&package=${setting.package_name}&author=${setting.author}`)
 vanz.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'swm2':
                    if ((isMedia && !vnz.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} vanz|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await vanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            vanz.sendMessage(from, ini_buff, sticker, { quoted: ftoko }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'nobg':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  satu = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu.display_url}`)
 vanz.sendMessage(from, satu, image, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'cg':
var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(${imgbb_key}, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 vanz.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case '8bit':
if (args.length < 1) return reply(`Contoh: ${prefix}8bit vanz/bot`)
ds = `${args.join(' ')}`
tex1 = ds.split("|")[0];
tex2 = ds.split("|")[1];
reply(mess.wait)
brikff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, {method: 'get'})
vanz.sendMessage(from, brikff, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'burnpaper':
if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper vanz`)
todi = args.join(' ')
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
vanz.sendMessage(from, pper, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'glowneon':
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon vanz`)
tekas = args.join(' ')
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
vanz.sendMessage(from, glown, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'gsuggest':
if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest vanz/bot/wea`)
du = `${args.join(' ')}`
ted1 = du.split("|")[0];
ted2 = du.split("|")[1];
ted3 = du.split("|")[2];
reply(mess.wait)
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
vanz.sendMessage(from, sugetg, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'candlemug':
if (args.length < 1) return reply(`Contoh: ${prefix}candlemug vanz`)
ddu = args.join(' ')
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
vanz.sendMessage(from, clmug, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'lovemss':
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss vanz`)
lop = args.join(' ')
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
vanz.sendMessage(from, lepms, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'mugflower':
if (args.length < 1) return reply(`Contoh: ${prefix}mugflower vanz`)
mug = args.join(' ')
reply(mess.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
vanz.sendMessage(from, mflowg, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'narutobanner':
if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner vanz`)
nar = args.join(' ')
reply(mess.wait)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
vanz.sendMessage(from, narba, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'paperglass':
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass vanz`)
papg = args.join(' ')
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
vanz.sendMessage(from, gelas, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'romance':
if (args.length < 1) return reply(`Contoh: ${prefix}romance vanz`)
roce = args.join(' ')
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
vanz.sendMessage(from, roma, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'shadow':

if (args.length < 1) return reply(`Contoh: ${prefix}shadow vanz`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
vanz.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'ga':

if (args.length < 1) return reply(`Contoh: ${prefix}shadow vanz`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/gradientavatar?text=${sdow}`)
vanz.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'ytstalk':
   var q = args.join(' ')
				try {
					const channel = await fetchs.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${config.YoutubeKey}&maxResults=1&type=channel`);
					const resultchannel = await fetchs.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${config.YoutubeKey}`);
					const datachannel = `「 *YOUTUBE-STALK* 」

*+ *CHANNEL* : ${channel.body.items[0].snippet.channelTitle}
*+ *DESKRIPSI* : ${channel.body.items[0].snippet.description}
*+ *TOTAL SUBS* : ${convertBalanceToString(resultchannel.body.items[0].statistics.subscriberCount)}
*+ *TOTAL VIEW* : ${convertBalanceToString(resultchannel.body.items[0].statistics.viewCount)}
*+ *TOTAL VIDEO* : ${convertBalanceToString(resultchannel.body.items[0].statistics.videoCount)}
*+ *DATA CREATED* : ${channel.body.items[0].snippet.publishedAt}
*+ *LINK* : https://www.youtube.com/channel/${channel.body.items[0].id.channelId}
`
					
					var buffer321 = await getBuffer(`${channel.body.items[0].snippet.thumbnails.high.url}`)
					vanz.sendMessage(from, buffer321, MessageType.image, { caption: datachannel, quoted: ftoko })
				} catch (err) {
					reply(`Err: ${err}`)
				}
				break
				case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = args.join(' ')
					reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/igstalk?user=${args.join(' ')}l&apikey=freeKeY`, {method: 'get'})
					buffer = await getBuffer(anu.profilePic)
					capt = `┌──「 *STALKIG* 」
*+ *Nama :* ${anu.username}
*+ *Username :* ${anu.fullName}
*+ *Followers :* ${anu.follower}
*+ *Mengikuti :* ${anu.following}
*+ *Bio :* ${anu.biography}`
					vanz.sendMessage(from, buffer, image, {quoted: ftoko, caption: capt})
					break
					case 'stiktes':
					var imgbb = require('imgbb-uploader')
if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
  reply(mess.wait)
  owgi = await vanz.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu1 = await imgbb(${imgbb_key}, owgi)
  anu2 = await fetchJson(`https://videfikri.com/api/imgbb/?urlgbr=${anu1.display_url}&title=Ivan`)
 anu3 = await fetchJson(`http://api.lolhuman.xyz/api/convert/towebp?apikey=LuckApikey&img=${anu2.url_display}`)
 vanz.sendMessage(from, anu3, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'gr':



if (args.length < 1) return reply(`Contoh: ${prefix}shadow vanz`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/glowrainbow?text=${sdow}`)
vanz.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'chat':
nonya = args.join(' ')
teksnya = nonya.split("|")[0];
vanz.sendMessage(`${nonya}@s.whatsapp.net`, `${teksnya}`, text)
break
case 'glitch':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}glitch vanz/bot`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
vanz.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'rw':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}glitch vanz/bot`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
gel3 = gl.split("|")[2];
reply(mess.wait)
litsh = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/retro-wave?text1=${gel1}&text2=${gel2}&text3=${gel3}&font=2`, {method: 'get'})
vanz.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'rw2':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}glitch vanz/bot`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
gel3 = gl.split("|")[2];
reply(mess.wait)
litsh = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/retro-wave?text1=${gel1}&text2=${gel2}&text3=${gel3}&font=2&bg=3`, {method: 'get'})
vanz.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
case 'ss':
var p = args.join(' ')
pe = await getBuffer(`https://api-rull.herokuapp.com/ssweb?url=${p}`)
vanz.sendMessage(from, pe, image, text, { mimetype: 'image/jpg', quoted: ftoko})
break
case 'coffe':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}coffe vanz`)
kop = args.join(' ')
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
vanz.sendMessage(from, ppi, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'candy':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}candy vanz`)
cndy = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
vanz.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'candy':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}candy vanz`)
teks = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${teks}`)
vanz.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'smoke':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}candy vanz`)
teks = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${teks}`)
vanz.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'hpotter':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}hpotter vanz`)
hpter = args.join(' ')
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
vanz.sendMessage(from, helpter, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'woodblock':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock vanz`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
vanz.sendMessage(from, gblok, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'gbutton':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock vanz`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${woblk}&apikey=${zeks}`)
vanz.sendMessage(from, gblok, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'sbutton':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock vanz`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${woblk}&apikey=${zeks}`)
vanz.sendMessage(from, gblok, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                case 'christmas':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&Text=${txt}`)
                    vanz.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "${setting.name}", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
                    break
                    case 'upstatus':
                     q = args.join(' ')
				vanz.sendMessage('status@broadcast', `${q}`, extendedText)
				vanz.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess!", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})

break
case 'readallchat':
   case 'readall':
      case 'rall':
				const readallid = await vanz.chats.all()
			vanz.setMaxListeners(25)
				for (let xyz of readallid) {
					await vanz.chatRead(xyz.jid)
				}
		      vanz.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})

break
				break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lol}&text=${txt}`)
                    vanz.sendMessage(from, buffer, image, { quoted: ftoko })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lol}&text=${txt}`)
             vanz.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "MAKER NYA BOS !", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
                    break
				case 'wasted-y':
                            var imgbb = require('imgbb-uploader')
                            if ((isMedia && !vnz.message.videoMessage || isQuotedImage) && args.length == 0) {
                           ger = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: vnz
                            //reply(mess.wait)
                            owgi = await  vanz.downloadAndSaveMediaMessage(ger)
                           anu = await imgbb(${imgbb_key}, owgi)
                           ranp = getRandom('.gif')
                          rano = getRandom('.webp')
                          anu3e = `https://some-random-api.ml/canvas/wasted?avatar=${anu.display_url}`
                          exec(`wget ${anu3e} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                          if (err) return reply(mess.error.stick)
                         nobga = fs.readFileSync(rano)
                         vanz.sendMessage(from, nobga, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                         fs.unlinkSync(rano)
                          })
                             
                           } else {
                         reply('Gunakan foto!')
                          }
                           break
                           case 'spamcall':
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = args.join(' ')
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://videfikri.com/api/call/?nohp=`+data+``, {method: 'get'})
                                       break
                                       case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vanz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				       case 'getpic':
					if (args.length < 1) return 
					if (vnz.message.extendedTextMessage === undefined || vnz.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = vnz.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await vanz.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						vanz.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
					break
					case 'hekgc':
					vanz.toggleDisappearingMessages(from, 'maap yee', text)
					break
					case 'passed':
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : vnz
				encmediaP = await vanz.downloadAndSaveMediaMessage(mediaP)
				exec("convert "+encmediaP+" 'database/gambar/pangsed.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/gambar/passed.png'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Welcome'))
					.on('exit', () => {
					vanz.sendMessage(from, fs.writeFileSync('database/gambar/passed.png'), image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					})
					break
					case 'hack':
				var nn = args.join(' ')
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : vnz
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				vanz.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
case 'toaudio':
			vanz.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
				})
				break
				case 'tovn':
				vanz.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				})
				break
				
				case 'tovn-v':
				vanz.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				})
				break
				case 'public':
				case 'publik':
				   publik = true
				vanz.sendMessage(vnz.key.remoteJid, `「 *PUBLIC-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
				case 'self':
				   publik = false
				vanz.sendMessage(vnz.key.remoteJid, `「 *SELF-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
				case 'toaudio':
				vanz.updatePresence(from, Presence.composing)
				if (!isQuotedAudio) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await vanz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
vanz.sendMessage(from, buffer, audio, { mimetype: 'ptt', quoted: ftoko, duration:99999999999999999999999})
						fs.unlinkSync(ran)

					   })
				break
				case 'setthumbreply':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbreply = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downreply = await vanz.downloadMediaMessage(thumbreply)
				fs.unlinkSync(`./src/Ivan.jpg`)
				fs.writeFileSync(`./src/Ivan.jpg`, downreply)
			vanz.sendMessage(from, `Berhasil Mengganti Thumbnail Reply`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
case 'setthumbmenu':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbmenu = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downmenu = await vanz.downloadMediaMessage(thumbmenu)
				fs.unlinkSync(`./src/help.jpg`)
				fs.writeFileSync(`./src/help.jpg`, downmenu)
				anu = fs.readFileSync('./src/help.jpg')
				anuu = fs.readFileSync('./src/fake.jpg')
				vanz.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah Thimbnail Menu`, thumbnail: anuu})
break
case 'setfakethumb':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const fakethumb = JSON.parse(JSON.stringify(vnz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downfake = await vanz.downloadMediaMessage(fakethumb)
				fs.unlinkSync(`./src/fake.jpg`)
				fs.writeFileSync(`./src/fake.jpg`, downfake)
				anu = fs.readFileSync('./src/fake.jpg')
				vanz.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah FakeThumb`})
break
case 'getvn':
 namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
 break
case 'antilink':
if (args.length < 1) return reply('1on | 0off')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Antilink sudah aktif')
antilink.push(from)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
reply('Berhasil Menghidupkan Antilink Di GC ini')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
reply('Berhasol Mematikan Antilink di GC ini')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
				break
					//case 'fakethumb': 
				//	   {thumbnail: fs.readFileSync("folderlu/gambar/gambarlu.jpg"), quoted: ftoko})
				//	   break
			default:
			if (isGroup && isAntiLink && isUrl(url) && !isOwner && url != undefined) {
var sial = sender.split('@')[0] + "@s.whatsapp.net"
vanz.groupRemove(from, [sial])
}
if (budy.includes(`xixi`)){  
				namastc = 
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				vanz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
				
if (budy.includes("Pota")){  
        const pota = fs.readFileSync('./src/audio/pota pota v2.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Musik")){  
        const pota = fs.readFileSync('./src/audio/bermain musik.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("ntot")){  
        const pota = fs.readFileSync('./src/audio/ntot arep ora anjeng.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Lovestory")){  
        const pota = fs.readFileSync('./src/audio/LoveStory.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Burik")){  
        const pota = fs.readFileSync('./src/audio/anjay burik.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Nyolong")){  
        const pota = fs.readFileSync('./src/audio/anak babi ngentod suka nyolong.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Cidro2")){  
        const pota = fs.readFileSync('./src/audio/cidro2.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Bernyanyi")){  
        const pota = fs.readFileSync('./src/audio/bernyanyi.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("Lovyu")){  
        const pota = fs.readFileSync('./src/audio/lopyu.mp3');
vanz.sendMessage(from, pota, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
if (budy.includes("batrai")){
const batterylevel = parseInt(batteryLevelStr)
console.log('battrey ' + batterylevel)
vanz.sendMessage(from, +battreylevel, {quoted: ftoko, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg","caption": "${setting.name}", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
        }
   /*     if (budy.startsWith(`${prefix}${command}`)) {
                  reply(` Command *${prefix}${command}* tidak ditemukan!`)
                  }*/
   vanz.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		console.log('battrey ' + batterylevel)
	})
				if (isGroup && budy != undefined) {
					console.log(budy)
				} else {
					console.log(color('@Ivanzz_', 'yellow'), color(sender.split('@')[0]))
				}
		}
		
	} catch (e) {
		console.log('%s', color(e, 'red'))
		// console.log(e)
	}
})

/*
INI SC ${setting.fake} GW
PANGGIL AJA IVANZZ
GW GAK JAGO BANGET TAPI SETIDAK NYA
UDAH PAKE BASE SENDIRI
YANG BILANG GW PAKE BASE MBB,
SAMA AJA LU KAGA NGEHARGAIN GW
INI CASE SAYA BUAT DENGAN PENUH KE IKHLASAN
UDAH SEGITU AJA, INI TQTO JAN DI HAPUS


THANKS TO :
- ANU TEAM
- DAN ORANG² BAIK YG UDAH KASIH GW SC+CODE
*/