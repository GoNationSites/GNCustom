export default function (arr) {
  let isSequence;
  let limit = arr.length - 1;

  arr.forEach((el, idx) => {
    let current = arr[idx];
    let next = idx === limit ? 'none' : arr[idx + 1];

    if (
      current + 1 === next ||
      next === 'none' ||
      (current === 6 && next === 0)
    ) {
      isSequence = true;
    } else {
      isSequence = false;
    }
  });
  return isSequence;
}
