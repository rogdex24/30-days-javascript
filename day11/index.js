//  Day 11: Promises & Async-awaits
// Tasks/Activities

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 seconds have been passed!");
    }, 2000);
  });
  promise1.then((msg) => {
    console.log(msg);
  });
  
  // Task 2: Create a promise that rejects with an error message after 2 second timeout and handle the error using .catch()
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("errored out after 2 sec");
    }, 2000);
  });
  
  promise2
    .then((msg) => console.log(msg))
    .catch((error) => {
      console.log(error);
    });
  
  // Activity 2: Chaining Promises
  // Task 3: Create a sequence of promise that stimulate fetching data from a server. Chain the promises to log messages in a specific order
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched from server 1");
    }, 1000);
  });
  
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched from server 2");
    }, 1500);
  });
  
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data processed successfully");
    }, 500);
  });
  
  promise3
    .then((msg) => console.log(msg))
    .then(() => promise4)
    .then((msg) => console.log(msg))
    .then(() => promise5)
    .then((msg) => console.log(msg));
  
  // ----------------------------------------------------------------------------------------------------
  
  // Activity 3: Using Async/Await
  // Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
  const promiseToResolve = new Promise((resolve, reject) => {
    resolve("Promise has been resolved!");
  });
  
  const AsynFunc = async () => {
    const resolvedValue = await promiseToResolve;
    console.log("resolved value >>>", resolvedValue);
  };
  AsynFunc();
  
  // Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message
  const promiseToReject = new Promise((resolve, reject) => {
    reject("Error: Promise has not been resolved❌");
  });
  
  const handleError = async () => {
    try {
      const promiseValue = await promiseToReject;
      console.log("Success value >>>", promiseValue);
    } catch (error) {
      console.log("Error >>>", error);
    }
  };
  handleError();
  
  // ----------------------------------------------------------------------------------------------------
  
  // Activity 4: Fetching Data from an API
  // Task 6: Use the 'fetch' API to get data from a public API and log the response data to the console using promises
  const fetch_DataFrom_PublicAPI_promises = () => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts").then((res) =>
      res
        .json()
        .catch((error) => console.log("Erro1 >>>", error))
        .then((data) =>
          data.data.data.forEach((product) =>
            console.log("Products >>>", product.title),
          ),
        )
        .catch((error) => console.log("Error2 >>>", error)),
    );
  };
  fetch_DataFrom_PublicAPI_promises();
  
  // Task 7: Use the fetch API to get a data from a public API and log the response data to the console using async/await
  
  const fetchDataFunction = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts",
      );
      const data = await res.json();
      const arr = data.data.data;
  
      arr.forEach((product) => console.log("Products >>>", product.title));
    } catch (error) {
      console.log("error fetch", error);
    }
  };
  fetchDataFunction();
  
  // ----------------------------------------------------------------------------------------------------
  
  // Activity 5: Concurrent Promises
  // Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values
  const allPromise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved!");
  });
  const allPromise2 = new Promise((resolve, reject) => {
    resolve(4);
  });
  const allPromise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 resolved!");
  });
  const allPromise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "foo");
  });
  Promise.all([allPromise1, allPromise2, allPromise3, allPromise4]).then(
    (resolvedValues) => console.log(resolvedValues)
    );
  
  // Task 9: Use 'Promise.race' to log the value of the first promise that resolves among multiple
  
  function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfill") {
          resolve(value);
        } else {
          reject(new Error(value));
        }
      }, time);
    });
  }
  
  const p1 = sleep(500, "one", "fulfill");
  const p2 = sleep(100, "two", "fulfill");
  
  Promise.race([p1, p2]).then((value) => {
    console.log(value); // "two"
  });