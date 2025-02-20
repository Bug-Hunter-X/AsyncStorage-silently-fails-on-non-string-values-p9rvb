# React Native AsyncStorage Non-String Value Error

This repository demonstrates a common, yet often silently failing, error in React Native applications when using AsyncStorage.  AsyncStorage only accepts strings; attempting to store other data types (objects, numbers, etc.) results in data loss without clear error messages.

## Problem
The provided `bug.js` file shows an example of trying to store a JavaScript object in AsyncStorage.  This results in the object being incorrectly stored or lost entirely, leading to hard-to-detect bugs.  The application will run without explicit errors, but the expected data will not be available when attempting to retrieve it.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle this.  Before storing data in AsyncStorage, convert any non-string values (like objects or numbers) into a string representation using `JSON.stringify()`. When retrieving the data, parse it back into its original form using `JSON.parse()`. This ensures data integrity and avoids silent failures.