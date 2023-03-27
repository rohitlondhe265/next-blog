import { NextResponse } from "next/server";

const data = [
  {
    "id": 2,
    "title": "Java Constructors Notes",
    "description": "<p>A constructor in Java is a&nbsp;<strong>special method</strong>&nbsp;that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.</p><p>Constructors can also take parameters, which is used to initialize attributes.</p><h3>Notes: </h3><ol><li>Note that the constructor name must&nbsp;<strong>match the class name</strong>, and it cannot have a&nbsp;<strong>return type</strong>&nbsp;(like&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">void</code>).</li><li>Also note that the constructor is called when the object is created.</li><li>All classes have constructors by default: if you do not create a class constructor yourself, Java creates one for you. However, then you are not able to set initial values for object attributes.</li></ol><p><a href=\"https://www.w3schools.com/java/java_constructors.asp\" rel=\"noopener noreferrer\" target=\"_blank\"><strong>click here </strong></a>for full informaion.</p>",
    "thumbnail": "1677391811667java1.png",
    "created_at": "2023-02-26T06:10:11.000Z",
    "updated_at": "2023-03-11T14:23:13.000Z",
    "uid": 1,
    "category": "java",
    "slug": "java-constructors-notes"
  },
  {
    "id": 3,
    "title": "Java Packages & API",
    "description": "<p>A package in Java is used to group related classes. Think of it as&nbsp;<strong>a folder in a file directory</strong>. We use packages to avoid name conflicts, and to write a better maintainable code. Packages are divided into two categories:</p><ul><li>Built-in Packages (packages from the Java API)</li><li>User-defined Packages (create your own packages)</li></ul><h2>Built-in Packages</h2><p>The Java API is a library of prewritten classes, that are free to use, included in the Java Development Environment.</p><p>The library contains components for managing input, database programming, and much much more. The complete list can be found at Oracles website:&nbsp;<a href=\"https://docs.oracle.com/javase/8/docs/api/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: transparent;\">https://docs.oracle.com/javase/8/docs/api/</a>.</p><p>The library is divided into&nbsp;<strong>packages</strong>&nbsp;and&nbsp;<strong>classes</strong>. Meaning you can either import a single class (along with its methods and attributes), or a whole package that contain all the classes that belong to the specified package.</p><p>To use a class or a package from the library, you need to use the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">import</code>&nbsp;keyword:</p><h2>Import a Class</h2><p>If you find a class you want to use, for example, the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">Scanner</code>&nbsp;class,&nbsp;<strong>which is used to get user input</strong>, write the following code:</p><p>To use the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">Scanner</code>&nbsp;class, create an object of the class and use any of the available methods found in the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">Scanner</code>&nbsp;class documentation. In our example, we will use the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">nextLine()</code>&nbsp;method, which is used to read a complete line:</p><h2>Import a Package</h2><p>There are many packages to choose from. In the previous example, we used the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">Scanner</code>&nbsp;class from the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">java.util</code>&nbsp;package. This package also contains date and time facilities, random-number generator and other utility classes.</p><p>To import a whole package, end the sentence with an asterisk sign (<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">*</code>). The following example will import ALL the classes in the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">java.util</code>&nbsp;package:</p><h2>User-defined Packages</h2><p>To create your own package, you need to understand that Java uses a file system directory to store them. Just like folders on your computer:</p><pre class=\"ql-syntax\" spellcheck=\"false\">└── root\n  └── mypack\n    └── MyPackageClass.java\n</pre><p>To create a package, use the&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">package</code>&nbsp;keyword:</p><pre class=\"ql-syntax\" spellcheck=\"false\">package mypack;\nclass MyPackageClass {\n  public static void main(String[] args) {\n    System.out.println(\"This is my package!\");\n  }\n}\n</pre><p>The&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">-d</code>&nbsp;keyword specifies the destination for where to save the class file. You can use any directory name, like c:/user (windows), or, if you want to keep the package within the same directory, you can use the dot sign \"<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">.</code>\", like in the example above.</p><p><strong>Note:</strong>&nbsp;The package name should be written in lower case to avoid conflict with class names.</p>",
    "thumbnail": "1677392668411java2.png",
    "created_at": "2023-02-26T06:24:28.000Z",
    "updated_at": "2023-03-11T14:23:50.000Z",
    "uid": 1,
    "category": "java",
    "slug": "java-packages-&-api"
  },
  {
    "id": 4,
    "title": "Callbacks in Nodejs: A 2021’s Comprehensive Guide",
    "description": "<p>In this tutorial, I am going to cover something of utmost importance: Callbacks in Nodejs.</p><p>Callbacks in Nodejs lay its foundation. When comparing a code for an operation with plain JavaScript, it might seem unnecessarily complicated. I will cover some examples down the post so you can have a better understanding.</p><p>But first, let us get our basics right.</p><h2>What are Callbacks in Nodejs?</h2><p>Before I jump to the definition and explanation of callbacks in Nodejs, I’d rather first explain the real difference between plain JavaScript and Nodejs in executing operations; and how Nodejs is better.</p><h3>Comparing a JS Sync Operation with Node</h3><p>Okay, so I found this great example from the&nbsp;<strong>official Nodejs.org docs</strong>.</p><p>When writing plain JS, in a synchronous program, your code would look something like this:</p><pre class=\"ql-syntax\" spellcheck=\"false\">function processData () {\n&nbsp; var data = fetchData ();\n&nbsp; data += 1;\n&nbsp; return data;\n}\n</pre><p>Although the above code works just fine, there’s a drawback to it. If</p><pre class=\"ql-syntax\" spellcheck=\"false\">fetchData()\n</pre><p><span style=\"color: rgb(10, 12, 16);\">function takes time, maybe because it is being streamed off the internet or the drive, this will cause all other operations to block, as we call it – meaning the ‘sitting still and waiting’ behavior entire data loads.</span>Let us take a look at Node’s version of this operation:</p><pre class=\"ql-syntax\" spellcheck=\"false\">function processData (callback) {\n&nbsp; fetchData(function (err, data) {\n&nbsp; &nbsp; if (err) {\n&nbsp; &nbsp; &nbsp; console.log(\"An error has occurred. Abort everything!\");\n&nbsp; &nbsp; &nbsp; return callback(err);\n&nbsp; &nbsp; }\n&nbsp; &nbsp; data += 1;\n&nbsp; &nbsp; callback(data);\n&nbsp; });\n}\n</pre><p>While this might seem complicated, this is way more useful for your application. Also, it isn’t as complicated as it seems when you begin to understand what’s happening and get your basics braced.</p><p>Now, Nodejs is an asynchronous framework of JavaScript. What does that mean? Simply put, Node doesn’t show the ‘sitting still and waiting’ behavior. Instead, it works on a non-blocking file I/O i.e., Input/Output architecture. This means Node doesn’t wait for other operations to load.</p><p>To achieve this, Node uses something called callbacks!</p><p>Now comes the question what are callbacks in Nodejs!</p><h3>Explaining Callbacks in Nodejs</h3><p>Callbacks in Nodejs are functions that are called after a given operation. They are more like asynchronous alternatives to a function in Nodejs. This prevents blocking any task or operation or allowing other code to run.</p><p>The “do this, once you’re done doing that” approach taken by callbacks in Nodejs, allows you to conduct as many I/O operations as your operating system supports.</p><p>All APIs in Nodejs are written in such a way that they support callbacks.</p><h2>Synchronous &amp; Asynchronous JavaScript</h2><p>Although we discussed in bits the synchronous and asynchronous operations in JavaScript, it is time we learn about them in slight detail.</p><h3>Synchronous JavaScript</h3><p>Synchronous operations in JavaScript are referred to as operations that are executed one at a time. All other operations running simultaneously will be put on hold. They run one at a time because they are single-threaded.</p><p>The browser returns the result of the code as soon as possible once it is run.</p><h3>Asynchronous JavaScript</h3><p>Some operations in JavaScript require AJAX to complete as the response from particular operations is not immediate. It may take some time and it is not possible to jump to the next operation quickly.</p><p>This requires operations to wait for other operations to finish running in the background. Here is when asynchronous callbacks come into the picture.</p><p>AJAX enables many operations to be performed simultaneously. Click here to read more about&nbsp;<a href=\"https://codeforgeek.com/asynchronous-programming-in-node-js/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--color-primary); background-color: transparent;\"><strong>Asynchronous Programming in Nodejs.</strong></a></p><h2>What is a Callback Hell?</h2><p>Now that we understand what are synchronous and asynchronous JS, let us now take a look at a small concept of callback hell in Nodejs.</p><p>Callback hell is a code structure issue caused by the complex nesting of callbacks into callbacks! This is more like a disaster for any developer as it becomes difficult to read, debug and understand. If someone else were to read your code with callback hell in it, he/she is sure gonna curse you, not gonna lie!</p><p>Callback hell is created when a callback accepts an argument which is again a result of the previous callback! The code ends up looking a pyramid with tons of nested codes ending with a ton of these –&nbsp;<strong>})</strong></p><p>If there’s an error in one of your callbacks, it will affect the entire set of callbacks linked to it.</p><p>Here’s a small example of a callback hell I picked from a one-page website just about callback hell:</p><pre class=\"ql-syntax\" spellcheck=\"false\">fs.readdir(source, function (err, files) {\n&nbsp; if (err) {\n&nbsp; &nbsp; console.log('Error finding files: ' + err)\n&nbsp; } else {\n&nbsp; &nbsp; files.forEach(function (filename, fileIndex) {\n&nbsp; &nbsp; &nbsp; console.log(filename)\n&nbsp; &nbsp; &nbsp; gm(source + filename).size(function (err, values) {\n&nbsp; &nbsp; &nbsp; &nbsp; if (err) {\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log('Error identifying file size: ' + err)\n&nbsp; &nbsp; &nbsp; &nbsp; } else {\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log(filename + ' : ' + values)\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; aspect = (values.width / values.height)\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; widths.forEach(function (width, widthIndex) {\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; height = Math.round(width / aspect)\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log('resizing ' + filename + 'to ' + height + 'x' + height)\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (err) console.log('Error writing file: ' + err)\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; })\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }.bind(this))\n&nbsp; &nbsp; &nbsp; &nbsp; }&nbsp; &nbsp; &nbsp; \n       })\n    &nbsp; })\n    &nbsp;}\n   })\n</pre><p>You can see references below to visit the website. Take a look at this code! Anyone’s for sure going to have a tough time understanding it! And, it really looks like a pyramid.</p><p>It is advised to use event queues and promises to escape from callback hell.</p><h2>Conclusion</h2><p>This article elucidates on callbacks in Nodejs and things related to it. Callbacks in Nodejs are of utmost as the frameworks make immense use of it. Callbacks are what make Nodejs apps highly scalable and responsive.</p>",
    "thumbnail": "1677393229089web1.webp",
    "created_at": "2023-02-26T06:33:49.000Z",
    "updated_at": "2023-03-11T14:25:02.000Z",
    "uid": 1,
    "category": "web",
    "slug": "callbacks-in-nodejs:-a-2021?s-comprehensive-guide"
  }
]

const blog = {
  "id": 2,
  "title": "Java Constructors Notes",
  "description": "<p>A constructor in Java is a&nbsp;<strong>special method</strong>&nbsp;that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.</p><p>Constructors can also take parameters, which is used to initialize attributes.</p><h3>Notes: </h3><ol><li>Note that the constructor name must&nbsp;<strong>match the class name</strong>, and it cannot have a&nbsp;<strong>return type</strong>&nbsp;(like&nbsp;<code style=\"background-color: rgba(222, 222, 222, 0.3); color: crimson;\">void</code>).</li><li>Also note that the constructor is called when the object is created.</li><li>All classes have constructors by default: if you do not create a class constructor yourself, Java creates one for you. However, then you are not able to set initial values for object attributes.</li></ol><p><a href=\"https://www.w3schools.com/java/java_constructors.asp\" rel=\"noopener noreferrer\" target=\"_blank\"><strong>click here </strong></a>for full informaion.</p>",
  "thumbnail": "1677391811667java1.png",
  "created_at": "2023-02-26T06:10:11.000Z",
  "updated_at": "2023-03-11T14:23:13.000Z",
  "uid": 1,
  "category": "java",
  "slug": "java-constructors-notes"
}
export async function GET() {
  // const hashmap = '{key= values, key 1= values hkjhk, key 12= value jhkjkhk}';

  // const fixedHashmap = hashmap.replace(/ /g, '')                  // strip all spaces
  //   .replace(/([\w]+)=/g, '"$1"=')      // quote keys
  //   .replace(/=([\w]+)/g, ':"$1"')      // quote values
  //   .replace(/=([[{])/g, ':$1');        // = to : before arrays and objects also

  // const JsonObj = JSON.parse(fixedHashmap);

  return NextResponse.json(blog);
}


// Here's a way to quote all keys and values, as you want:
//  hashmap = hashmap.replace(/ /g, '')                  // strip all spaces
//                  .replace(/([\w]+)=/g, '"$1"=')      // quote keys
//                  .replace(/=([\w]+)/g, ':"$1"')      // quote values
//                  .replace(/=([[{])/g, ':$1');        // = to : before arrays and objects also

//  However, more in line with JSON parsing would be not to quote numeric values, but rather to parse them as numbers, like this:
//  hashmap = hashmap.replace(/ /g, '')
//                  .replace(/([\w]+)=/g, '"$1"=')
//                  .replace(/=([a-zA-Z_]+)/g, ':"$1"')
//                  .replace(/=([\d]+)/g, function(m, num) {return ':'+parseFloat(num)})
//                  .replace(/=([[{])/g, ':$1')

// var crappyJSON = '{ somePropertyWithoutQuotes: "theValue!",  somePropertyWithoutQuotes: "theValue!" }';
// var fixedJSON = crappyJSON.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
// var aNiceObject = JSON.parse(fixedJSON); 