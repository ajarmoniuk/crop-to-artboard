/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';
    
    const csInterface = new CSInterface();
    const version = 27;
    
    function init() {
        
        themeManager.init();

        $("#btn_test").click(function () {
            // alert('version ' + version);
            const jsxPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/hostscript.jsx";
            csInterface.evalScript('$.evalFile("' + jsxPath + '")', function(result) {
                console.log('Result: ' + result);
            });
            // const extensionId = csInterface.getExtensionID();
            // location.reload();
            // csInterface.closeExtension();
            // csInterface.requestOpenExtension(extensionId);
        });
    }
    
    init();
    
}
());

