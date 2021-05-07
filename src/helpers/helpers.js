export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  if (wrong.length >= 6) {
    return "lose";
  }
  // You win, if you enter all unique letters present in selected word
  if (correct.length === new Set(word).size) {
    return "win";
  }
  return "";
}
