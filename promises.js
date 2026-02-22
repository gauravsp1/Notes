console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise1");
});

Promise.resolve().then(() => {
  console.log("promise2");
});

console.log("End");

// Start
// End
// promise1
// promise2
// setTimeout

//////////////////////////////////////////////

console.log("Start");

setTimeout(() => {
  console.log("setTimeout1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise2");
  });

setTimeout(() => {
  console.log("setTimeout2");
}, 0);

console.log("End");

// Start
// End
// promise1
// promise2
// setTimeout1
// setTimeout2
//////////////////////////////////////////////
console.log("Start");

setTimeout(() => {
  console.log("setTimeout1");

  Promise.resolve().then(() => {
    console.log("promise1 inside setTimeout1");
  });
}, 0);

setTimeout(() => {
  console.log("setTimeout2");
}, 0);

Promise.resolve().then(() => {
  console.log("promise1");
});

console.log("End");

// Start
// End
// promise1
// setTimeout1
//promise1 inside setTimeout1
// setTimeout2
//////////////////////////////////////////////
async function foo() {
  console.log("foo start");
  await bar();
  console.log("foo end");
}

async function bar() {
  console.log("bar");
}

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

foo();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("End");

// Start
// foo start
// bar
// promise1
// End
// foo end
// promise2
// setTimeout
//////////////////////////////////////////////
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

// async1 start
// async2
// promise1
// async1 end
// promise2
// setTimeout

//////////////////////////////////////////////

async function async1() {
  console.log("async1 start");
  await new Promise((resolve) => {
    console.log("promise inside async1");
    resolve();
  });
  console.log("async1 end");
}

console.log("Start");

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("End");

// Start
// async1 start
// promise inside async1
// promise1
// End
// async1 end
// promise2
//////////////////////////////////////////////

async function foo() {
  console.log("foo start");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
  console.log("foo end");
}

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 500); // 0.5 second delay

foo();

console.log("End");

// Start
// foo start
// End
// setTimeout
// foo end
//////////////////////////////////////////////

async function first() {
  console.log("first");
}

async function second() {
  console.log("second");
}

async function third() {
  console.log("third");
  await first();
  await second();
  console.log("third after awaits");
}

third();
console.log("end");

// third
// first
// end
// second
// third after awaits
//////////////////////////////////////////////

console.log("Start");

new Promise((resolve) => {
  resolve();
})
  .then(() => {
    console.log("promise1");
    return new Promise((resolve) => {
      resolve();
    });
  })
  .then(() => {
    console.log("promise2");
  });

setTimeout(() => {
  console.log("setTimeout");
}, 0);

console.log("End");

// Start
// End
// promise1
// promise2
// setTimeout
//////////////////////////////////

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("End");

// Start
// async1 start
// async2
// promise1
// End
// async1 end
// promise2
// setTimeout

///////////////////////

async function one() {
  console.log("one start");
  await new Promise((resolve) => setTimeout(resolve, 200));
  console.log("one end");
}

async function two() {
  console.log("two start");
  await one();
  console.log("two end");
}

setTimeout(() => {
  console.log("timeout done");
}, 100);

two();

console.log("end of main");

// two start
// one start
// end of main
// timeout done
// one end
// two end

///////////////////////
async function fetchData() {
  return "Data fetched!";
}

async function processData() {
  const data = await fetchData();
  console.log(data);
}

setTimeout(() => {
  console.log("Timeout done");
}, 100);

processData();

console.log("Main thread");

// Main thread
// Data fetched!
// Timeout done

///////////////////////////////////

console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});

// begins
// promise 2
// setTimeout 1
// promise 1
// setTimeout 2
// dot then 1
// resolve 1
