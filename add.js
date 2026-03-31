function step1(value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(value + 1); 
    }, 1000);
  });
}

function step2(value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(value * 2);
    }, 1000);
  });
}

function step3(value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Final Value:", value);
      resolve(value);
    }, 1000);
  });
}