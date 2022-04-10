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

}