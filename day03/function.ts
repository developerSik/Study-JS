// JS는 오버로딩을 지원하지 않는다.

// typescript 설치 명령어
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행) <- 오류발생시 실해웨
// tsc --init



// let result = add(1, 2, 3);
// let result = add(1, 2);
// console.log(result);

let result: number = 10;

// 가변인자
intro("정상식", "남자", "26살", "수원");

function intro(name: string, ...args: any) {
    console.log(`이름: ${name}`);
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}

// function add(...numbers){
//     let result = 0;
//     for(let i=0; i<numbers.length; i++){
//         result += numbers[i];
//     }
//     return result;
// }

// let result = add(1, 2, 3);
// let result = add(1, 2);
// console.log(result);

// function add(number1, number2){
//     return number1 + number2;
// }

// function add(number1, number2, number3 = 0){
//     return number1 + number2 + number3;
// }
