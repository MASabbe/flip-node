// ref: https://rclayton.silvrback.com/custom-errors-in-node-js
"use strict";

class FlipError extends Error{
/**
 * Constructs a new FlipError instance.
 *
 * @param {string} message - The error message.
 * @param {number|null} [status=null] - The HTTP status code associated with the error.
 * @param {Object|null} [ApiResponse=null] - The API response object, if available.
 * @param {Object|null} [rawHttpClientData=null] - The raw HTTP client data, if available.
 *
 * This code snippet defines a custom error class called `FlipError`. It extends the built-in `Error` class in JavaScript. The constructor of the `FlipError` class takes four parameters: `message`, `status`, `ApiResponse`, and `rawHttpClientData`.
 *
 * - The `message` parameter is a string that represents the error message.
 * - The `status` parameter is an optional number that represents the HTTP status code associated with the error. It has a default value of `null`.
 * - The `ApiResponse` parameter is an optional object that represents the API response object, if available. It has a default value of `null`.
 * - The `rawHttpClientData` parameter is an optional object that represents the raw HTTP client data, if available. It has a default value of `null`.
 *
 * Inside the constructor, the `super(message)` line calls the constructor of the parent `Error` class with the `message` parameter. The `this.name` line sets the name of the error instance to the name of the class. The `this.httpStatusCode`, `this.ApiResponse`, and `this.rawHttpClientData` lines assign the corresponding parameters to instance properties of the error instance. Finally, the `Error.captureStackTrace(this, this.constructor)` line captures the stack trace and associates it with the error instance.
 *
 * This custom error class can be used to create instances of `FlipError` with additional information about the error, such as the HTTP status code, API response, and raw HTTP client data.
 */
  constructor(message,status=null,ApiResponse=null,rawHttpClientData=null){
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;

    this.httpStatusCode = status;
    this.ApiResponse = ApiResponse;
    this.rawHttpClientData = rawHttpClientData;
    // This clips the constructor invocation from the stack trace.
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = FlipError;