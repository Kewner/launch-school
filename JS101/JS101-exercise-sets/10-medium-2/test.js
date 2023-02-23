function strIncludesElement(str, arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let element = arr[idx];
    if (str.includes(`(${element})`)) return true;
  }

  return false;
}

console.log(strIncludesElement('hello (n) asshole', ['no', 've']));