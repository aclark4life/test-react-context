test-react-context
================================================================================

::

    alexclark@alexclarks-Air Developer/test-react-context (main *) » make i
    /Library/Developer/CommandLineTools/usr/bin/make npm-install
    npm install

    up to date, audited 98 packages in 262ms

    7 packages are looking for funding
      run `npm fund` for details

    found 0 vulnerabilities
    git add package-lock.json
    alexclark@alexclarks-Air Developer/test-react-context (main *) » make b
    npm run build

    > test-react-context@1.0.0 build
    > babel src -d dist --presets @babel/preset-react

    Successfully compiled 4 files with Babel (64ms).
    alexclark@alexclarks-Air Developer/test-react-context (main *) » make s
    npm run start

    > test-react-context@1.0.0 start
    > node run.js

    {
      '$$typeof': Symbol(react.element),
      type: [Function: MyProvider],
      key: null,
      ref: null,
      props: { children: [ [Object], [Object] ] },
      _owner: null,
      _store: {}
    }
