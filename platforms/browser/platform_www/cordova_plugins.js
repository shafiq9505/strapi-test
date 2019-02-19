cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-ios-faceid/www/CID.js",
        "id": "cordova-plugin-ios-faceid.cordova-plugin-ios-faceid",
        "pluginId": "cordova-plugin-ios-faceid",
        "clobbers": [
            "CID"
        ]
    },
    {
        "file": "plugins/cordova-plugin-biometric/www/Biometric.js",
        "id": "cordova-plugin-biometric.Biometric",
        "pluginId": "cordova-plugin-biometric",
        "clobbers": [
            "window.plugins.biometric"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-ios-faceid": "1.0.2",
    "cordova-plugin-biometric": "0.0.3"
}
// BOTTOM OF METADATA
});