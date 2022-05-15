import { context, logging, math,u128, PersistentUnorderedMap, } from "near-sdk-as";
import { AccountId } from "../../utils";

export const theMenu = new PersistentUnorderedMap<i32, Menu>("theMenu");


@nearBindgen

export class Menu{
  
  id:u32
  owner: AccountId
  meal: string
  name: string
  ingredient:string
  constructor(meal:string,name:string,ingredient:string){
    this.id = math.hash32<string>(name+ingredient)
    this.owner= context.sender
    this.meal= meal
    this.name=name
    this.ingredient=ingredient
    
  }
  static createMenu(meal:string,name:string,ingredient: string): Menu{
    let menu = new Menu(meal,name,ingredient)
    theMenu.set(menu.id,menu)
    return menu
  }
  static updateMenu(id:u32,meal:string,name:string,ingredient: string): Menu{
    let menu = theMenu.getSome(id)
    menu.meal = meal
    menu.name = name
    menu.ingredient = ingredient
    theMenu.set(menu.id,menu)
    return menu
  }
  static showMenuById(id: i32): Menu {
    let menu = theMenu.getSome(id)
    return menu
  }  
  static showMenus(): Menu[] {
    let menus = theMenu.length
    let offset: u32= 0;
    return theMenu.values(offset,offset+menus) 

  }
}