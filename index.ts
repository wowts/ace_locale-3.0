import { LuaObj } from "@wowts/lua";

export class AceLocale {
    public GetLocale(name: string, optional: boolean): LuaObj<string> {
        return {};
    }
}

const lib = new AceLocale();
export default lib;
