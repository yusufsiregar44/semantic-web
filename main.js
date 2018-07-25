var submitLogin = document.getElementById("submit");

submitLogin.onclick = function() {
  var keyValue = document.getElementsByName("key")[0].value;

  if (typeof keyValue[0] === "string" && ((keyValue[1] * keyValue[2]) % 2 === 0)) {
    alert("Key Confirmed!");
    return false;
  } else if (keyValue === "admin1234") {
    let homerCount = sessionStorage.homerCount;
    let spongebobCount = sessionStorage.spongebobCount;
    alert(`Homer: ${homerCount}\nSpongeBob: ${spongebobCount}`);
    sessionStorage.homerCount = 0;
    sessionStorage.spongebobCount = 0;
    return false;
  } else {
    alert("Invalid Key!");
    return false;
  }
};

var voteClickHomer = document.getElementsByClassName('votebtn')[0];

voteClickHomer.onclick = function() {
  // if (typeof(Storage) !== "undefined") {
    if (sessionStorage.homerCount) {
      sessionStorage.homerCount = Number(sessionStorage.homerCount) + 1;
    } else {
      sessionStorage.homerCount = 1;
    }
  // }
  console.log("homer -> " + sessionStorage.homerCount);
  console.log("spongebob -> " + sessionStorage.spongebobCount);
  alert("Thank you for voting");
  window.location = "index.html";
}

var voteClickSpongebob = document.getElementsByClassName('votebtn')[1];

voteClickSpongebob.onclick = function() {
  // if (typeof(Storage) !== "undefined") {
    if (sessionStorage.spongebobCount) {
      sessionStorage.spongebobCount = Number(sessionStorage.spongebobCount) + 1;
    } else {
      sessionStorage.spongebobCount = 1;
    }
  // }
  console.log("homer -> " + sessionStorage.homerCount);
  console.log("spongebob -> " + sessionStorage.spongebobCount);
  alert("Thank you for voting");
  window.location = "index.html";
}
