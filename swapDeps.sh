if [ -f "package.json.working" ]; then
    mv package.json package.json.notworking
    mv package.json.working package.json
else
    mv package.json package.json.working
    mv package.json.notworking package.json
fi

rm -r node_modules
rm yarn.lock
yarn
