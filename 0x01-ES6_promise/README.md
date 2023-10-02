# ES6 Promises

This repository is a collection of resources and examples related to JavaScript Promises, specifically those introduced in ECMAScript 6 (ES6). Promises are a powerful tool for handling asynchronous operations in JavaScript, making your code more readable and maintainable.

## Table of Contents

- [Introduction to Promises](#introduction-to-promises)
- [Basic Usage](#basic-usage)
- [Chaining Promises](#chaining-promises)
- [Error Handling](#error-handling)
- [Async/Await](#asyncawait)
- [Try and Throw with Promises](#try-and-throw-with-promises)
- [Advanced Concepts](#advanced-concepts)


## Introduction to Promises

Promises are a way to handle asynchronous operations in JavaScript. They provide a more structured and readable way to work with asynchronous code compared to callbacks. Promises represent a value that might be available now, in the future, or never.

ES6 introduced the `Promise` class, making it easier to work with asynchronous operations in a more organized manner.

## Basic Usage

The `Promise` class in ES6 has two main states: `pending` and `settled`. A promise starts in the `pending` state and can transition to either `fulfilled` or `rejected`. Here's a basic example of creating and using a promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., fetching data or reading a file
  setTimeout(() => {
    const success = true; // Change this value to simulate success or failure
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed!");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Chaining Promises

One of the key advantages of promises is their ability to chain multiple asynchronous operations together. This allows you to create a sequence of actions that depend on the results of previous ones. Here's an example:

```javascript
const fetchUserData = () => {
  return fetch("https://api.example.com/user")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

fetchUserData()
  .then((userData) => {
    console.log("User data:", userData);
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
```

## Error Handling

Promises provide a consistent way to handle errors using the `.catch()` method. This allows you to centralize error handling for asynchronous operations. Here's an example:

```javascript
const fetchData = () => {
  return fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

fetchData()
  .then((data) => {
    console.log("Data:", data);
  });
```

## Async/Await

Async/await is a more modern and readable way to work with asynchronous operations, built on top of promises. It allows you to write asynchronous code that looks similar to synchronous code. Here's an example using async/await:

```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throwing the error for further handling
  }
};

fetchData()
  .then((data) => {
    console.log("Data:", data);
  });
```

## Try and Throw with Promises

You can also use `try` and `throw` to handle errors within promise handlers. Here's an example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Operation succeeded!");
    } else {
      try {
        throw new Error("Operation failed!");
      } catch (error) {
        reject(error);
      }
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Advanced Concepts

This repository also covers more advanced concepts related to promises, including:

- **Promise.all**: Combining multiple promises and waiting for all of them to resolve.
- **Promise.race**: Resolving or rejecting based on the first promise to settle.
- **Promise.allSettled**: Combining multiple promises and fullfils even if one of the promises rejects