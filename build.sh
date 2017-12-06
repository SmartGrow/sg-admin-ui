#!/usr/bin/env bash


build() {

    echo -e "\n>> Cleaning previous build...\n"
    rm --verbose --recursive --force build/

    echo -e "\n>> Building...\n"
    npm run build

    if [ $? -eq 0 ]; then
        echo -e "\n>> Build succeeded.\n"

        echo -e "\n>> Discarding old artifacts on sg-arduino-controller...\n"
        rm --verbose --recursive --force ../sg-arduino-controller/app/public/

        echo -e "\n>> Copying new artifacts to sg-arduino-controller...\n"
        cp --verbose --recursive build/ ../sg-arduino-controller/app/
        mv --verbose ../sg-arduino-controller/app/build/ ../sg-arduino-controller/app/public/

        echo -e "\n>> Build completed!\n"
        exit 0
    else
        echo -e "\n>> Build failed."
        exit -1
    fi
}

cat <<EOF

    This script will create an optimized production build for sg-admin-ui.
    It'll also update sg-arduino-controller public dir (app/public) with the generated artifacts. 

EOF

read -p ">> Proceed? (Y/n): " PROCEED

case ${PROCEED^^} in
    Y) build ;;
    N|*) echo -e "\n>> Aborted.\n"; exit 0 ;;
esac