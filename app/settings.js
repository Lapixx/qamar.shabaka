var readCookie = require("./lib/cookies").read;
var settings = require("./lib/settings");

window.readCookie = readCookie;
window.setMethod = settings.setMethod;
window.setHanafi = settings.setHanafi;
window.setHighlats = settings.setHighlats;
window.setLanguage = settings.setLanguage;