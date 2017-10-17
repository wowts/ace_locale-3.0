import { LuaObj } from "@wowts/lua";
export declare class AceLocale {
    GetLocale(name: string, optional: boolean): LuaObj<string>;
}
declare const lib: AceLocale;
export default lib;
