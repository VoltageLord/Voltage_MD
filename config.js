//Voltage_MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "Voltage_MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9DeVl4dm9LMWpPbFBOeGxrZjBOS3VuMWhFNlBPUFJCM0xtN0tUcXBsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2JWeVdMQWZmY2NnMzdmTE1iVkpnRW5ZbWhSZnJmNE1OV24wenR0Vi9TZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUHdNQ21LZFdPay92UEc2NnVxSkwwNW1JeWhlOHlyUWtuZ20rQzBzcTFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVDFuSTgzQzhjWFpSNHhvTlNFelpYYStybUNSM0ZQdmo1bHZnMHQrejJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNb01xOXRUWWVJZlY3a1JLOXRKNGFhc2d2ekIraDZtNjZFSVRXMWFhVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk3YTR0T2kyWS9ObWRldml1SlJoZjg0OGNucnA2KzRQOTZtL29lcDJOQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERmcndDYnF6bmJ6ckp5MlBtZWNaalpkSGk5dmRYS1hDbmZVRWJqUmZXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDFHZXRrQXdmZHg3VGVHL1NzM1d0enIwRzViUUUrcThwelA0UVBoZUdCVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdUeWpoTmVMQUlqdFNqQW92TnFseFRUeHVndldGVHJOWnBCekJTT1kxMDQyTHJKUEgyczNKOVNYd082czA3aG84WXRBNXEvMmpmUlRvQ2dNem1IQmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6ImI2OFRPSVBRSHRVTHBzZzM3aU1hZ3F4WWFSQ0RIL2ZZZGVEd2t5MGl3c2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iko5OXQ0M2hFVHJLaDBsRlJ5SlJoMmciLCJwaG9uZUlkIjoiMTg4YWIwY2QtMTgyZi00Mjc1LWE3YTEtZWEyNWM2YWFkNGVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJFdW1kWDk3dkIyekhZRmduV2w2YlcvVEllRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUkdoZlExamtnQ0tBZlpsYzl5cUpFZitmQXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEpHRTdDRFMiLCJtZSI6eyJpZCI6IjIzNDgxNjg4NTU3OTE6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmVm5ZUUVFTlhHMTdVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFPZ2hiU1VwUGwyUVBKZDZPclozOXhka21zZ1c1ZTVqZms0bVh6YkdWaW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpxNDgvU2tXby9temw3WUNNa28vcDlsRy8wckJXU0Y1ZVZpQmdjalVjVzJiQTZCdTlLV2NKWkF4Q2pZQkJRcXBKM0prWXI2UXVOaVorTkJiS0s3VURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyRnZhRkNTMVhKYkRsQ3NQWDd0MVE4NzBaN3RHYnFTeVhhbVc3UWZ6VWs3NEIzQjhjRXBVV0Z4NmlDUGcyajI2cDlpRENaendEMnFpRElCZTdFbXppZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjg4NTU3OTE6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFRvSVcwbEtUNWRrRHlYZWpxMmQvY1haSnJJRnVYdVkzNU9KbDgyeGxZcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzE5NjI2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPY0YifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "2349155298855";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "2349155298855")
  : "2349155298855";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/57c97c7542a9e9d2f8c52.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/57c97c7542a9e9d2f8c52.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "BRAND PRODUCT Voltage Lord",
  author: process.env.PACK_AUTHER || "Voltage Lord",
  packname: process.env.PACK_NAME || "Voltage Lord",
  botname: process.env.BOT_NAME || "Voltage_MD",
  ownername: process.env.OWNER_NAME || "Voltage⚡Lord",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "odunayoayinla23@gmail.com";
global.location = "Lagos";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/VoltageLord/Voltage_MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349155298855 , 2347045674902"
  ";
global.msg_style = process.env.STYLE || """;
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://gnime-v2.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
