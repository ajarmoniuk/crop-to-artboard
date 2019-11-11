/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

crop = function () {
    const myDocument = app.activeDocument;
    const myArtboard = myDocument.artboards[myDocument.artboards.getActiveArtboardIndex()];
    const artRect = myArtboard.artboardRect;
    const newRect = myDocument.pathItems
            .rectangle(artRect[0], artRect[1], artRect[2], -artRect[3]);
    for (var i = 0; i < myDocument.pathItems.length; ++i) {
        myDocument.pathItems[i].selected = true;
    }
    app.executeMenuCommand("group");
    app.executeMenuCommand("Live Pathfinder Crop");
    app.executeMenuCommand("expandStyle");
};