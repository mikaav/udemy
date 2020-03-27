var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert(
  "You have written " +
    tweetCount +
    " characters, you have " +
    (148 - tweetCount) +
    " characters remaining."
);
