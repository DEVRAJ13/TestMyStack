import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  reason: string;
  selectedAnswer?: string;
  showAnswer?: boolean;
  isCorrect?: boolean;
}



@Component({
  selector: 'app-main-content',
  imports: [CommonModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
  // options = ['JavaScript', 'C', 'C++', 'All of the above'];
  // correctAnswer = 'All of the above';
  // selectedAnswer = '';
  // showAnswer = false;
  // isCorrect = false;

  // selectAnswer(option: string) {
  //   this.selectedAnswer = option;
  //   this.showAnswer = true;
  //   this.isCorrect = option === this.correctAnswer;
  // }
  questions = [
  {
    question: 'What is the main purpose of the Node.js event loop?',
    options: [
      'To execute synchronous code only',
      'To manage asynchronous operations and callbacks',
      'To compile JavaScript code',
      'To handle only HTTP requests'
    ],
    correctAnswer: 'To manage asynchronous operations and callbacks',
    reason: 'The event loop is the core mechanism in Node.js that allows non-blocking I/O by managing asynchronous tasks and executing callbacks.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which of the following is NOT part of the Node.js event loop phases?',
    options: [
      'Timers',
      'Pending Callbacks',
      'Microtasks',
      'Compilation'
    ],
    correctAnswer: 'Compilation',
    reason: 'Node.js event loop phases include timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Compilation is not part of it.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'In Node.js, what is process.nextTick() used for?',
    options: [
      'To execute a callback immediately after the current operation',
      'To schedule a callback after setTimeout',
      'To block the event loop',
      'To stop execution'
    ],
    correctAnswer: 'To execute a callback immediately after the current operation',
    reason: 'process.nextTick() schedules a callback to run after the current operation but before the event loop continues, giving higher priority than setImmediate or setTimeout.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which module in Node.js is used to handle file system operations?',
    options: ['http', 'fs', 'os', 'path'],
    correctAnswer: 'fs',
    reason: 'The "fs" module provides APIs for interacting with the file system like reading, writing, and deleting files.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between setImmediate() and process.nextTick()?',
    options: [
      'Both execute immediately',
      'setImmediate() runs before I/O events, process.nextTick() runs after',
      'process.nextTick() runs before I/O events, setImmediate() runs after',
      'They are identical'
    ],
    correctAnswer: 'process.nextTick() runs before I/O events, setImmediate() runs after',
    reason: 'process.nextTick() executes callbacks before the next event loop tick, while setImmediate() executes callbacks after the current I/O event.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which object in Node.js is used to expose environment variables?',
    options: ['global', 'process.env', 'os.env', 'config'],
    correctAnswer: 'process.env',
    reason: 'process.env provides access to environment variables for configuration and secrets management in Node.js applications.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does the cluster module in Node.js allow?',
    options: [
      'Running multiple Node.js versions',
      'Spawning child processes to utilize multiple CPU cores',
      'Bundling modules together',
      'Managing asynchronous tasks'
    ],
    correctAnswer: 'Spawning child processes to utilize multiple CPU cores',
    reason: 'The cluster module enables Node.js to create multiple worker processes that share the same server port, improving scalability on multi-core systems.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which stream type is NOT supported in Node.js?',
    options: [
      'Readable',
      'Writable',
      'Duplex',
      'Compile'
    ],
    correctAnswer: 'Compile',
    reason: 'Node.js supports Readable, Writable, Duplex, and Transform streams. "Compile" is not a stream type.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the default scope of variables declared in Node.js modules?',
    options: [
      'Global scope',
      'Function scope',
      'Module scope',
      'Block scope only'
    ],
    correctAnswer: 'Module scope',
    reason: 'In Node.js, variables and functions declared inside a module are scoped to that module only, not globally.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which built-in module is commonly used to create an HTTP server in Node.js?',
    options: ['url', 'http', 'net', 'express'],
    correctAnswer: 'http',
    reason: 'The "http" module provides APIs to create and handle HTTP servers and clients.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between require() and import in Node.js?',
    options: [
      'require() is synchronous, import is asynchronous',
      'require() works only in ES modules, import works in CommonJS',
      'They are exactly the same',
      'require() is asynchronous, import is synchronous'
    ],
    correctAnswer: 'require() is synchronous, import is asynchronous',
    reason: 'require() is CommonJS and loads modules synchronously, while import is ES6 syntax and supports asynchronous loading in modern Node.js versions.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which object represents the current module in Node.js?',
    options: ['exports', 'require', 'module', 'process'],
    correctAnswer: 'module',
    reason: 'The "module" object represents the current module, with properties like module.exports for exposing functionality.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the purpose of Buffer in Node.js?',
    options: [
      'To buffer network requests',
      'To handle binary data directly',
      'To store cached HTTP responses',
      'To improve database performance'
    ],
    correctAnswer: 'To handle binary data directly',
    reason: 'Buffers in Node.js are used to handle binary data, especially useful when dealing with streams, files, or network sockets.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which of the following statements about Node.js streams is true?',
    options: [
      'Streams can only read data',
      'Streams can only write data',
      'Streams can read, write, or transform data',
      'Streams are deprecated'
    ],
    correctAnswer: 'Streams can read, write, or transform data',
    reason: 'Node.js supports four types of streams: Readable, Writable, Duplex, and Transform, making streams versatile for I/O operations.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between spawn() and fork() in Node.js child processes?',
    options: [
      'spawn() is used for JavaScript, fork() for system commands',
      'fork() creates a new Node.js process with IPC, spawn() runs any command',
      'Both are identical',
      'spawn() is asynchronous, fork() is synchronous'
    ],
    correctAnswer: 'fork() creates a new Node.js process with IPC, spawn() runs any command',
    reason: 'spawn() launches any system command, while fork() specifically spawns a new Node.js process with inter-process communication (IPC).',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you prevent blocking the event loop in Node.js?',
    options: [
      'By using synchronous methods',
      'By using asynchronous, non-blocking I/O operations',
      'By running everything in global scope',
      'By disabling garbage collection'
    ],
    correctAnswer: 'By using asynchronous, non-blocking I/O operations',
    reason: 'Blocking the event loop happens with CPU-intensive or sync I/O tasks. Using async methods keeps Node.js responsive.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which statement about async/await in Node.js is correct?',
    options: [
      'await can be used outside async functions',
      'async functions always return a promise',
      'await blocks the entire process',
      'async/await replaces callbacks completely'
    ],
    correctAnswer: 'async functions always return a promise',
    reason: 'In Node.js, async functions return promises. await pauses execution within an async function until the promise resolves.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the role of the package-lock.json file?',
    options: [
      'It locks your Node.js version',
      'It ensures consistent dependency versions across environments',
      'It stores runtime logs',
      'It manages environment variables'
    ],
    correctAnswer: 'It ensures consistent dependency versions across environments',
    reason: 'package-lock.json records the exact dependency tree, ensuring the same versions are installed across environments.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js global object is used to handle exceptions not caught elsewhere?',
    options: ['process', 'global', 'uncaughtException', 'errorHandler'],
    correctAnswer: 'process',
    reason: 'The process object has event listeners like process.on("uncaughtException") and process.on("unhandledRejection") to handle runtime errors.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'In Node.js, what does the "os" module provide?',
    options: [
      'Operating system-related utility methods and properties',
      'Database connections',
      'Only network request handling',
      'Thread pool management'
    ],
    correctAnswer: 'Operating system-related utility methods and properties',
    reason: 'The "os" module provides system-level information like CPU, memory, architecture, and network interfaces.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How does require.cache work in Node.js?',
    options: [
      'It clears old logs',
      'It caches loaded modules for performance',
      'It caches network requests',
      'It prevents garbage collection'
    ],
    correctAnswer: 'It caches loaded modules for performance',
    reason: 'Node.js stores required modules in require.cache so repeated require calls don’t reload the module from disk.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the default thread pool size in libuv used by Node.js?',
    options: ['1', '2', '4', '8'],
    correctAnswer: '4',
    reason: 'By default, libuv provides a thread pool of size 4 for async tasks like file I/O, DNS, and crypto. It can be increased via UV_THREADPOOL_SIZE.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which method is used to create a custom event in Node.js?',
    options: [
      'process.emit()',
      'events.emit()',
      'EventEmitter.emit()',
      'customEvent.fire()'
    ],
    correctAnswer: 'EventEmitter.emit()',
    reason: 'Custom events in Node.js are created using EventEmitter, and emit() is used to trigger them.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How does Node.js handle multiple requests on a single thread?',
    options: [
      'By blocking one request until completion',
      'By creating new threads for each request',
      'By using an event-driven, non-blocking I/O model',
      'By queueing requests sequentially'
    ],
    correctAnswer: 'By using an event-driven, non-blocking I/O model',
    reason: 'Node.js can handle thousands of requests on a single thread using the event loop and async I/O operations.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is middleware in Express.js?',
    options: [
      'A function with access to request, response, and next()',
      'A global variable in Node.js',
      'A thread handler',
      'A database connection manager'
    ],
    correctAnswer: 'A function with access to request, response, and next()',
    reason: 'Middleware in Express.js are functions that can modify requests and responses, or pass control to the next middleware using next().',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which HTTP method is idempotent?',
    options: ['POST', 'PUT', 'PATCH', 'CONNECT'],
    correctAnswer: 'PUT',
    reason: 'PUT is idempotent because multiple identical requests result in the same resource state, unlike POST which creates new resources.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between res.send() and res.json() in Express?',
    options: [
      'res.json() converts data to JSON, res.send() sends data as-is',
      'res.send() is only for strings, res.json() only for objects',
      'res.send() blocks the request',
      'res.json() is deprecated'
    ],
    correctAnswer: 'res.json() converts data to JSON, res.send() sends data as-is',
    reason: 'res.send() can send strings, buffers, or objects (converted internally). res.json() specifically serializes JavaScript objects into JSON format.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you improve performance of a Node.js application?',
    options: [
      'Avoid async operations',
      'Use clustering and load balancing',
      'Use synchronous APIs',
      'Disable caching'
    ],
    correctAnswer: 'Use clustering and load balancing',
    reason: 'Node.js apps can scale horizontally using clusters and load balancers, distributing requests across multiple CPU cores.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which of the following helps prevent SQL Injection in Node.js?',
    options: [
      'Using string concatenation',
      'Using parameterized queries',
      'Using setTimeout',
      'Using console.log'
    ],
    correctAnswer: 'Using parameterized queries',
    reason: 'Parameterized queries (prepared statements) prevent SQL injection by separating query structure from input data.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does the "helmet" middleware in Express.js do?',
    options: [
      'Improves database queries',
      'Helps secure Express apps by setting HTTP headers',
      'Caches API responses',
      'Provides JWT authentication'
    ],
    correctAnswer: 'Helps secure Express apps by setting HTTP headers',
    reason: 'Helmet helps secure Node.js apps by setting various HTTP headers like XSS protection, CSP, and HSTS.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js module allows working with streams of compressed data?',
    options: ['zlib', 'crypto', 'stream', 'fs'],
    correctAnswer: 'zlib',
    reason: 'The zlib module provides compression and decompression functionalities using streams, e.g., gzip and deflate.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between readFile and createReadStream in Node.js?',
    options: [
      'readFile reads files asynchronously, createReadStream is synchronous',
      'readFile loads the whole file into memory, createReadStream reads chunks',
      'Both are identical',
      'createReadStream can only read JSON files'
    ],
    correctAnswer: 'readFile loads the whole file into memory, createReadStream reads chunks',
    reason: 'readFile loads an entire file into memory at once, while createReadStream reads data in chunks, suitable for large files.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'In Node.js, what is the purpose of the domain module?',
    options: [
      'To create secure sandboxes',
      'To handle multiple CPU cores',
      'To handle multiple different databases',
      'To handle multiple I/O contexts and errors together'
    ],
    correctAnswer: 'To handle multiple I/O contexts and errors together',
    reason: 'The domain module provided a way to handle multiple different I/O operations as a group. It is deprecated in favor of async_hooks and Promises.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which function is used to schedule execution of a callback at the end of the current event loop cycle?',
    options: ['process.nextTick()', 'setTimeout()', 'setImmediate()', 'clearTimeout()'],
    correctAnswer: 'setImmediate()',
    reason: 'setImmediate() executes a callback at the end of the current event loop cycle, while process.nextTick() executes before continuing the loop.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the primary use of the crypto module in Node.js?',
    options: [
      'Managing sessions',
      'Performing cryptographic operations like hashing, encryption, signing',
      'Compressing data',
      'Debugging applications'
    ],
    correctAnswer: 'Performing cryptographic operations like hashing, encryption, signing',
    reason: 'The crypto module provides cryptographic functionality such as hashing, encryption/decryption, and digital signatures.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Express middleware is commonly used for parsing incoming request bodies?',
    options: ['morgan', 'body-parser', 'helmet', 'cookie-parser'],
    correctAnswer: 'body-parser',
    reason: 'body-parser is middleware for parsing request bodies in Express applications (JSON, URL-encoded, etc.).',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does process.hrtime() return in Node.js?',
    options: [
      'Current timestamp in milliseconds',
      'High-resolution real time in [seconds, nanoseconds]',
      'System uptime',
      'CPU usage statistics'
    ],
    correctAnswer: 'High-resolution real time in [seconds, nanoseconds]',
    reason: 'process.hrtime() provides high-resolution time useful for measuring performance and benchmarking code.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'In Node.js, which module provides utilities for working with file and directory paths?',
    options: ['os', 'fs', 'url', 'path'],
    correctAnswer: 'path',
    reason: 'The path module provides utilities to work with file and directory paths like join, resolve, basename, and extname.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is a worker thread in Node.js?',
    options: [
      'A separate process for handling tasks',
      'A thread that runs JavaScript code in parallel to the main event loop',
      'A special async function',
      'A database connection handler'
    ],
    correctAnswer: 'A thread that runs JavaScript code in parallel to the main event loop',
    reason: 'Worker threads enable running JavaScript in parallel, useful for CPU-intensive tasks that would otherwise block the event loop.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which method is used to send cookies in Express.js?',
    options: ['res.writeHead()', 'res.cookie()', 'res.setHeader()', 'req.cookie()'],
    correctAnswer: 'res.cookie()',
    reason: 'In Express.js, res.cookie() is used to set cookies in the response object.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the purpose of async_hooks in Node.js?',
    options: [
      'Debugging garbage collection',
      'Tracking asynchronous resources in the event loop',
      'Improving HTTP performance',
      'Encrypting data'
    ],
    correctAnswer: 'Tracking asynchronous resources in the event loop',
    reason: 'The async_hooks module provides an API to track the lifecycle of asynchronous resources, useful for debugging and monitoring.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you handle unhandled promise rejections in Node.js?',
    options: [
      'By using process.on("unhandledRejection")',
      'By wrapping code in try-catch',
      'By ignoring it',
      'By restarting Node.js'
    ],
    correctAnswer: 'By using process.on("unhandledRejection")',
    reason: 'Unhandled promise rejections can be captured by listening to the "unhandledRejection" event on process.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which tool is commonly used for profiling Node.js applications?',
    options: ['nodemon', 'pm2', 'clinic.js', 'helmet'],
    correctAnswer: 'clinic.js',
    reason: 'clinic.js provides tools like Doctor, Flame, and Bubbleprof for profiling performance bottlenecks in Node.js apps.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js core module can be used to create a TCP server?',
    options: ['http', 'tcp', 'net', 'dgram'],
    correctAnswer: 'net',
    reason: 'The net module provides an asynchronous network API for creating TCP servers and clients.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does the child_process.exec() function return?',
    options: [
      'A Worker instance',
      'A ChildProcess instance',
      'A Promise',
      'A Buffer only'
    ],
    correctAnswer: 'A ChildProcess instance',
    reason: 'child_process.exec() spawns a shell and executes a command, returning a ChildProcess instance.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Why is it not recommended to use synchronous APIs in production Node.js apps?',
    options: [
      'They are insecure',
      'They block the event loop and degrade performance',
      'They are deprecated',
      'They are faster but unstable'
    ],
    correctAnswer: 'They block the event loop and degrade performance',
    reason: 'Synchronous methods block the event loop, preventing Node.js from handling other incoming requests efficiently.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js global timer function executes repeatedly at fixed intervals?',
    options: ['setTimeout()', 'setInterval()', 'setImmediate()', 'nextTick()'],
    correctAnswer: 'setInterval()',
    reason: 'setInterval() repeatedly calls a function after a specified delay until cleared.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which module in Node.js is used for UDP communication?',
    options: ['net', 'http', 'udp', 'dgram'],
    correctAnswer: 'dgram',
    reason: 'The dgram module provides an implementation of UDP datagram sockets.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between nodemon and pm2?',
    options: [
      'Both are package managers',
      'nodemon restarts apps on file changes, pm2 is a process manager with clustering',
      'pm2 is only for Windows, nodemon only for Linux',
      'They are identical tools'
    ],
    correctAnswer: 'nodemon restarts apps on file changes, pm2 is a process manager with clustering',
    reason: 'Nodemon is mainly for auto-reloading in development, while PM2 manages production apps with clustering, monitoring, and logs.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you avoid callback hell in Node.js?',
    options: [
      'By using Promises and async/await',
      'By nesting callbacks',
      'By using setTimeout everywhere',
      'By disabling asynchronous calls'
    ],
    correctAnswer: 'By using Promises and async/await',
    reason: 'Promises and async/await flatten asynchronous code, improving readability and avoiding callback pyramids.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between cluster.fork() and child_process.fork()?',
    options: [
      'They are identical',
      'cluster.fork() creates a worker from the cluster, child_process.fork() spawns a new Node.js process',
      'child_process.fork() is synchronous',
      'cluster.fork() runs only on Windows'
    ],
    correctAnswer: 'cluster.fork() creates a worker from the cluster, child_process.fork() spawns a new Node.js process',
    reason: 'cluster.fork() is specific to the cluster module for load balancing, while child_process.fork() creates a new independent Node.js process with IPC.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which database driver is most commonly used with Node.js for MongoDB?',
    options: ['mongoose', 'mongodb', 'sequelize', 'typeorm'],
    correctAnswer: 'mongodb',
    reason: 'The official "mongodb" driver is most common for direct MongoDB integration. Mongoose is an ODM built on top of it.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does process.exit() do in Node.js?',
    options: [
      'Gracefully shuts down the process',
      'Terminates the process immediately with a status code',
      'Restarts the event loop',
      'Cleans up memory'
    ],
    correctAnswer: 'Terminates the process immediately with a status code',
    reason: 'process.exit() forces Node.js to terminate immediately, optionally with a given exit code.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js API is used for worker thread message passing?',
    options: ['process.send()', 'worker.postMessage()', 'ipc.send()', 'thread.send()'],
    correctAnswer: 'worker.postMessage()',
    reason: 'In worker_threads, worker.postMessage() is used for sending messages, and worker.on("message") for receiving.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you detect memory leaks in Node.js?',
    options: [
      'Using process.memoryUsage() and heap snapshots',
      'By using setTimeout',
      'By logging variables',
      'It is not possible in Node.js'
    ],
    correctAnswer: 'Using process.memoryUsage() and heap snapshots',
    reason: 'Memory leaks can be diagnosed with process.memoryUsage() and Node.js inspector heap snapshots.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between REST and GraphQL in Node.js APIs?',
    options: [
      'REST requires multiple endpoints, GraphQL uses a single endpoint with flexible queries',
      'GraphQL is faster in all cases',
      'REST is always preferred',
      'They are identical'
    ],
    correctAnswer: 'REST requires multiple endpoints, GraphQL uses a single endpoint with flexible queries',
    reason: 'REST has fixed endpoints with predefined responses. GraphQL provides a single endpoint where clients specify required data.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which library is commonly used for authentication in Node.js apps?',
    options: ['jsonwebtoken', 'passport', 'bcrypt', 'All of the above'],
    correctAnswer: 'All of the above',
    reason: 'jsonwebtoken is used for JWT, passport provides strategies, and bcrypt handles password hashing.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you enable HTTPS in a Node.js server?',
    options: [
      'By using https module with SSL certificates',
      'By using http module only',
      'By enabling a flag in node command',
      'By default Node.js is HTTPS'
    ],
    correctAnswer: 'By using https module with SSL certificates',
    reason: 'The https module along with SSL/TLS certificates enables secure HTTPS communication.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which of these is NOT a Node.js testing framework?',
    options: ['Mocha', 'Jest', 'Chai', 'Maven'],
    correctAnswer: 'Maven',
    reason: 'Mocha, Jest, and Chai are Node.js testing libraries, while Maven is a Java build tool.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which function is used to schedule microtasks in Node.js?',
    options: ['setTimeout()', 'queueMicrotask()', 'setImmediate()', 'process.exit()'],
    correctAnswer: 'queueMicrotask()',
    reason: 'queueMicrotask() schedules microtasks to run right after the current execution, before other tasks.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },

  {
    question: 'How does Node.js handle CPU-intensive tasks?',
    options: [
      'They block the event loop unless delegated to worker threads or child processes',
      'They are automatically parallelized',
      'They run faster in async functions',
      'They are ignored'
    ],
    correctAnswer: 'They block the event loop unless delegated to worker threads or child processes',
    reason: 'CPU-bound tasks can freeze the event loop. Using worker_threads or child processes prevents blocking.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js global is similar to setTimeout but executes immediately after I/O?',
    options: ['setImmediate()', 'nextTick()', 'clearImmediate()', 'queueMicrotask()'],
    correctAnswer: 'setImmediate()',
    reason: 'setImmediate() runs a callback after the I/O events in the current event loop cycle.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you increase the default thread pool size in Node.js?',
    options: [
      'By editing node_modules',
      'By setting UV_THREADPOOL_SIZE environment variable',
      'By calling cluster.setupThreads()',
      'It cannot be changed'
    ],
    correctAnswer: 'By setting UV_THREADPOOL_SIZE environment variable',
    reason: 'The libuv thread pool size can be configured using the UV_THREADPOOL_SIZE environment variable.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which function removes an event listener in Node.js?',
    options: ['off()', 'removeListener()', 'unlisten()', 'clearEvent()'],
    correctAnswer: 'removeListener()',
    reason: 'EventEmitter.removeListener() removes a previously registered event handler.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js module is used to parse query strings?',
    options: ['url', 'querystring', 'qs', 'All of the above'],
    correctAnswer: 'All of the above',
    reason: 'The querystring and url modules are built-in, while "qs" is a popular third-party library for nested parsing.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Why should you avoid storing secrets in Node.js code?',
    options: [
      'It reduces readability',
      'It exposes secrets in version control',
      'It crashes Node.js',
      'It prevents async operations'
    ],
    correctAnswer: 'It exposes secrets in version control',
    reason: 'Secrets should be stored in environment variables or vaults, not hardcoded in code, to prevent leaks.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you handle CORS in an Express.js application?',
    options: [
      'By using the cors middleware',
      'By editing server.js manually',
      'By disabling HTTPS',
      'By using only GET requests'
    ],
    correctAnswer: 'By using the cors middleware',
    reason: 'The "cors" package allows configuring Cross-Origin Resource Sharing headers in Express.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which logger is commonly used in Node.js for structured logging?',
    options: ['winston', 'morgan', 'bunyan', 'All of the above'],
    correctAnswer: 'All of the above',
    reason: 'winston, morgan, and bunyan are popular logging libraries for Node.js, each with different features.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between CommonJS and ES Modules in Node.js?',
    options: [
      'CommonJS uses require(), ES Modules use import/export',
      'CommonJS is synchronous, ES Modules can be asynchronous',
      'Both are interchangeable',
      'ES Modules only work in browsers'
    ],
    correctAnswer: 'CommonJS uses require(), ES Modules use import/export',
    reason: 'Node.js supports both module systems: CommonJS (require) and ES Modules (import/export).',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which command generates a package.json file quickly?',
    options: ['npm init -y', 'npm start', 'npm install', 'npm generate'],
    correctAnswer: 'npm init -y',
    reason: 'npm init -y auto-generates a package.json file with default values.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },

  {
    question: 'How do you prevent DoS attacks in Node.js applications?',
    options: [
      'By using rate limiting and input validation',
      'By using console.log',
      'By disabling HTTPS',
      'By using only GET requests'
    ],
    correctAnswer: 'By using rate limiting and input validation',
    reason: 'Rate limiting, validation, and WAF tools help prevent Denial-of-Service attacks.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which object represents the current working directory in Node.js?',
    options: ['__dirname', 'process.cwd()', 'module.path', 'global.path'],
    correctAnswer: 'process.cwd()',
    reason: 'process.cwd() returns the current working directory from where the Node.js process was started.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between __dirname and process.cwd()?',
    options: [
      '__dirname is the directory of the current module, process.cwd() is where Node.js was executed',
      'Both are identical',
      'process.cwd() always points to root',
      '__dirname is deprecated'
    ],
    correctAnswer: '__dirname is the directory of the current module, process.cwd() is where Node.js was executed',
    reason: 'These are different: __dirname gives the file’s directory, while process.cwd() gives the working directory.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How do you gracefully shut down a Node.js server?',
    options: [
      'By calling server.close() and cleaning up resources',
      'By using process.exit() immediately',
      'By killing the process ID',
      'By restarting Node.js'
    ],
    correctAnswer: 'By calling server.close() and cleaning up resources',
    reason: 'server.close() stops accepting new connections and allows graceful shutdown before exit.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does cluster.isMaster indicate?',
    options: [
      'The current process is the master process',
      'The process is a worker thread',
      'It is always false',
      'It is deprecated'
    ],
    correctAnswer: 'The current process is the master process',
    reason: 'cluster.isMaster is true if the current process is the cluster master.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js module is commonly used for unit testing?',
    options: ['assert', 'test', 'chai', 'All of the above'],
    correctAnswer: 'All of the above',
    reason: 'Node.js has assert built-in. chai and test frameworks like Jest or Mocha are also widely used.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does eventEmitter.once() do?',
    options: [
      'Registers a handler only for the first event emission',
      'Registers multiple handlers',
      'Removes all listeners',
      'Blocks the event loop'
    ],
    correctAnswer: 'Registers a handler only for the first event emission',
    reason: 'once() ensures a listener runs only the first time the event is emitted.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the purpose of the vm module in Node.js?',
    options: [
      'To run code inside a new V8 virtual machine context',
      'To manage virtual memory',
      'To start virtual machines',
      'To create event loops'
    ],
    correctAnswer: 'To run code inside a new V8 virtual machine context',
    reason: 'The vm module allows execution of code inside isolated V8 contexts, useful for sandboxes.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you debug a Node.js application?',
    options: [
      'Using node --inspect with Chrome DevTools',
      'By adding console.log only',
      'By restarting Node.js',
      'Debugging is not supported'
    ],
    correctAnswer: 'Using node --inspect with Chrome DevTools',
    reason: 'node --inspect enables debugging via Chrome DevTools or VS Code debugger.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the default port of a Node.js HTTP server if not specified?',
    options: ['3000', '8080', '80', 'It must be specified'],
    correctAnswer: 'It must be specified',
    reason: 'Node.js does not assume a default port. Developers must explicitly specify it in listen().',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which tool is used to check for vulnerabilities in Node.js dependencies?',
    options: ['npm audit', 'npm doctor', 'npm fix', 'npm check'],
    correctAnswer: 'npm audit',
    reason: 'npm audit scans dependencies for known vulnerabilities and suggests fixes.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What does res.locals in Express do?',
    options: [
      'Stores local variables scoped to a request',
      'Stores global config',
      'Stores cookies',
      'Clears the response body'
    ],
    correctAnswer: 'Stores local variables scoped to a request',
    reason: 'res.locals is useful for passing data to views or middlewares during a single request.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which module provides DNS-related functions in Node.js?',
    options: ['dns', 'net', 'os', 'url'],
    correctAnswer: 'dns',
    reason: 'The dns module provides name resolution functions like lookup and resolve.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the main use of the dgram module?',
    options: ['TCP connections', 'UDP datagrams', 'WebSocket servers', 'File system access'],
    correctAnswer: 'UDP datagrams',
    reason: 'dgram provides APIs for UDP datagram sockets.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is middleware chaining in Express?',
    options: [
      'Calling multiple middlewares sequentially using next()',
      'Combining multiple routers',
      'Running multiple servers',
      'Using async/await in Express'
    ],
    correctAnswer: 'Calling multiple middlewares sequentially using next()',
    reason: 'Middleware chaining allows sequential processing of request/response objects in Express.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which npm command lists globally installed packages?',
    options: ['npm ls -g --depth=0', 'npm show', 'npm global', 'npm list-all'],
    correctAnswer: 'npm ls -g --depth=0',
    reason: 'npm ls -g --depth=0 shows top-level globally installed npm packages.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'Which Node.js global provides a way to measure execution time?',
    options: ['console.time()', 'process.hrtime()', 'performance.now()', 'All of the above'],
    correctAnswer: 'All of the above',
    reason: 'All of these can measure execution time with different precision levels.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'How can you enable ES modules in Node.js?',
    options: [
      'By using .mjs extension or "type": "module" in package.json',
      'By default always',
      'By enabling ES_MODE flag',
      'By using require() only'
    ],
    correctAnswer: 'By using .mjs extension or "type": "module" in package.json',
    reason: 'Node.js requires .mjs or package.json "type": "module" to enable ES Modules.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },
  {
    question: 'What is the difference between spawn and exec in Node.js?',
    options: [
      'spawn streams output, exec buffers the entire output',
      'exec is faster always',
      'spawn is deprecated',
      'They are identical'
    ],
    correctAnswer: 'spawn streams output, exec buffers the entire output',
    reason: 'spawn returns streams for stdout/stderr, while exec buffers output in memory.',
    selectedAnswer: '',
    showAnswer: false,
    isCorrect: false
  },

  ];

  selectAnswer(q: any, selected: string) {
    q.selectedAnswer = selected;
    q.showAnswer = true;
    q.isCorrect = selected === q.correctAnswer;
  }

}
