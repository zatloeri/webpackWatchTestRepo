## Problem

Watch mode does not work with 
```
    "webpack": "4.44.2",
    "webpack-cli": "4.0.0"
```
but works with
```
    "webpack": "4.44.2",
    "webpack-cli": "3.3.12"
```

There are two `package.json` files here:
- `package.json`
    - contains the not working set of deps
- `package.json.wroking`
    - contains the working set of deps

There is also a `swapDeps.sh` script for convenience
which will swap the `package.json` files and reinstall deps and name the unused one `package.json.working` or `package.json.notworking` depeneding on which one is being swapped in. 