## Nodejs

-- what is node js
    Node 
# What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.

# What is npm? How does it work?

npm (Node Package Manager) is the default package manager for Node.js. It allows users to install, share, and manage dependencies for Node.js projects.

# What is an event loop in Node.js?

The event loop is a single-threaded loop that handles all asynchronous callbacks in Node.js, allowing it to perform non-blocking I/O operations.

# What is the role of the "require" method in Node.js?

The "require" method is used to include modules that exist in separate files and exposes their functionality to the current file.

# Explain the concept of streams in Node.js.

Streams in Node.js are objects that enable the efficient handling of data flow, allowing for the processing of large datasets without consuming a large amount of memory.

# What is callback hell and how can it be avoided?

Callback hell refers to the situation where multiple nested callbacks make the code hard to read and maintain. It can be avoided by using promises, async/await, or modularizing the code.

# What are the benefits of using Node.js?

Node.js provides several benefits, including high scalability, non-blocking I/O, a large ecosystem of open-source packages, and the ability to use JavaScript for both front-end and back-end development.

# What is the purpose of the "package.json" file?

The "package.json" file contains metadata about the Node.js project, including its dependencies, scripts, and other configurations.

# How does Node.js handle child threads?

Node.js does not directly create child threads but allows the creation of child processes to handle heavy computation tasks using the "child_process" module.

# Explain the difference between "process.nextTick" and "setImmediate" in Node.js.

"process.nextTick" queues a function to be executed at the beginning of the next event loop iteration, whereas "setImmediate" queues a function to be executed at the end of the current event loop iteration.

# What is the purpose of the "Buffer" class in Node.js?

The "Buffer" class in Node.js provides a way to handle binary data, allowing for the manipulation of streams and file system operations.

# How can you handle errors in Node.js?

Errors in Node.js can be handled using try-catch blocks, error-first callbacks, promises, or by using popular error-handling libraries like "express-async-errors" or "joi".
What is the role of the "module.exports" and "exports" in Node.js?

"module.exports" and "exports" are used to expose modules in Node.js. "module.exports" is used to export the entire module, while "exports" is a reference to "module.exports" and is used to export multiple properties or functions from a module.

# What is the difference between "require" and "import" in Node.js?

"require" is used in Node.js to import modules, while "import" is part of the ECMAScript standard and is typically used with a transpiler like Babel when using newer JavaScript features in Node.js.
How can you make your Node.js application production-ready?

To make a Node.js application production-ready, one should focus on error handling, logging, security, performance optimization, and utilizing tools like process managers, load balancers, and reverse proxies.


Explain the JavaScript event loop.

Is JavaScript single-threaded or multi-threaded?

Explain the difference between synchronous and asynchronous functions, and an example of when each one is a better choice.

Explain promises and callback functions.

How does async/await differ from promises?

Explain the difference between child_process.spawn() and child_process.fork()

Give examples of a function expression, a function definition, and an arrow function.

Explain the difference between CommonJS and ESModules.

What is an event emitter?

Is FS.readfile() a synchronous function or asynchronous?

Name one important feature added in ES6.



nodejs core modules
process
bodyparser

# mongoose
reverse query
virtual field for reverse query

# Stubs
- Mimic the behavior of external services or modules that are not readily available during testing.
- Simulate specific responses or error conditions from external dependencies to test different scenarios.
- Monitor and verify how the unit under test interacts with the stubbed components, such as checking whether the correct methods are called with the expected parameters.
- Simplify the testing process by controlling the behavior of external dependencies and ensuring consistent testing results, even when the actual external components may have    unpredictable or undesirable behaviors.

# Clusters
# Clusters VS Worker Threads ...
In clusters theer is one process in each cpu with in ipc communication. We can use it in cases like a single http port accepting many requests

 
**Cluster**  -- distribute workload across multiple processes within cpu 
> **Worker**   -- Multiple threads within single single Node.js process

**Cluster**  -- Particularly useful for **scaling** Nodejs applications and improving overall performance by distributing workload across multiple cores
> **Workers** -- Useful in **cpu intensive** computations utilizing

**Cluster** -- communicates using inter process communication (ipc)
> **Worker** -- Communicates through passing messages

## Why should we seperate the express app and server
The server is responsible for initialising the routes and middlewares. Express app has the business logic for all the routes and middlewares intialised by the servers. Seperating the server and the express app make sure the business logic is encapsulated, is readable and more maintainable, and easier to unit test.

## Nodejs Timer Function
**setTimeout:** Used to execute a function or a piece of code once after a specified delay.

**setInterval:**  Used to repeatedly execute a function or a piece of code at a specified interval.
setImmediate

process.nextTick() and setImmediate()

## Reactor Pattern
Reactor pattern can be used in any event driven architecture. There are two components 
- **Reactor** Its job is to dispatch the I/O event to appropriate handlers.
- **Handler** Its job is to work on these events

.fork vs exec

## FS (syncronous and asyncronous)
nodejs module system


## Mongo Sharding




# Concurrency vs Parallelism

 **concurrency**
clean up your romm -->10 mins   ---->5min     ---> 10 mins
                    > cook food     > clean room    cook

The tasks are switched back and forth in a rapid fasion. Nodejs achieves concurrency by offloading some

Node.js achieves concurrency through its non-blocking, event-driven architecture, which enables it to handle multiple operations concurrently without creating additional threads for each request. This concurrency model is based on the following key components and mechanisms:

**Event Loop:**

The event loop is at the core of Node.js's concurrency model. It continuously checks for and processes events, such as I/O operations, timers, and callbacks, in a single thread. By efficiently managing these events, Node.js can handle multiple operations concurrently without blocking the execution of other tasks.

**Asynchronous I/O:**

Node.js uses asynchronous I/O operations, such as file system operations and network requests, to prevent the event loop from being blocked while waiting for responses. This approach allows Node.js to continue processing other tasks during I/O operations, enhancing its overall concurrency and responsiveness.

**Single-Threaded Event Loop:**

Node.js operates within a single-threaded event loop, which eliminates the overhead of creating and managing multiple threads. This single-threaded model simplifies the programming model and reduces the complexity associated with thread management, making it easier to develop scalable and efficient applications.

**Thread Pool for Blocking Operations:**

Node.js utilizes a thread pool, managed by the libuv library, for handling certain types of blocking operations, such as file I/O and other I/O-bound tasks. By delegating these operations to the thread pool, Node.js can prevent the event loop from being blocked, ensuring that the application remains responsive and can handle multiple concurrent requests.

**Parrlelism**
Happens in parallel


## Thread Pool
Libuv's thread pools is actually a pool of thread which nodejs can offload asyncronous tasks.
**thread size** process.env.UV_THREADPOO_SIZE 
fs.readFile and crypto.pbdkf2 run on theie own seperate threads **Syncrounsly**. Bur as far as the main thread is concerned, they are asyncronous

Difference between asynchronous and non-blocking functions?
Advantages of a single threaded web server over a multithreaded one?
What is REPL in Node.js?
What is Continuation-passing Style (CPS)?
How to Avoid Callback Hell?
What is the Cluster module?
Why is using blocking or synchronous operations a bad practice in Node.js?
What's happened npm?
The difference between module.exportsand exports?
Why aren't top-level variables global in modules?
What are circular module dependencies in Node?
## put vs patch
## options method in context of the rest api
## CORS
## How to connect to DB
## Connect Node to Postgresql which package ?
## what security implementation can we do in node js?
 DDOS attacts - middleware called as helmet
- How to make things Fast Like api Call ?

## buffer
## child process
## memcached


# Mongo DB

## Aggregate 
It groups values from multiple documenrs and returns the computed result

Three methods to perform aggregation
- aggregation pipeline
- the map-reduce function
- single purpose aggregation methods and commands

## aggregation pipline

Aggregate pipeline is process with series of stages that computes data successively

## Sharding in Mongodb
Sharding in MongoDB is a technique used to **horizontally scale** a MongoDB database across multiple servers or nodes. It involves dividing a large dataset into smaller, more manageable chunks called shards. Each shard is stored on a separate server or replica set, and the data is distributed among these shards based on a sharding key. 

1. Scalability
2. Increased Throughput
3. Storage Capacity
4. Improved Query Performance
5. High Availability
6. Geographic Distribution
7. Isolation of Workloads

## Mongoose
Mongoose is a ODM - object document mapper. Helps in creating strongly typed model schema. Facilitates schema based modeling system. Cool featuers like type casting , query building, business logic hooks

## Does MongoDB support Foreign key constraints?
No. It does not support any constraints. There is no cascading deletes or cascading updates. It is up the developer to create relation between documets.

## How does nodejs manges child threads.

## Buffer in Nodejs
Buffers are temp memorty that is manily used by streams to hold some data until it is consumed.
It is used to represent fixed length sequence of bytes.




https://bigfrontend.dev/

https://bigfrontend.dev/quiz

https://dev.to/devabhijeet/all-front-end-interview-questions-asked-during-my-recent-job-hunt-1kge

https://devchallenges.io/challenges

https://github.com/YauhenKavalchuk/interview-questions

https://github.com/YauhenKavalchuk/interview-questions/tree/main/questions

https://github.com/lydiahallie/javascript-questions

https://github.com/sudheerj/javascript-interview-questions

https://github.com/ElemeFE/node-interview

https://github.com/tshemsedinov/NodeJS-Interview-Questions

[Backend Mock Coding Interview - Node JS - YouTube](https://www.youtube.com/watch?v=Jw2pniZCLi8)

https://www.youtube.com/watch?v=FdaVsce3ftQ

https://www.youtube.com/watch?v=CA1Z_c9Sf1Y

https://www.youtube.com/watch?v=w9y7mFiiH3g

https://www.youtube.com/watch?v=J-6xrBmqnMI

https://www.youtube.com/watch?v=GeoohyU8Qxw




https://github.com/sudheerj/reactjs-interview-questions
https://github.com/Advanced-Frontend/Daily-Interview-Question


https://www.youtube.com/@itscodingdoctor/videos

https://www.youtube.com/@RoadsideCoder

[React JS Interview Questions ( Pagination ) - Frontend Machine Coding Interview Experience - YouTube](https://www.youtube.com/watch?v=cBsB7hhOzQI)


[Turing's Live Coding Challenge | Node.JS Mock Interview - YouTube](https://www.youtube.com/watch?v=7-FUiAFwEVA)

[Dark Mode Challenge](https://www.youtube.com/watch?v=gF5cR6mn8ag)

[STar Rating - YouTube](https://www.youtube.com/watch?v=miW4Ul002z4)

[Stepper component in React | Frontend machine coding question](https://www.youtube.com/watch?v=D_aVRMu3acw)
[Mid-level React Interview - YouTube](https://www.youtube.com/watch?v=zue3lAZyAec)
[Senior React JS Interview Question - YouTube](https://www.youtube.com/watch?v=HJoC6hl4J-4)
[Cracking the Frontend Interview - YouTube](https://www.youtube.com/playlist?list=PLlasXeu85E9fkCH4XgL2GEh0Bd1IHEaGL)
https://www.youtube.com/watch?v=WQCRXJdlnoU

https://www.youtube.com/watch?v=szXMBGKGTdE

https://www.youtube.com/watch?v=D_lpuK_Hs8U

https://www.youtube.com/watch?v=KMu6SlIJ7H4


https://www.youtube.com/watch?v=9Ez_gdsgGiM

https://www.youtube.com/watch?v=C1qOaRdSwwc

https://www.youtube.com/shorts/x-ntJfVT_h4

https://www.youtube.com/watch?v=sAF7Km_znjA

https://www.youtube.com/watch?v=cBsB7hhOzQI

https://www.youtube.com/watch?v=yQHr4opz_N0

https://www.youtube.com/watch?v=QQNjidzLZ8E

https://www.youtube.com/shorts/uGIiD8M7Pto



https://www.youtube.com/playlist?list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8

https://www.youtube.com/playlist?list=PLENVRtTDG0ocMlPIxNjHfZo9P0_Pif73O



https://www.youtube.com/shorts/Uv-5lzGz81A

https://www.youtube.com/watch?v=flFf826w_sc

https://www.youtube.com/watch?v=EKEpVhi-29Q


https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7

https://www.youtube.com/watch?v=xejr5Uv_sAQ&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM

## SSR vs RSC
- SSR runs on server and is sent to the client and is later hydrated.
- SSR initially loads the whole page, which is suitable for the initial load but not for the subsequent updates


- RSC runs on server, but cannot be hydrated. We cannot use hooks in SRC. unless "use client".
- RSC helps us keep the state. 
- In RSC each component is responsible for fetching its own data. Unlike in SSR where the data is fetched by the page and is apssed to the components
- RSC doesn't sent html, it sends a type text which looks similar to json

 [What is CSR SSR SSG and ISR - YouTube](https://www.youtube.com/watch?v=YkxrbxoqHDw )

## selector
 selector accepts the state as an argument, and returns the data

 - shallow comparison vs deep comparison
 - usereducer vs useState
 - AbortController
 - usecontext vs usememo
 - lazy loading
 - fetch vs axios


 # General

 ## Types of sorting algorithm

 