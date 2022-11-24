const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['212645830816']
global.OwnerNumber = ['212645830816']
global.ownertag = ['212645830816']
global.BotName =  "❄️𝐍𝐞𝐫𝐨-𝐜𝐡𝐚𝐧❄️"
global.packname = "❄️ 𝐍𝐞𝐫𝐨 ❄️"
global.author = "❄️ 𝐁𝐨𝐭 ❄️"
global.OwnerName = "⚡ 𝐝𝐚𝐛𝐢-𝐒𝐚𝐦𝐚 ⚡"
global.BotSourceCode = "https://instagram.com/m_o_s_71?igshid=YmMyMTA2M2Y="
global.SupportGroupLink = "https://www.tiktok.com/@dabi2392?_r"
global.sessionName = "session"

// Prefix //
// 🎗don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['.'] 


global.location = "bihar, India"
global.reactmoji = "🌺"
global.themeemoji = "⚜️"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://youtu.be/cVleA7ClRqQ"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: '*『 تم......❄️ 』*',
    useradmin: '*『 الامر دا خاص بي المشرفين فقط!❄️ 』*',
    botadmin: '*『 أحتاج الإشراف لتفعيل الأمر❄️ 』*',
    botowner: '*『 الأمر هاذا خاص بي المالك❄️ 』*',
    grouponly: '*『 الأمر هاذا في الجروبات فقط❄️』*',
    privateonly: '*『 الميزة هذه في خاص فقط❄️』*',
    botonly: '*『 الميزة هذه للبوت فقط️❄️』*',
    waiting: '*『 أنتضر شوي من فضلك......❄️』*',
    nolink: '*『 أين هو الرابط ؟ ❄️️』*',
    error: '『 ..ايرور!❄ 』',
    banned: '『 انت محظور من استخدام البوت اتواصل مع المطور لالغاء حظرك!❄ 』',
    bangc: '*『أعتذر لقد تم منع استخدامي في هذه المجموعة🌫️❄️️』*',
    nonsfw: '『 اكتب المجهوله واختار فتح ثم اكتب .القائمه-المجهوله!❄ 』'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
