var NEW_STROKE_WIDTH = 1

var documentGroupItems = app.activeDocument.groupItems
var clipGroups = Array()
// Separated array as `app.activeDocument.groupItems` will update
for (var i = 0; i < documentGroupItems.length; i++) {
  clipGroups.push(documentGroupItems[i])
}

cleanClipGroups(clipGroups)

function cleanClipGroups(groupItems) {
  for (var i = 0; i < groupItems.length; i++) {
    var currentGroup = groupItems[i]
    // Creating new groups to contain the paths
    var newGroup = app.activeDocument.groupItems.add()
    newGroup.name = "Piece " + (i + 1)
    var visitedNotches = Array()
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
        // Idea: Join consecutive sewing allowance segments
        currentItem.strokeColor.blue = 0
        currentItem.strokeColor.green = 0
        currentItem.strokeColor.red = 0
      }
      if (currentItem.strokeColor.red == 255) {
        // Remove duplicated notches
        if (arrayIncludes(currentItem.position, visitedNotches)) {
          currentItem.remove()
          continue
        } else {
          visitedNotches.push(currentItem.position)
        }
      }
      // Moving path to the new group
      currentItem.move(newGroup, ElementPlacement.PLACEATEND)
      currentItem.strokeWidth = NEW_STROKE_WIDTH
    }
    // alert(visitedNotches)
  }
}

function arrayIncludes(value, array) {
  // Custom function as ExtendScript doesn't have Array includes() functions
  for (i = 0; i < array.length; i++) {
    if (value[0] == array[i][0] && value[1] == array[i][1]) {
      return true
    }
  }
  return false
}
