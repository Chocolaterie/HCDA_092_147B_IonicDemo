export class Movie {
    public title? : String;
    public description? : String;

    constructor(_title : String, _description: String){
        this.title = _title;
        this.description = _description;
    }
}