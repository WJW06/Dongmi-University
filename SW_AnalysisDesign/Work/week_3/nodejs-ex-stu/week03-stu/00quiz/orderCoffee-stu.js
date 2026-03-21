// ./00quiz/orderCoffee-stu.js
// [요구사항] 다음 함수 호출이 실행가능하도록 함수를 완성하시오
const orderCoffee = (coffee, ms) => {
    setTimeout( () => {
         console.log(`${coffee} 제조완료`);
    }, ms);
}

orderCoffee('아메리카노', 4000);
orderCoffee('레몬티', 2000);
orderCoffee('아이스커피', 3000);