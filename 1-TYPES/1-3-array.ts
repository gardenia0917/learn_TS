{
    // Array
    const fruits: string[] = ['๐', '๐ง']; //โจ
    const scroes: Array<number> = [1, 2, 3];
    function printArray(fruits: readonly string[]) {
        // ๋ํ๊ฑฐ๋ ๋บ ์ ์๊ณ  ์ฝ๊ธฐ๋ง ๊ฐ๋ฅ ๋ถ๋ณ์ฑ ๋ณด์ฅ (๋ง์ด ์ฐ์)
    }

    // Tuple -> interface, type alias, class
    // ์๋ก ๋ค๋ฅธ ํ์์ ๋ฐ์ดํฐ๋ฅผ ๋ด์ ์ ์์
    // ๊ถ์ฅ โ , useState์ ๊ฐ์ ๊ฒฝ์ฐ๊ฐ tuple ์ ์ด ๊ฒฝ์ฐ
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;

}