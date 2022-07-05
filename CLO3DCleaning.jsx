var documentGroupItems = app.activeDocument.groupItems

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
      // Count downwards to avoid issues with indexes
      var currentItem = currentGroup["pageItems"][j]
      if (currentItem.strokeColor.typename != "NoColor") {
        // Remove no stroke items
        if (currentItem.strokeColor.blue != 255) {
          // Remove blue lines
          if (currentItem.strokeColor.blue == 90) {
            // Sewing allowance to black
            currentItem.strokeColor.blue = 0
            currentItem.strokeColor.green = 0
            currentItem.strokeColor.red = 0
          }
          currentItem.move(newGroup, ElementPlacement.PLACEATEND)
          currentItem.strokeWidth = 2
        } else {
          currentItem.remove()
        }
      } else {
        currentItem.remove()
      }
    }
  }
}
