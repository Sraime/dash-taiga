
export class Member {

    private _name : string;
    private _role : string;
    private _points : number;

    constructor(name : string, role : string, points : number){
        this._name = name;
        this._points = points;
        this._role = role;
    }

    public get name(){
        return this._name;
    }

    public get role(){
        return this._role;
    }

    public get points(){
        return this._points;
    }
}