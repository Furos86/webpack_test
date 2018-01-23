import {someClass} from "./someClass"

class test {

    test1(compiler: string) {
        console.log(`Hello from ${compiler}`);
        let someThing = new someClass("someWord");
    }
}

let tester = new test();
tester.test1("TypeScript");