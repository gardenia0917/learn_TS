{
    // Array
    const fruits: string[] = ['🍑', '🧅']; //✨
    const scroes: Array<number> = [1, 2, 3];
    function printArray(fruits: readonly string[]) {
        // 더하거나 뺄 수 없고 읽기만 가능 불변성 보장 (많이 쓰임)
    }

    // Tuple -> interface, type alias, class
    // 서로 다른 타입의 데이터를 담을 수 있음
    // 권장 ❌ , useState와 같은 경우가 tuple 잘 쓴 경우
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;

}