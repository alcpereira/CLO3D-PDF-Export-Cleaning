# CLO3D-PDF-Export-Cleaning
Illustrator script to clean CLO3D's PDF Export

# What does the script do?
- Release and remove Clipping Masks
- Delete all the Paths with no strokes: Clip paths, Fabric fill (duplicate of the fabric contour)
- Delete Blue lines (yet to identify, but it seems like a reference when using Pattern Outline)
- Corrects the Sewing Allowance color (grey to black)
- Sets the Stroke width to 1pt (can be changed)
- Remove duplicated notches

# How to install?
## Easy install
1. Download the [file] (https://raw.githubusercontent.com/alcpereira/CLO3D-PDF-Export-Cleaning/main/CLO3DCleaning.jsx)
2. Save it into the Scripts folder (see below)
3. Run from Illustrator: File > Script > CLO3DCleaning

## Script folders
- Windows: C:\Program Files\Adobe\Adobe Illustrator XXX\Presets\yy_YY\Scripts
- Mac: /Applications/Adobe Illustrator XXX/Presets/yy_YY/Scripts

Note: The folder path depends on your version of Illustrator and its language

## Add Shortcut
1. Open Actions window in Illustrator: Window > Actions
2. Click on the Context Dialog Menu (≡)
3. Click on New Action and choose a Function Key
4. With the new action created, click again on the Context Dialog Menu (≡) and click on "Insert Menu Item"
5. Find the "CLO3DCleaning" by typing it
6. Voilà! Use your new shortcut :)
