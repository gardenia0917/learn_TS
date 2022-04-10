{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAT": 1, })
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    // 숫자는 처음 하나만 할당해도 되지만
    // 문자열은 어떤걸 해야 하는지 몰라서 하나하나 할당해야함
    // enum 이 꼭 필요한 경우가 아니면 타입을 쓰자!
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesdat'
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Satarday,
        Sunday
    }
    console.log(Days.Monday);
    let day = Days.Satarday;
    day = Days.Thursday;
    day = 1; // 에러가 없다?!?!
    console.log(day);
    
    let dayofweek: DaysOfWeek = 'Monday';
    dayofweek = 'Wednesdat'

}