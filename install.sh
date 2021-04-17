#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs -y
apt-get install ffmpeg libwebp -y
apt-get install wget -y
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i
npm audit fix
npm start