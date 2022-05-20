{
  // 모든 타입 하나하나 만들 수 없다!!!! 💩
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number1 = checkNotNullBad(123);

  // 타입이 보장되지 않음! 💩 타입에 대한 정보 ❌
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number2 = checkNotNullAnyBad(123);

  // 제네릭! 👼
  function checkNotNull<T>(arg: T | null): T {
    // Type의 T
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number3 = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
