#!/usr/bin/env bash

for file in ./profile_icon.img/*.png; do

    icon_base64=$(cat $file | base64)
    filename=${file##*/}
    filename=$(echo $filename | sed 's/\.[^.]*$// ')
    echo ".status-icon-$filename"{ >> profile_icon.css
    echo "    content:url(data:image/png;base64,$icon_base64);" >> profile_icon.css
    echo "} " >> profile_icon.css
done