{
    /**
     * Type Assertions 💩
     */

    function jsStrFunc(): any {
        return 'hi';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers()!;
    numbers.push(2) // undefined일 수도 있어서 경고를 준다. 😨
    
    const button = document.querySelector('class')
    if (button) {
        button.nodeValue;
    }
}