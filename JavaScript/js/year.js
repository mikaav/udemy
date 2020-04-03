function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not leap Year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not leap Year";
  }
}
