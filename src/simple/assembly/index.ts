import {Menu, theMenu} from "./model";


export function createMenu(meal: string, name: string, ingredient: string): Menu {
   return Menu.createMenu(meal,name,ingredient);
}

export function updateMenu(id: u32,meal: string, name: string, ingredient: string): Menu {
   return Menu.updateMenu(id,meal,name,ingredient)
}  


export function showMenuById(id: i32): Menu {
   return theMenu.getSome(id)
}

export function ShowMenus(): Menu[] {
   return Menu.showMenus()
}
