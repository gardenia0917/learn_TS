{
    /**
     * Javascript
     * Primitive: number, stiring, boolean, bigint, symbol, null , undefined
     * Object: function, array... 
    */
    
    // number
    const num: number = 1; // 0.2, -4

    // string
    const str: string = 'hello'
    
    // boolean
    const boal: boolean = true; // false

    //undefined - 값이 있는지 없는지 결정 안됨
    let name: undefined; // 💩
    let age: number | undefined // 숫자 또는 undefined
    age = undefined;
    age = 1;
    function find(): number | undefined{
        return undefined
    }

    //null - 값이 비었다!
    let person: null; // 💩
    let person2: string | null;

    //unknown  💩 왠만하면 쓰지 말자
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello'

    // void 함수에서 아무것도 리턴하지 않는 경우 void
    // 생략가능 (회사 마다 다름)
    function print():void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined // 💩

    // never 
    /*  나는 리턴할 계획이 없으니 그점을 감안해서 코딩해!
    함수에서 절대 리턴되지 않는 경우에
    그것을 명시하기 위해 쓰임 */
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message); 
        while (true) {}
    }
    let neverEnding: never; // 💩

    // object
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {
        
    }
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({animal: 'cat'})
}