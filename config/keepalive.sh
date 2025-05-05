#!/bin/bash
set -e

git config --global user.name "MT-Mods keepalive bot"
git config --global user.email "noreply@mt-mods.luanti.ch"

while `true`
do
    TS=$(date)

    for REPO in ${GITHUB_REPOS}
    do
        URL="https://user:${GITHUB_TOKEN}@github.com/${REPO}"
        DIR=$(basename ${REPO})
        test -d ${DIR} || {
            git clone ${URL}
        }
        cd ${DIR}
        git pull
        echo ${TS} > timestamp
        git add timestamp
        git commit -m "Keepalive update ${TS}"
        git push
        cd ..
    done
    sleep 30d
done
