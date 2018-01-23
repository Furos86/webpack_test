
export class someClass{

    constructor(someString:string) {
        console.log(someString);
        this.someFunction(someString);
    }


    someFunction(someString:string){
        console.log(`someFunction ${someString}`);
    }
}