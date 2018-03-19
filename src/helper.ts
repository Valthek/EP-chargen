import { stringify } from "querystring";

export default class Helpers{
    static isEmptyObject(object:Object)
    {
        let objectString = stringify(object);
        if (objectString.length > 0)
        {
            return false;
        }
        else
        {
            return true;
        }        
    }
}