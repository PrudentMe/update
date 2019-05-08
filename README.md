@prudent/update-addon
======================

Server for Prudent update add-ons.

This is useful for Prudent add-on developers.

Installing
==========

```
$ npm install --save @prudent/update-addon
```

Usage
=====

```
require('@prudent/update-addon').start(function(params) {
    //Place parsing functionality here
    //When parsed, output transactions to stdout
}, {
    param1: 'SOME PARAM',
    param2: 'MORE PARAM'
});
```