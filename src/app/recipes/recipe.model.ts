// Modla is bascially a typescript file

export class Recipe {
    public name: string;  //public keyword is an access modifier tht specifies the visibility of class members. it means it can be used outside the class where it is defined
    public description: string;
    public imagePath: string;
    constructor(name:string, desc:string, imagePath:string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;

    } 

}