#!/usr/bin/env bash


urlencode() {
    # urlencode <string>
	php -r "echo urlencode('$1');"	
}

FROM="/misc/resimages"
DIR="$(pwd)/misc/resimages/"


if [[ $1 = ""  ]]; then
	echo "usage: $0 [city] [partname]"
	exit 1
fi

CITY=$1
PART=$2

if [[ ! $PART = "" ]];then 
	for file in `ls ${DIR}/${CITY}/${PART}`; do
		file=`urlencode $file`
		echo "<img src=\"${FROM}/${CITY}/${PART}/${file}\" alt=\"${CITY}\" />"
	done
else
	for file in `ls ${DIR}/${CITY}/slideshow`; do
        	 file=`urlencode $file`
         	echo "<img src=\"${FROM}/${CITY}/slideshow/${file}\" alt=\"${CITY}\" />"
	done
fi
