var documentGroupItems = app.activeDocument.groupItems
const NEW_STROKE_WIDTH = 1
var clipGroups = Array()
// Separated array as `app.activeDocument.groupItems` will update
for (var i = 0; i < documentGroupItems.length; i++) {
  clipGroups.push(documentGroupItems[i])
}

releaseClipGroups(clipGroups)

function releaseClipGroups(groupItems) {
  for (var i = 0; i < groupItems.length; i++) {
    var currentGroup = groupItems[i]
    var newGroup = app.activeDocument.groupItems.add()
    newGroup.name = "Piece " + (i + 1)
    for (var j = currentGroup.pageItems.length - 1; j >= 0; j--) {
      var currentItem = currentGroup["pageItems"][j]
      if (currentItem.strokeColor.typename == "NoColor") {
        // Removing pathes without strokes (Clip paths, fabric color)
        currentItem.remove()
        continue
      }
      if (currentItem.strokeColor.blue == 255) {
        // Removing blue lines
        currentItem.remove()
        continue
      }
      if (currentItem.strokeColor.blue == 90) {
        // Changing stroke color of sewing allowance to black
        currentItem.strokeColor.blue = 0
        currentItem.strokeColor.green = 0
        currentItem.strokeColor.red = 0
      }
      // Moving path to the new group
      currentItem.move(newGroup, ElementPlacement.PLACEATEND)
      currentItem.strokeWidth = NEW_STROKE_WIDTH
    }
  }
}
