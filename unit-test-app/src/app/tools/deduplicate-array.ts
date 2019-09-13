export function DeduplicateArray(arr: (string | number)[]): boolean {
  for (const curr of arr) {
    if (arr.lastIndexOf(curr) !== arr.indexOf(curr)) {
      return false;
    }
  }
  return true;
}

// 有问题的优化
// export function DeduplicateArray(arr: string[]): boolean {
//   const arrStr = arr.join('');
//   for (const curr of arr) {
//     if (arrStr.lastIndexOf(curr) !== arrStr.indexOf(curr)) {
//       return false;
//     }
//   }
//   return true;
// }

