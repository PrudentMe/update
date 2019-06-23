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

For price update add-ons, the following parameters are minimally necessary:

* pricedIn: The symbol that the commodity is priced in
* symbol: The symbol of the commodity for which the price is being updated

For example, this is an update for the ORP commodity priced in $:

```
{
   pricedIn: '$',
   symbol: 'ORP'
}
```