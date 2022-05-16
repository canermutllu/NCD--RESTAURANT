# Restaurant menu using near contract 

## Login

```
near login
```

## Build and Deploy

Clone the repo with:
```
git@github.com:canermutllu/NCD_project_restaurant.git
```

```
yarn

yarn build:release

near dev-deploy ./build/release/simple.wasm
```

export $CONTRACT
```
export CONTRACT=<YOUR_DEV-ID>
```

## Commands

Create a menu:
```
near call $CONTRACT createMenu '{"meal":"<meal name>","name":"<food name>", "ingredient":"<ingredient of food>"}' --accountId <YOUR_TESTNET_ACCOUNT>
```
Show all menus:

```
near call $CONTRACT ShowMenus '{}' --accountId <YOUR_TESTNET_ACCOUNT>
```
Update a menu:
```
near call $CONTRACT updateMenu '{"id":id,"meal":"<meal name>","name":"<food name>", "ingredient":"<ingredient of food>"}' --accountId <YOUR_TESTNET_ACCOUNT>
```

Show menu by id:
```
near call $CONTRACT showMenuById '{"id":id}' --accountId <YOUR_TESTNET_ACCOUNT>
```
















