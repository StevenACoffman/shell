#!/bin/bash
# Intended to just update the css. No images for you!

ln -s ../jstor/ui-assets/files/images/ ../images
ln -s ../jstor/ui-assets/files/shared/ ../shared
ln -s ../jstor/ui-assets/files/my-jstor/ ../my-jstor
ln -s ../jstor/ui-assets/files/my-jstor/images/ images
# You can do this yourself, or just uncomment it.


# cd ../jstor/ui-assets
# workon ui-assets
# invoke build_css legacy --no-compress
# cd ../../shell
cp ../jstor/ui-assets/files/my-jstor/css/my-jstor.css ./src/
cp ../jstor/ui-assets/files/legacy/css/legacy_v2.css ./src/
