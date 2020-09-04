// versão recursiva
const fibo = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

fibo(5);

//

// function fibonacci(num){
//     var a = 1, b = 0, temp;

//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }

//     return b;
//   }

//Memoization

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}
