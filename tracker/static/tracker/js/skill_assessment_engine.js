/**
 * SkillUp - In-Depth Multi-Tier Skill Proficiency Assessment Engine & Question Banks
 * Features 10-Question Comprehensive Progressive Diagnostics (2 Questions per Level: L1 to L5),
 * Weighted Tier Calculations, Domain Sub-Score Analytics, Explanations, and Profile Sync.
 */

const SKILL_QUESTION_BANKS = {
  // ==========================================
  // PROGRAMMING & BACKEND FRAMEWORKS
  // ==========================================
  "python": [
    {
      level: 1,
      q: "What is the output of `type([])` in Python?",
      options: ["<class 'list'>", "<class 'array'>", "<class 'dict'>", "<class 'tuple'>"],
      ans: 0,
      exp: "In Python, square brackets `[]` create a built-in `list` object."
    },
    {
      level: 1,
      q: "Which data type in Python is immutable?",
      options: ["tuple", "list", "dict", "set"],
      ans: 0,
      exp: "Tuples cannot be modified after creation, making them immutable sequences."
    },
    {
      level: 2,
      q: "Which keyword is used to define a reusable function in Python?",
      options: ["function", "def", "func", "define"],
      ans: 1,
      exp: "The `def` keyword introduces a function definition in Python syntax."
    },
    {
      level: 2,
      q: "What will `list(range(1, 6))` produce in Python 3?",
      options: ["[1, 2, 3, 4, 5]", "[1, 2, 3, 4, 5, 6]", "[0, 1, 2, 3, 4, 5]", "[2, 3, 4, 5, 6]"],
      ans: 0,
      exp: "Python's `range(start, stop)` is half-open: it includes `start` up to but not including `stop`."
    },
    {
      level: 3,
      q: "How do you correctly handle runtime exceptions in Python?",
      options: ["try / catch", "try / except", "do / except", "catch / throw"],
      ans: 1,
      exp: "Python uses `try` and `except` blocks for runtime error handling."
    },
    {
      level: 3,
      q: "What is the result of list comprehension `[x * 2 for x in [1, 2, 3] if x > 1]`?",
      options: ["[4, 6]", "[2, 4, 6]", "[2, 4]", "[6]"],
      ans: 0,
      exp: "Elements greater than 1 are 2 and 3, which multiplied by 2 yield [4, 6]."
    },
    {
      level: 4,
      q: "What do `*args` and `**kwargs` represent in a Python function signature?",
      options: [
        "Variable positional arguments (as a tuple) and variable keyword arguments (as a dict)",
        "Pointers to memory addresses and memory references",
        "Required fixed arguments and default return types",
        "Multiplication and exponentiation operators only"
      ],
      ans: 0,
      exp: "`*args` collects arbitrary positional arguments into a tuple, while `**kwargs` collects arbitrary keyword arguments into a dictionary."
    },
    {
      level: 4,
      q: "How does the Global Interpreter Lock (GIL) in CPython impact multi-threaded CPU-bound programs?",
      options: [
        "It prevents multiple native OS threads from executing Python bytecodes simultaneously in a single process",
        "It automatically speeds up multi-threaded loops by 400%",
        "It disables file I/O operations across network sockets",
        "It converts Python scripts into compiled C binaries"
      ],
      ans: 0,
      exp: "The GIL ensures memory safety in CPython by restricting bytecode execution to one thread at a time per process, making multiprocessing preferable for CPU-heavy tasks."
    },
    {
      level: 5,
      q: "What is a Python generator and how does the `yield` statement operate?",
      options: [
        "It produces an iterator that lazily yields values one at a time, conserving memory for large datasets",
        "It compiles Python bytecode into machine code at runtime",
        "It creates a multithreaded worker process in the background",
        "It terminates the execution of a script and resets memory"
      ],
      ans: 0,
      exp: "Generators use `yield` to return values lazily on demand without building the entire sequence in memory."
    },
    {
      level: 5,
      q: "What is the purpose of the `__slots__` attribute in a custom Python class?",
      options: [
        "It explicitly restricts attribute creation, avoiding dynamic `__dict__` overhead to significantly reduce memory footprint",
        "It enables automatic multithreaded serialization",
        "It defines SQL table column mappings in SQLite",
        "It encrypts private class methods"
      ],
      ans: 0,
      exp: "`__slots__` bypasses the default per-instance dictionary, saving significant memory when instantiating millions of objects."
    }
  ],

  "javascript": [
    {
      level: 1,
      q: "Which keyword declares a block-scoped reassignable variable in modern JavaScript (ES6+)?",
      options: ["var", "let", "const", "def"],
      ans: 1,
      exp: "`let` declares a block-scoped variable that can be reassigned."
    },
    {
      level: 1,
      q: "What does `typeof null` evaluate to in JavaScript due to legacy design?",
      options: ["'object'", "'null'", "'undefined'", "'boolean'"],
      ans: 0,
      exp: "Due to early JavaScript memory representation of types, `typeof null` returns `'object'`."
    },
    {
      level: 2,
      q: "What does the `===` strict equality operator check in JavaScript?",
      options: [
        "Both value and data type without type coercion",
        "Only value with automatic type coercion",
        "Object memory references only",
        "String lengths only"
      ],
      ans: 0,
      exp: "`===` checks that both operands have identical values and types without performing type conversion."
    },
    {
      level: 2,
      q: "Which built-in array method adds one or more elements to the END of an array and returns the new length?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      ans: 0,
      exp: "`push()` appends items to the end of an array."
    },
    {
      level: 3,
      q: "What is the return value of `Array.prototype.map()`?",
      options: [
        "A new array containing the results of calling a provided function on every element",
        "The original array modified in place",
        "A single accumulated boolean value",
        "Undefined"
      ],
      ans: 0,
      exp: "`map()` returns a brand new array without mutating the original input array."
    },
    {
      level: 3,
      q: "How does destructuring assignment unpack values from an object `{ name: 'Alex', role: 'Dev' }`?",
      options: [
        "const { name, role } = obj;",
        "const [ name, role ] = obj;",
        "const obj -> name, role;",
        "unpack(obj, name, role);"
      ],
      ans: 0,
      exp: "Object destructuring uses curly braces `{ key1, key2 } = object` matching property names."
    },
    {
      level: 4,
      q: "How does the JavaScript Event Loop prioritize Promise callbacks vs `setTimeout(..., 0)`?",
      options: [
        "Promise callbacks go into the Microtask Queue and execute immediately before the next Macrotask (setTimeout)",
        "setTimeout always runs before Promise microtasks",
        "Both run simultaneously on separate CPU threads",
        "Promises only execute when the page refreshes"
      ],
      ans: 0,
      exp: "Microtasks (Promises, queueMicrotask) are drained completely after the synchronous stack empties, before processing macrotasks like timers."
    },
    {
      level: 4,
      q: "What occurs during Variable Hoisting with `var` vs `let`/`const`?",
      options: [
        "`var` is initialized with `undefined`, while `let`/`const` remain uninitialized in the Temporal Dead Zone (TDZ)",
        "`let` is hoisted to window while `var` is ignored",
        "Neither `var` nor `let` are hoisted in JavaScript",
        "`const` variables are hoisted as empty strings"
      ],
      ans: 0,
      exp: "`var` is hoisted and initialized as `undefined`. `let` and `const` are hoisted into TDZ; accessing them before declaration throws a ReferenceError."
    },
    {
      level: 5,
      q: "What is a closure in JavaScript and what is its primary real-world utility?",
      options: [
        "A function bundled together with references to its surrounding lexical scope, enabling data encapsulation and private variables",
        "A syntax error caused by unclosed curly braces",
        "A method to terminate web workers",
        "A database transaction lock in Node.js"
      ],
      ans: 0,
      exp: "Closures preserve access to outer variables even after the outer function has finished executing, enabling encapsulation."
    },
    {
      level: 5,
      q: "What does `Object.freeze()` achieve compared to `Object.seal()`?",
      options: [
        "`freeze()` prevents adding/deleting properties and makes existing properties read-only; `seal()` prevents adding/deleting but allows modifying existing writable values",
        "`seal()` makes all properties immutable while `freeze()` only deletes them",
        "Both methods are completely identical in ES6+",
        "`freeze()` converts objects into JSON strings"
      ],
      ans: 0,
      exp: "`Object.freeze()` marks all properties as non-writable and non-configurable, whereas `Object.seal()` only marks them as non-configurable."
    }
  ],

  "typescript": [
    {
      level: 1,
      q: "What is the primary benefit of TypeScript over vanilla JavaScript?",
      options: ["Compile-time static type checking", "Faster runtime execution speed", "Automatic database indexing", "Removing the need for CSS"],
      ans: 0,
      exp: "TypeScript introduces static types to catch bugs and type errors during compilation before code runs."
    },
    {
      level: 1,
      q: "Which file extension is standard for TypeScript React components?",
      options: [".tsx", ".ts", ".jsx", ".react"],
      ans: 0,
      exp: "`.tsx` files support JSX syntax alongside TypeScript static typing."
    },
    {
      level: 2,
      q: "Which keyword is used to declare custom object contracts in TypeScript?",
      options: ["interface", "schema", "struct", "contract"],
      ans: 0,
      exp: "The `interface` (and `type`) keywords define shape contracts for objects."
    },
    {
      level: 2,
      q: "How do you define an optional property `age` in a TypeScript interface?",
      options: ["age?: number;", "age!: number;", "optional age: number;", "age: number | null;"],
      ans: 0,
      exp: "The question mark `?:` syntax denotes an optional property."
    },
    {
      level: 3,
      q: "What does the `never` type represent in TypeScript?",
      options: [
        "Values that never occur (e.g. functions that always throw errors or exhaustive switch defaults)",
        "Variables that can accept any data type",
        "Variables initialized with null",
        "An optional parameter"
      ],
      ans: 0,
      exp: "`never` represents the type of values that never occur, useful for exhaustive type checking."
    },
    {
      level: 3,
      q: "What is a Union Type in TypeScript?",
      options: [
        "A type formed from two or more other types, representing values that may be any one of those types (e.g. `string | number`)",
        "A database JOIN between two interfaces",
        "A function that runs across multiple threads",
        "A type that can only be accessed by admin users"
      ],
      ans: 0,
      exp: "Union types `A | B` allow a variable to hold any value conforming to type A or type B."
    },
    {
      level: 4,
      q: "What are TypeScript Generics (`<T>`) used for?",
      options: [
        "Creating reusable components that work over a variety of types rather than a single fixed one",
        "Converting TypeScript to WebAssembly",
        "Defining CSS styling variables",
        "Generating automatic unit test assertions"
      ],
      ans: 0,
      exp: "Generics allow defining classes and functions with placeholder types that are specified at call time."
    },
    {
      level: 4,
      q: "What is the difference between `unknown` and `any` in TypeScript?",
      options: [
        "`unknown` is type-safe; you cannot perform arbitrary operations on it without type narrowing or assertions, whereas `any` disables all type checks",
        "`any` is strictly typed while `unknown` is not",
        "`unknown` only accepts strings and numbers",
        "There is no difference"
      ],
      ans: 0,
      exp: "`unknown` is the type-safe counterpart of `any` and forces developers to verify the type before performing operations."
    },
    {
      level: 5,
      q: "What is the utility of mapped types and conditional types (`T extends U ? X : Y`) in advanced TypeScript?",
      options: [
        "They enable dynamic type transformations, utility types (like `Partial<T>`, `Pick<T>`), and type-level computation at compile-time",
        "They evaluate boolean statements at runtime in the browser",
        "They connect TypeScript directly to PostgreSQL schemas",
        "They bundle JavaScript files into minified chunks"
      ],
      ans: 0,
      exp: "Conditional and mapped types allow powerful type-level metaprogramming and type inference."
    },
    {
      level: 5,
      q: "What does the `infer` keyword accomplish within a TypeScript conditional type?",
      options: [
        "It introduces a type variable to be deduced within the true branch of a conditional type (e.g. extracting Promise return types)",
        "It forces runtime type casting in production",
        "It guesses missing variable names in source code",
        "It logs debug messages to the terminal"
      ],
      ans: 0,
      exp: "`infer` enables type extraction from complex compound types (like `ReturnType<T>`)."
    }
  ],

  "django": [
    {
      level: 1,
      q: "What architectural design pattern does Django follow?",
      options: ["Model-View-Template (MVT)", "Model-View-Controller (MVC) only", "Microkernel architecture", "Event-driven mesh"],
      ans: 0,
      exp: "Django uses the MVT (Model-View-Template) architectural pattern where views handle logic and templates render HTML."
    },
    {
      level: 1,
      q: "Where are URL routes mapped to view functions in a standard Django project?",
      options: ["urls.py", "views.py", "settings.py", "models.py"],
      ans: 0,
      exp: "`urls.py` contains `urlpatterns` defining URL-to-view route mappings."
    },
    {
      level: 2,
      q: "Which command applies database migrations in Django?",
      options: ["python manage.py migrate", "python manage.py makemigrations", "python manage.py runserver", "python manage.py sync"],
      ans: 0,
      exp: "`python manage.py migrate` executes migration SQL files to synchronize the database schema."
    },
    {
      level: 2,
      q: "Which model field creates a Many-to-One relationship in Django models?",
      options: ["models.ForeignKey", "models.ManyToManyField", "models.OneToOneField", "models.CharField"],
      ans: 0,
      exp: "`ForeignKey` defines a Many-to-One relational link with another model."
    },
    {
      level: 3,
      q: "What Django feature protects forms against cross-site request forgery attacks?",
      options: ["{% csrf_token %}", "{% secure_form %}", "{% auth_guard %}", "{% xss_filter %}"],
      ans: 0,
      exp: "The `{% csrf_token %}` template tag injects a hidden token validated by Django's CSRF middleware."
    },
    {
      level: 3,
      q: "What is the purpose of Django's `get_object_or_404()` shortcut?",
      options: [
        "Calls `get()` on a given model manager, but raises `Http404` instead of `DoesNotExist` if object is missing",
        "Creates a new record if not found in database",
        "Redirects user to homepage on error",
        "Caches query results in Redis"
      ],
      ans: 0,
      exp: "`get_object_or_404` cleanly raises HTTP 404 when querying missing database objects."
    },
    {
      level: 4,
      q: "How do you prevent N+1 query bottlenecks in Django ORM when accessing foreign key and many-to-many relations?",
      options: [
        "Use `select_related()` for single foreign keys (SQL JOIN) and `prefetch_related()` for many-to-many sets",
        "Disable database indexing in models",
        "Execute raw SQL strings inside template tags",
        "Call `.all()` inside template loops"
      ],
      ans: 0,
      exp: "`select_related` performs SQL JOINs while `prefetch_related` does batch lookups to eliminate repetitive queries."
    },
    {
      level: 4,
      q: "What is Django's `F()` expression used for in ORM queries?",
      options: [
        "Performing database operations directly on model field values at the database level without loading them into Python memory",
        "Formatting HTML text in views",
        "Filtering foreign keys by primary key",
        "Creating fake test fixtures"
      ],
      ans: 0,
      exp: "`F()` expressions represent model fields in SQL queries directly, avoiding race conditions and reducing memory overhead."
    },
    {
      level: 5,
      q: "What is the role of Django Middleware in the request-response lifecycle?",
      options: [
        "A framework of hooks to globally process requests before views execute and responses before delivery",
        "A CSS preprocessing pipeline",
        "A tool for compiling Python to C++",
        "A database engine replacement"
      ],
      ans: 0,
      exp: "Middleware executes globally around every HTTP request and response in a configured pipeline order."
    },
    {
      level: 5,
      q: "How does Django handle atomic database transactions across multiple model write operations?",
      options: [
        "Using `transaction.atomic()` context manager or decorator to ensure all operations commit together or roll back on error",
        "By restarting the web server process",
        "By duplicating the database table in memory",
        "Using `models.commit_all()`"
      ],
      ans: 0,
      exp: "`transaction.atomic()` wraps operations in a transaction block, ensuring ACID rollback integrity upon any unhandled exception."
    }
  ],

  "sql": [
    {
      level: 1,
      q: "Which SQL clause is used to filter records according to specific conditions?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
      ans: 2,
      exp: "The `WHERE` clause specifies search conditions to filter rows returned by queries."
    },
    {
      level: 1,
      q: "Which SQL keyword is used to retrieve only unique, non-duplicate values?",
      options: ["DISTINCT", "UNIQUE", "DIFFERENT", "ISOLATE"],
      ans: 0,
      exp: "`SELECT DISTINCT` eliminates duplicate rows from the query output."
    },
    {
      level: 2,
      q: "Which JOIN returns all rows from the left table and matching rows from the right table?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      ans: 1,
      exp: "A `LEFT JOIN` preserves all rows from the left table, populating NULLs where right table matches are missing."
    },
    {
      level: 2,
      q: "What aggregate function counts the total number of rows matching a query?",
      options: ["COUNT()", "SUM()", "TOTAL()", "ROWS()"],
      ans: 0,
      exp: "`COUNT(*)` computes the total number of rows matching the query criteria."
    },
    {
      level: 3,
      q: "What is the key difference between WHERE and HAVING in SQL?",
      options: [
        "`HAVING` filters aggregated groups after `GROUP BY`, whereas `WHERE` filters individual rows before aggregation",
        "They are interchangeable in all database engines",
        "`WHERE` can only be used with numbers",
        "`HAVING` deletes matching rows permanently"
      ],
      ans: 0,
      exp: "`WHERE` filters individual rows prior to grouping, while `HAVING` filters aggregated metric groups."
    },
    {
      level: 3,
      q: "What does the SQL statement `UPDATE employees SET salary = salary * 1.10 WHERE dept = 'IT'` perform?",
      options: [
        "Increases the salary of all IT employees by 10%",
        "Deletes IT employees earning over 10% salary",
        "Selects 10 random IT employees",
        "Calculates 10% taxes for the company"
      ],
      ans: 0,
      exp: "`UPDATE` with `SET` modifies existing column values for rows matching the `WHERE` condition."
    },
    {
      level: 4,
      q: "What are ACID properties in relational database transactions?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Access, Control, Integrity, Distribution",
        "Async, Cached, Indexed, Dynamic",
        "Authentication, Cryptography, Identity, Directory"
      ],
      ans: 0,
      exp: "ACID guarantees that database transactions are processed reliably and safely without corruption."
    },
    {
      level: 4,
      q: "What is a SQL Window Function (e.g. `ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)`) used for?",
      options: [
        "Calculating running totals, rankings, and moving averages across row subsets without collapsing rows into a single group",
        "Opening a popup window in the database GUI",
        "Creating a virtual table backup on disk",
        "Restricting database access during business hours"
      ],
      ans: 0,
      exp: "Window functions calculate metrics across partitions while preserving individual row identity."
    },
    {
      level: 5,
      q: "What is database normalization and what is the primary objective of Third Normal Form (3NF)?",
      options: [
        "Eliminating transitive dependencies so every non-key attribute depends solely on the primary key, eliminating data redundancy",
        "Combining all tables into a single large spreadsheet table",
        "Encrypting table columns with SHA-256",
        "Compressing database backup files on disk"
      ],
      ans: 0,
      exp: "3NF ensures every non-key column depends on 'the key, the whole key, and nothing but the key' to prevent anomalies."
    },
    {
      level: 5,
      q: "How does a B-Tree index accelerate SELECT queries and what is its overhead during INSERT/UPDATE operations?",
      options: [
        "It provides logarithmic O(log N) lookup time for equality/range queries, but adds write overhead because index trees must rebalance on insertions",
        "It converts SQL tables into flat memory arrays with zero write overhead",
        "It prevents all deadlocks automatically across distributed nodes",
        "It only works on string columns"
      ],
      ans: 0,
      exp: "B-Tree indexes drastically speed up search queries, but require write maintenance on disk during inserts/updates."
    }
  ],

  "react": [
    {
      level: 1,
      q: "What is JSX in React development?",
      options: ["A syntax extension for JavaScript that looks similar to HTML", "A new database engine", "A CSS preprocessor", "A server management tool"],
      ans: 0,
      exp: "JSX allows writing HTML-like element structures within JavaScript files."
    },
    {
      level: 1,
      q: "How are data values passed from parent components down to child components in React?",
      options: ["Via props", "Via global cookies", "Via SQL queries", "Via HTML input attributes"],
      ans: 0,
      exp: "Props (properties) allow unidirectional data flow from parent to child components."
    },
    {
      level: 2,
      q: "Which React Hook is used to add local state to functional components?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      ans: 0,
      exp: "`useState` declares state variables and updater functions in functional components."
    },
    {
      level: 2,
      q: "Why must array items rendered with `.map()` in React have unique `key` props?",
      options: [
        "To help React identify which items have changed, been added, or removed during virtual DOM reconciliation",
        "To apply CSS styles automatically",
        "To sort items in alphabetical order",
        "To convert items into JSON"
      ],
      ans: 0,
      exp: "Keys provide stable identities for virtual DOM reconciliation algorithms."
    },
    {
      level: 3,
      q: "When does `useEffect(fn, [])` with an empty dependency array execute?",
      options: [
        "Once immediately after the component mounts to the DOM",
        "On every state change and re-render",
        "Only when the component unmounts",
        "Never"
      ],
      ans: 0,
      exp: "An empty dependency array `[]` tells React to run the effect once after the initial mount."
    },
    {
      level: 3,
      q: "What is the primary purpose of the React Context API?",
      options: [
        "Sharing state globally across component trees without having to pass props manually at every level ('prop drilling')",
        "Connecting directly to MySQL databases",
        "Compiling JSX into native mobile bytecode",
        "Generating automatic unit tests"
      ],
      ans: 0,
      exp: "Context allows passing data through the component tree without prop drilling."
    },
    {
      level: 4,
      q: "What does `useCallback(fn, deps)` accomplish in performance optimization?",
      options: [
        "It returns a memoized version of the callback function that only changes if dependencies change, preventing unnecessary child re-renders",
        "It executes functions asynchronously in web workers",
        "It caches network API responses in browser localStorage",
        "It cancels ongoing HTTP fetch requests"
      ],
      ans: 0,
      exp: "`useCallback` prevents recreating callback references across renders unless dependencies change."
    },
    {
      level: 4,
      q: "What is the difference between controlled and uncontrolled components in React forms?",
      options: [
        "Controlled components have their form data handled by React state, while uncontrolled components keep form data in the DOM (via refs)",
        "Controlled components require Redux store while uncontrolled do not",
        "Uncontrolled components cannot submit data",
        "There is no difference"
      ],
      ans: 0,
      exp: "Controlled components bind their values directly to React state with `value` and `onChange`."
    },
    {
      level: 5,
      q: "How does React 18 Concurrent Mode (and `useTransition`) improve UI responsiveness?",
      options: [
        "It allows React to interrupt non-urgent background state updates so high-priority user interactions (typing, clicking) stay smooth and unblocked",
        "It runs multiple browser processes on separate GPUs",
        "It replaces the Virtual DOM with direct WebAssembly DOM manipulation",
        "It automatically minifies JavaScript in production"
      ],
      ans: 0,
      exp: "Concurrent features prioritize urgent updates over background transitions to prevent UI stutter."
    },
    {
      level: 5,
      q: "What are React Server Components (RSC) and how do they differ from traditional Client Components?",
      options: [
        "RSC execute exclusively on the server, stream HTML/JSON payloads without shipping JavaScript bundle weight to the browser",
        "RSC only work on mobile devices",
        "RSC require Node.js child worker forks on every click",
        "RSC are deprecated in React 19"
      ],
      ans: 0,
      exp: "Server Components render on the server with zero client bundle impact, accessing databases directly."
    }
  ],

  "aws cloud": [
    {
      level: 1,
      q: "What type of cloud computing service model is Amazon EC2?",
      options: ["Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Function as a Service only", "Platform as a Service only"],
      ans: 0,
      exp: "EC2 provides resizable virtual compute infrastructure (IaaS) in the cloud."
    },
    {
      level: 1,
      q: "Which AWS storage service provides object storage with 99.999999999% (11 9's) durability?",
      options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Snowball"],
      ans: 0,
      exp: "Amazon Simple Storage Service (S3) provides highly durable object storage."
    },
    {
      level: 2,
      q: "Which AWS service enables running serverless code functions in response to events without provisioning servers?",
      options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "AWS Lightsail"],
      ans: 0,
      exp: "AWS Lambda executes code serverlessly on demand based on triggers."
    },
    {
      level: 2,
      q: "Which AWS service manages user authentication, permissions, and security roles across AWS resources?",
      options: ["AWS IAM (Identity and Access Management)", "AWS CloudWatch", "AWS CloudTrail", "AWS Route 53"],
      ans: 0,
      exp: "IAM securely controls identities, access keys, and resource policies across AWS."
    },
    {
      level: 3,
      q: "What is an AWS VPC (Virtual Private Cloud)?",
      options: [
        "A logically isolated virtual network dedicated to your AWS account where you launch AWS resources",
        "A physical server in an Amazon warehouse",
        "A private email service for corporations",
        "An encrypted USB flash drive"
      ],
      ans: 0,
      exp: "VPC provides isolated private networking with subnets, route tables, and security groups."
    },
    {
      level: 3,
      q: "What is the primary difference between AWS Security Groups and Network ACLs?",
      options: [
        "Security Groups are stateful firewalls at the instance level; Network ACLs are stateless firewalls at the subnet level",
        "Security Groups are stateless while NACLs are stateful",
        "NACLs only inspect outgoing traffic",
        "There is no difference"
      ],
      ans: 0,
      exp: "Security Groups track connection states automatically; NACLs evaluate rules explicitly in order."
    },
    {
      level: 4,
      q: "How does an Application Load Balancer (ALB) route incoming traffic compared to a Network Load Balancer (NLB)?",
      options: [
        "ALB operates at Layer 7 (HTTP/HTTPS) supporting path-based routing; NLB operates at Layer 4 (TCP/UDP) for ultra-low latency and extreme throughput",
        "ALB only supports UDP traffic",
        "NLB decrypts SSL certificates on every request",
        "ALB cannot route traffic to EC2 instances"
      ],
      ans: 0,
      exp: "ALBs inspect Layer 7 headers/paths while NLBs handle millions of requests per second at Layer 4."
    },
    {
      level: 4,
      q: "What AWS service provides automated Infrastructure as Code (IaC) templating?",
      options: ["AWS CloudFormation", "AWS CodeCommit", "AWS Direct Connect", "Amazon RDS"],
      ans: 0,
      exp: "CloudFormation allows modeling entire infrastructure stacks in JSON or YAML."
    },
    {
      level: 5,
      q: "How do you architect a highly available, multi-region disaster recovery strategy in AWS with minimal RTO and RPO?",
      options: [
        "Active-Active Multi-Region deployment with Route 53 latency routing, DynamoDB Global Tables, and S3 Cross-Region Replication (CRR)",
        "Single EC2 instance with nightly manual backups",
        "Storing backup disks in a local office safe",
        "Running all instances in a single availability zone"
      ],
      ans: 0,
      exp: "Multi-region Active-Active architecture with global replication achieves near-zero recovery time."
    },
    {
      level: 5,
      q: "In AWS Well-Architected Framework, which pillar focuses on structured monitoring, automated incident remediation, and continuous improvement?",
      options: ["Operational Excellence", "Cost Optimization only", "Performance Efficiency only", "Reliability only"],
      ans: 0,
      exp: "The Operational Excellence pillar focuses on running and monitoring systems to deliver business value."
    }
  ],

  "microsoft excel": [
    {
      level: 1,
      q: "Which symbol must precede all mathematical formulas and functions in Excel?",
      options: ["=", "@", "#", "$"],
      ans: 0,
      exp: "Formulas in Excel must begin with the `=` equals sign."
    },
    {
      level: 1,
      q: "What formula calculates the arithmetic average of numbers in cells A1 through A10?",
      options: ["=AVERAGE(A1:A10)", "=MEAN(A1:A10)", "=SUM(A1:A10)/10", "=AVG(A1:A10)"],
      ans: 0,
      exp: "`=AVERAGE(A1:A10)` computes the mathematical average."
    },
    {
      level: 2,
      q: "What does the `$` symbol represent in an Excel cell reference like `$A$1`?",
      options: [
        "Absolute cell reference that remains locked when copying the formula across cells",
        "Currency formatting as US Dollars",
        "A hidden cell error",
        "A password protected cell"
      ],
      ans: 0,
      exp: "`$` locks row and column coordinates so they do not shift when formulas are dragged."
    },
    {
      level: 2,
      q: "Which feature in Excel allows you to automatically color cells based on their values (e.g. green for > 100)?",
      options: ["Conditional Formatting", "Data Validation", "Text to Columns", "AutoFit"],
      ans: 0,
      exp: "Conditional Formatting dynamically alters fill and font colors based on specified criteria."
    },
    {
      level: 3,
      q: "What is the modern, more versatile replacement for `VLOOKUP` introduced in Excel 365?",
      options: ["XLOOKUP", "HLOOKUP", "INDEX_MATCH_V2", "SUPERLOOKUP"],
      ans: 0,
      exp: "`XLOOKUP` looks in any direction, defaults to exact match, and handles missing columns seamlessly."
    },
    {
      level: 3,
      q: "What tool in Excel allows summarizing, sorting, counting, and grouping large raw datasets without writing formulas?",
      options: ["Pivot Tables", "Flash Fill", "Goal Seek", "Solver"],
      ans: 0,
      exp: "Pivot Tables summarize complex multidimensional data through drag-and-drop aggregation."
    },
    {
      level: 4,
      q: "How does the combination of `INDEX()` and `MATCH()` overcome limitations of traditional `VLOOKUP`?",
      options: [
        "`INDEX/MATCH` can look up values to the left of the lookup column and is not broken when columns are inserted or deleted",
        "`INDEX/MATCH` only works on numbers",
        "`VLOOKUP` is faster in large datasets over 1 million rows",
        "There is no difference"
      ],
      ans: 0,
      exp: "`INDEX/MATCH` decouples row search from column retrieval, enabling dynamic left-lookups and resilience to column shifts."
    },
    {
      level: 4,
      q: "What does the formula `=SUMIFS(C2:C100, A2:A100, \"North\", B2:B100, \">1000\")` compute?",
      options: [
        "Sums sales in column C where region in column A is 'North' AND amount in column B exceeds 1000",
        "Multiplies all numbers in columns A, B, and C",
        "Counts the number of cells containing North",
        "Deletes records exceeding 1000"
      ],
      ans: 0,
      exp: "`SUMIFS` sums values satisfying multiple simultaneous criteria across different ranges."
    },
    {
      level: 5,
      q: "What is Excel Power Query and what is its primary role in modern corporate business intelligence?",
      options: [
        "An ETL (Extract, Transform, Load) engine used to automate data extraction, cleansing, transformation, and merging from disparate sources",
        "A 3D charting engine for presentations",
        "A formula debugging plugin",
        "An email notification system"
      ],
      ans: 0,
      exp: "Power Query automates repetitive data transformation pipelines and connects to external APIs and databases."
    },
    {
      level: 5,
      q: "What are Dynamic Array formulas (e.g. `FILTER`, `UNIQUE`, `SORT`) and how does 'Spill' behavior work in modern Excel?",
      options: [
        "Formulas that return multiple calculated results automatically spilling into adjacent cells without manual CSE matrix arrays",
        "Formulas that corrupt workbook memory",
        "Legacy macros written in VBA only",
        "Temporary preview modes in web browsers"
      ],
      ans: 0,
      exp: "Dynamic array formulas return arrays that automatically spill into neighboring unoccupied cells."
    }
  ],

  "customer service orientation": [
    {
      level: 1,
      q: "What is the primary foundation of professional customer service?",
      options: [
        "Active listening, clear empathetic communication, and resolving customer inquiries efficiently",
        "Transferring every call to supervisors immediately",
        "Reciting company rules without addressing the customer's problem",
        "Ending interactions as quickly as possible without resolution"
      ],
      ans: 0,
      exp: "Empathy, active listening, and solution-oriented communication are the core foundations."
    },
    {
      level: 1,
      q: "What tone of voice is appropriate when answering an inquiry from a frustrated client?",
      options: ["Calm, empathetic, professional, and reassuring", "Defensive and aggressive", "Monotone and dismissive", "Silent"],
      ans: 0,
      exp: "A calm, reassuring tone de-escalates tension and demonstrates genuine commitment to resolving the issue."
    },
    {
      level: 2,
      q: "What is the recommended response when you do not know the answer to a customer's specific question?",
      options: [
        "Acknowledge the inquiry honestly and commit to finding the exact information promptly",
        "Guess an answer to sound knowledgeable",
        "Tell the customer it is not your job",
        "Disconnect the interaction"
      ],
      ans: 0,
      exp: "Honesty paired with immediate proactive research builds credibility and trust."
    },
    {
      level: 2,
      q: "What does the HEAT or LAST model represent in conflict de-escalation?",
      options: [
        "Hear / Empathize / Apologize / Take Action",
        "Hurry / Explain / Argue / Terminate",
        "Hold / Escalate / Abandon / Transfer",
        "Help / Ask / Silence / Talk"
      ],
      ans: 0,
      exp: "Listening, showing empathy, offering a sincere apology for frustration, and executing concrete corrective action is the gold standard."
    },
    {
      level: 3,
      q: "How should a customer care specialist handle an upset caller who is venting frustrations?",
      options: [
        "Listen actively without interrupting, validate their emotions, and transition smoothly toward actionable solutions",
        "Interrupt immediately and tell them to calm down",
        "Mute the microphone until they finish speaking",
        "Argue each point defensively"
      ],
      ans: 0,
      exp: "Allowing the customer to vent without interruption validates their concern before problem-solving."
    },
    {
      level: 3,
      q: "What metric is commonly used in BPO and customer support to measure the percentage of issues resolved in the initial contact?",
      options: ["First Contact Resolution (FCR)", "Average Handle Time (AHT) only", "Abandonment Rate", "Cost per Lead"],
      ans: 0,
      exp: "FCR measures resolution efficiency without requiring follow-up callbacks or transfers."
    },
    {
      level: 4,
      q: "When a major product outage impacts thousands of customers, what is the best proactive communication strategy?",
      options: [
        "Provide transparent updates, set realistic turnaround expectations, acknowledge impact, and provide workaround alternatives",
        "Deny that any outage is occurring",
        "Turn off phone lines and chat portals",
        "Blame third-party software vendors publicly"
      ],
      ans: 0,
      exp: "Proactive, transparent communication mitigates panic and preserves client trust during service disruptions."
    },
    {
      level: 4,
      q: "How do Customer Satisfaction Score (CSAT) and Net Promoter Score (NPS) differ in measuring customer loyalty?",
      options: [
        "CSAT measures short-term satisfaction with a specific recent interaction; NPS measures long-term brand loyalty and likelihood to recommend",
        "CSAT is for employees while NPS is for shareholders",
        "NPS only measures website loading speed",
        "There is no difference between them"
      ],
      ans: 0,
      exp: "CSAT is transactional, while NPS reflects holistic long-term advocacy."
    },
    {
      level: 5,
      q: "What strategy successfully transforms customer support from a cost center into a strategic value driver for an organization?",
      options: [
        "Synthesizing customer feedback trends to guide product development, reducing customer churn, and enabling customer lifetime value growth",
        "Cutting staffing by 75% to minimize operational expenses",
        "Restricting customer inquiries to email only",
        "Automating all interactions with generic non-responsive bots"
      ],
      ans: 0,
      exp: "Strategic customer care teams feed insights into product engineering and retention strategies."
    },
    {
      level: 5,
      q: "In an omnichannel enterprise environment, how do you maintain seamless service continuity when customers transition across phone, chat, and email?",
      options: [
        "Unified CRM architecture that syncs conversation history, context, and previous ticket notes in real time for any attending agent",
        "Requiring the customer to repeat their entire story on every channel",
        "Treating each support channel as an isolated silo",
        "Deleting tickets once closed"
      ],
      ans: 0,
      exp: "Omnichannel platforms centralize interaction history to provide frictionless customer experiences."
    }
  ]
};

// Aliases for common skill name variations
const SKILL_ALIASES = {
  "py": "python",
  "js": "javascript",
  "ts": "typescript",
  "postgres": "postgresql",
  "reactjs": "react",
  "react.js": "react",
  "vue": "vue.js",
  "aws": "aws cloud",
  "amazon web services": "aws cloud",
  "first aid": "first aid & cpr",
  "cpr": "first aid & cpr",
  "basic first aid": "first aid & cpr",
  "customer service": "customer service orientation",
  "customer care": "customer service orientation",
  "bookkeeping": "basic bookkeeping",
  "basic bookkeeping software": "basic bookkeeping",
  "excel": "microsoft excel",
  "electrical installation": "electrical installation & maintenance",
  "housekeeping & janitorial work": "housekeeping"
};

/**
 * High-Accuracy 10-Question Dynamic Generator for Any Skill in the Catalog (2 per Level)
 */
function generateCategorySkillQuestions(skillName, category) {
  const c = (category || 'General').toLowerCase();

  // Tier 1: Foundations & Definitions (Questions 1 & 2)
  const q1 = {
    level: 1,
    q: `What is the core principle and primary objective of ${skillName}?`,
    options: [
      `Applying standardized workflows, fundamental theory, and industry best practices in ${skillName}`,
      `A theoretical framework with no practical application in real workplaces`,
      `A legacy process that has been entirely phased out of modern workflows`,
      `An unstructured guesswork method without standardized rules`
    ],
    ans: 0,
    exp: `${skillName} requires a solid foundation in core industry terminology, workflows, and quality benchmarks.`
  };

  const q2 = {
    level: 1,
    q: `Which foundational terminology or concept is essential for any beginner starting in ${skillName}?`,
    options: [
      `Understanding core concepts, data/resource inputs, and expected standard outputs`,
      `Bypassing foundational basics and executing complex operations without safety checks`,
      `Memorizing trivia without understanding practical usage`,
      `Working strictly in isolation without guidelines`
    ],
    ans: 0,
    exp: `Foundational mastery begins with mastering the core principles and standard input/output expectations.`
  };

  // Tier 2: Tools, Standard Procedures & Syntax (Questions 3 & 4)
  let q3_opts = [];
  let q4_opts = [];

  if (c.includes('dev') || c.includes('it') || c.includes('software') || c.includes('code')) {
    q3_opts = [
      `Utilizing version control, syntax linters, debugging consoles, and structured environment configs`,
      `Hardcoding database passwords directly in public repositories`,
      `Disabling all unit testing suites to accelerate deployments`,
      `Ignoring compiler warnings and runtime exceptions`
    ];
    q4_opts = [
      `Following structured naming conventions, modular design patterns, and clean code documentation`,
      `Writing monolithic 5,000-line functions with global variables`,
      `Deploying directly to production without testing on staging`,
      `Copying and pasting code without verifying licensing or security`
    ];
  } else if (c.includes('trade') || c.includes('vocational') || c.includes('tesda') || c.includes('eng')) {
    q3_opts = [
      `Conducting equipment calibration, wearing approved PPE gear, and inspecting blueprints/specifications`,
      `Operating high-voltage or heavy equipment without protective gear`,
      `Modifying machine safeguards without engineering approval`,
      `Skipping pre-operational safety checklists`
    ];
    q4_opts = [
      `Executing systematic quality inspection steps before, during, and after material processing`,
      `Forcing misaligned components together using excessive pressure`,
      `Using dull or damaged cutting blades to save tool costs`,
      `Disregarding manufacturer load limits`
    ];
  } else if (c.includes('med') || c.includes('health') || c.includes('care')) {
    q3_opts = [
      `Adhering strictly to clinical hygiene protocols, verifying patient identification, and recording vital signs`,
      `Administering medication without checking patient allergy history`,
      `Reusing single-use disposable medical supplies`,
      `Ignoring standard biohazard disposal regulations`
    ];
    q4_opts = [
      `Following sterile barrier techniques and standard documentation in electronic health records (EHR)`,
      `Falsifying patient observation logs to save time`,
      `Sharing confidential patient medical records on public channels`,
      `Leaving medication storage cabinets unlocked`
    ];
  } else {
    q3_opts = [
      `Executing systematic operational checklists, maintaining clear records, and utilizing standard software tools`,
      `Proceeding without tracking tasks or recording milestones`,
      `Skipping verification and quality check stages`,
      `Relying entirely on manual guesswork`
    ];
    q4_opts = [
      `Adhering to standard operating procedures (SOPs) and coordinating deliverables across team members`,
      `Working in silos without communicating schedule delays`,
      `Discarding client guidelines in favor of personal preferences`,
      `Ignoring deadlines and quality parameters`
    ];
  }

  const q3 = {
    level: 2,
    q: `Which procedural standard is essential when executing routine daily tasks in ${skillName}?`,
    options: q3_opts,
    ans: 0,
    exp: `Standard operating procedures and proper equipment/tool usage ensure consistent, repeatable, and safe results.`
  };

  const q4 = {
    level: 2,
    q: `When configuring tools, parameters, or environments for ${skillName}, what is the best practice?`,
    options: q4_opts,
    ans: 0,
    exp: `Proper configuration and adhering to standard conventions prevents errors and ensures maintainability.`
  };

  // Tier 3: Practical Application & Workflows (Questions 5 & 6)
  const q5 = {
    level: 3,
    q: `In a live operational environment, how is ${skillName} applied for maximum execution efficiency?`,
    options: [
      `By planning task sequences logically, verifying quality checkpoints, and maintaining proactive team communication`,
      `By rushing execution at the expense of safety and precision`,
      `By working in isolation without logging progress`,
      `By discarding documentation to save time`
    ],
    ans: 0,
    exp: `Intermediate competency focuses on smooth execution, proactive coordination, and high quality delivery.`
  };

  const q6 = {
    level: 3,
    q: `When integrating ${skillName} into a multi-disciplinary project workflow, what ensures smooth interoperability?`,
    options: [
      `Adhering to shared data standards, structured interfaces, and clear milestone deliverables`,
      `Refusing to share data formats with external departments`,
      `Constantly changing specifications without notice`,
      `Operating independently of overall project deadlines`
    ],
    ans: 0,
    exp: `Level 3 practitioners collaborate effectively and ensure their outputs seamlessly interface with broader workflows.`
  };

  // Tier 4: Troubleshooting, Diagnostics & Optimization (Questions 7 & 8)
  const q7 = {
    level: 4,
    q: `When unexpected defects, bottlenecks, or errors arise in ${skillName}, what is the most effective diagnostic approach?`,
    options: [
      `Systematically isolating variables, analyzing root causes through diagnostic logs/checklists, and implementing targeted corrective measures`,
      `Restarting the entire project from scratch without investigating root causes`,
      `Concealing the defect from supervisors and proceeding blindly`,
      `Randomly changing parameters until symptoms temporarily disappear`
    ],
    ans: 0,
    exp: `Advanced practitioners systematically diagnose root causes using structured troubleshooting and verification.`
  };

  const q8 = {
    level: 4,
    q: `How does an advanced practitioner optimize resource usage and throughput in ${skillName}?`,
    options: [
      `By profiling performance metrics, identifying critical path bottlenecks, and eliminating redundant operational waste`,
      `By doubling resource consumption regardless of cost`,
      `By skipping quality assurance stages to artificial speed up delivery`,
      `By reducing safety buffers below regulatory minimums`
    ],
    ans: 0,
    exp: `Level 4 proficiency requires balancing performance optimization, cost-efficiency, and rigorous quality standards.`
  };

  // Tier 5: Architecture, Strategy, Governance & Innovation (Questions 9 & 10)
  const q9 = {
    level: 5,
    q: `What demonstrates an Expert (Level 5) mastery in ${skillName}?`,
    options: [
      `Architecting robust scalable systems, optimizing operational workflows, enforcing compliance, and mentoring junior team members`,
      `Memorizing basic definitions without practical problem-solving capability`,
      `Requiring constant supervision to complete routine daily tasks`,
      `Executing work strictly to the minimum standard without continuous improvement`
    ],
    ans: 0,
    exp: `Expert proficiency encompasses leadership, strategic optimization, proactive risk mitigation, and continuous innovation in ${skillName}.`
  };

  const q10 = {
    level: 5,
    q: `When designing long-term enterprise strategies or handling critical disaster recovery in ${skillName}, what is the key priority?`,
    options: [
      `Establishing resilient fail-safe architectures, comprehensive risk mitigation policies, and continuous auditability`,
      `Assuming failures will never occur in production`,
      `Eliminating all backup procedures to save cloud costs`,
      `Relying on a single individual without knowledge transfer`
    ],
    ans: 0,
    exp: `Level 5 experts build resilience, governance frameworks, and high-reliability systems capable of withstanding edge-case failures.`
  };

  return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
}

/**
 * Main Assessment Engine Helper Functions
 */
function getQuestionsForSkill(skillName, category) {
  const normalized = (skillName || '').toLowerCase().trim();
  
  if (SKILL_QUESTION_BANKS[normalized]) {
    return SKILL_QUESTION_BANKS[normalized];
  }

  // Check alias lookup
  if (SKILL_ALIASES[normalized] && SKILL_QUESTION_BANKS[SKILL_ALIASES[normalized]]) {
    return SKILL_QUESTION_BANKS[SKILL_ALIASES[normalized]];
  }

  // Partial substring matching
  for (const key in SKILL_QUESTION_BANKS) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return SKILL_QUESTION_BANKS[key];
    }
  }

  // Fallback to intelligent category-driven question generator
  return generateCategorySkillQuestions(skillName, category);
}

// Global state for ongoing assessment
let activeSkillAssessment = {
  skillName: '',
  skillId: '',
  category: '',
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  score: 0,
  calculatedLevel: 1
};

/**
 * Opens Assessment Modal and presents the Step 1 Notice Screen
 */
function openSkillAssessmentModal(skillName, skillId, currentProficiency, category) {
  activeSkillAssessment.skillName = skillName;
  activeSkillAssessment.skillId = skillId;
  activeSkillAssessment.category = category || 'General';
  activeSkillAssessment.currentIndex = 0;
  activeSkillAssessment.userAnswers = [];
  activeSkillAssessment.score = 0;

  // Set Modal Headers & Notice Text
  const titleEl = document.getElementById('assessmentModalTitle');
  const subEl = document.getElementById('assessmentSkillNameSubtitle');
  const noticeSkillEl = document.getElementById('assessmentNoticeSkillName');
  const resultSkillEl = document.getElementById('resultSkillName');

  if (titleEl) titleEl.innerText = `${skillName} Proficiency Assessment`;
  if (subEl) subEl.innerText = skillName;
  if (noticeSkillEl) noticeSkillEl.innerText = skillName;
  if (resultSkillEl) resultSkillEl.innerText = skillName;

  // Show Step 1 (Notice State) and hide other states
  document.getElementById('assessmentNoticeState').classList.remove('hidden');
  document.getElementById('assessmentQuizState').classList.add('hidden');
  document.getElementById('assessmentResultState').classList.add('hidden');

  // Open Modal overlay
  const modal = document.getElementById('skillAssessmentModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

/**
 * Closes the modal
 */
function closeSkillAssessmentModal() {
  const modal = document.getElementById('skillAssessmentModal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

/**
 * Transitions from Step 1 Notice into Step 2 Quiz State
 */
function startProficiencyAssessment() {
  activeSkillAssessment.questions = getQuestionsForSkill(
    activeSkillAssessment.skillName, 
    activeSkillAssessment.category
  );
  activeSkillAssessment.currentIndex = 0;
  activeSkillAssessment.userAnswers = new Array(activeSkillAssessment.questions.length).fill(null);

  // Switch views
  document.getElementById('assessmentNoticeState').classList.add('hidden');
  document.getElementById('assessmentQuizState').classList.remove('hidden');
  document.getElementById('assessmentResultState').classList.add('hidden');

  renderAssessmentQuestion();
}

/**
 * Utility to safely escape HTML special characters (<, >, &, ", ')
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Renders the active question with responsive multiple choice options
 */
function renderAssessmentQuestion() {
  const total = activeSkillAssessment.questions.length;
  const current = activeSkillAssessment.questions[activeSkillAssessment.currentIndex];
  const percent = Math.round(((activeSkillAssessment.currentIndex + 1) / total) * 100);

  const trackerEl = document.getElementById('quizQuestionTracker');
  const percentEl = document.getElementById('quizPercentTracker');
  const progressEl = document.getElementById('quizProgressBar');
  const textEl = document.getElementById('quizQuestionText');
  const container = document.getElementById('quizOptionsContainer');

  const difficultyLevel = current.level || Math.min(5, Math.ceil((activeSkillAssessment.currentIndex + 1) / 2));

  if (trackerEl) trackerEl.innerText = `Question ${activeSkillAssessment.currentIndex + 1} of ${total} (Level ${difficultyLevel} Difficulty)`;
  if (percentEl) percentEl.innerText = `${percent}%`;
  if (progressEl) progressEl.style.width = `${percent}%`;
  if (textEl) textEl.innerText = current.q;

  if (container) {
    container.innerHTML = '';
    current.options.forEach((opt, idx) => {
      const isSelected = activeSkillAssessment.userAnswers[activeSkillAssessment.currentIndex] === idx;
      const btn = document.createElement('div');
      btn.className = `p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
        isSelected 
          ? 'bg-secondary/10 border-secondary text-secondary font-bold shadow-2xs' 
          : 'bg-surface-container-low hover:bg-surface-container border-outline-variant/60 text-on-surface font-medium'
      }`;
      btn.onclick = () => selectAssessmentOption(idx);
      btn.innerHTML = `
        <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
          isSelected ? 'border-secondary bg-secondary text-white' : 'border-outline'
        }">
          ${isSelected ? '<span class="material-symbols-outlined text-xs">check</span>' : ''}
        </div>
        <span class="text-xs leading-relaxed flex-1 text-on-surface font-medium">${escapeHtml(opt)}</span>
      `;
      container.appendChild(btn);
    });
  }

  const nextBtn = document.getElementById('quizNextBtn');
  const nextBtnText = document.getElementById('quizNextBtnText');
  if (nextBtn) {
    nextBtn.disabled = activeSkillAssessment.userAnswers[activeSkillAssessment.currentIndex] === null;
  }
  if (nextBtnText) {
    nextBtnText.innerText = activeSkillAssessment.currentIndex === total - 1 ? 'Calculate Proficiency' : 'Next Question';
  }
}

/**
 * Handles option selection
 */
function selectAssessmentOption(optIndex) {
  activeSkillAssessment.userAnswers[activeSkillAssessment.currentIndex] = optIndex;
  renderAssessmentQuestion();
}

/**
 * Advances to next question or calculates results
 */
function nextAssessmentQuestion() {
  if (activeSkillAssessment.userAnswers[activeSkillAssessment.currentIndex] === null) return;

  if (activeSkillAssessment.currentIndex < activeSkillAssessment.questions.length - 1) {
    activeSkillAssessment.currentIndex++;
    renderAssessmentQuestion();
  } else {
    calculateAssessmentResults();
  }
}

/**
 * Calculates in-depth multi-tier proficiency score and renders interactive diagnostic review
 */
function calculateAssessmentResults() {
  let correctCount = 0;
  const totalQuestions = activeSkillAssessment.questions.length;
  
  // Tier breakdown metrics
  let foundationsScore = 0; // L1-L2 (4 Qs)
  let appliedScore = 0;      // L3 (2 Qs)
  let diagnosticScore = 0;   // L4 (2 Qs)
  let expertScore = 0;       // L5 (2 Qs)

  activeSkillAssessment.questions.forEach((q, idx) => {
    const userChoice = activeSkillAssessment.userAnswers[idx];
    const isCorrect = userChoice === q.ans;
    if (isCorrect) {
      correctCount++;
      const lvl = q.level || 1;
      if (lvl <= 2) foundationsScore++;
      else if (lvl === 3) appliedScore++;
      else if (lvl === 4) diagnosticScore++;
      else if (lvl >= 5) expertScore++;
    }
  });

  // Accurate calibrated level conversion (10-question matrix)
  // 9-10 => Level 5 (Expert)
  // 7-8  => Level 4 (Advanced)
  // 5-6  => Level 3 (Intermediate)
  // 3-4  => Level 2 (Elementary)
  // 0-2  => Level 1 (Beginner)
  let calculatedLevel = 1;
  if (totalQuestions === 10) {
    if (correctCount >= 9) calculatedLevel = 5;
    else if (correctCount >= 7) calculatedLevel = 4;
    else if (correctCount >= 5) calculatedLevel = 3;
    else if (correctCount >= 3) calculatedLevel = 2;
    else calculatedLevel = 1;
  } else {
    calculatedLevel = Math.max(1, Math.min(5, correctCount));
  }

  activeSkillAssessment.calculatedLevel = calculatedLevel;

  const levelLabels = {
    1: 'Beginner (1/5)',
    2: 'Elementary (2/5)',
    3: 'Intermediate (3/5)',
    4: 'Advanced (4/5)',
    5: 'Expert (5/5)'
  };

  const levelBadgeColors = {
    1: 'bg-surface-container text-on-surface border-outline-variant/60',
    2: 'bg-blue-50 text-blue-700 border-blue-200',
    3: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    4: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    5: 'bg-amber-50 text-amber-800 border-amber-300'
  };

  // Render Result UI
  document.getElementById('assessmentNoticeState').classList.add('hidden');
  document.getElementById('assessmentQuizState').classList.add('hidden');
  document.getElementById('assessmentResultState').classList.remove('hidden');

  const titleEl = document.getElementById('resultLevelTitle');
  const scoreEl = document.getElementById('resultScoreSummary');
  const dotsContainer = document.getElementById('resultDotsContainer');
  const breakdownContainer = document.getElementById('resultBreakdownContainer');

  const percentScore = Math.round((correctCount / totalQuestions) * 100);

  if (titleEl) titleEl.innerText = levelLabels[calculatedLevel];
  if (scoreEl) {
    scoreEl.innerHTML = `
      <div class="font-bold text-on-surface">Overall Score: ${correctCount} / ${totalQuestions} Correct (${percentScore}%)</div>
      <div class="flex justify-center flex-wrap gap-2 pt-2 text-[10px] font-bold">
        <span class="px-2 py-0.5 rounded-md bg-blue-100/80 text-blue-900 border border-blue-200">Foundations: ${foundationsScore}/4</span>
        <span class="px-2 py-0.5 rounded-md bg-emerald-100/80 text-emerald-900 border border-emerald-200">Execution: ${appliedScore}/2</span>
        <span class="px-2 py-0.5 rounded-md bg-indigo-100/80 text-indigo-900 border border-indigo-200">Diagnostics: ${diagnosticScore}/2</span>
        <span class="px-2 py-0.5 rounded-md bg-amber-100/80 text-amber-900 border border-amber-200">Architecture: ${expertScore}/2</span>
      </div>
    `;
  }

  // Render Level Indicator Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const dot = document.createElement('div');
      dot.className = `w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${
        i <= calculatedLevel ? 'bg-secondary text-white shadow-xs scale-110' : 'bg-surface-container-highest text-on-surface-variant/40'
      }`;
      dot.innerText = i;
      dotsContainer.appendChild(dot);
    }
  }

  // Render Question-by-Question Review Breakdown
  if (breakdownContainer) {
    breakdownContainer.innerHTML = '';
    activeSkillAssessment.questions.forEach((q, idx) => {
      const userChoice = activeSkillAssessment.userAnswers[idx];
      const isCorrect = userChoice === q.ans;
      const userText = (userChoice !== null && q.options[userChoice]) ? q.options[userChoice] : 'Not answered';
      const correctText = q.options[q.ans];

      const item = document.createElement('div');
      item.className = `p-3 rounded-xl border text-left space-y-1.5 ${
        isCorrect ? 'bg-green-50/60 border-green-200' : 'bg-red-50/60 border-red-200'
      }`;

      item.innerHTML = `
        <div class="flex items-start justify-between gap-2">
          <div class="font-bold text-xs text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] ${isCorrect ? 'text-green-700' : 'text-red-600'}">
              ${isCorrect ? 'check_circle' : 'cancel'}
            </span>
            <span>Q${idx + 1} (L${q.level || 1}): ${escapeHtml(q.q)}</span>
          </div>
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0 ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }">
            ${isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
          </span>
        </div>
        <div class="text-[11px] text-on-surface-variant pl-6 space-y-0.5">
          <div><strong class="text-on-surface">Your Answer:</strong> ${escapeHtml(userText)}</div>
          ${!isCorrect ? `<div class="text-green-800 font-medium"><strong>Correct Answer:</strong> ${escapeHtml(correctText)}</div>` : ''}
          ${q.exp ? `<div class="text-[10px] italic text-on-surface-variant/80 pt-0.5">💡 ${escapeHtml(q.exp)}</div>` : ''}
        </div>
      `;
      breakdownContainer.appendChild(item);
    });
  }

  // Submit assessment payload to Django backend
  const csrfToken = getCsrfToken();
  fetch("/applicant/skill-assessment/submit/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken
    },
    body: JSON.stringify({
      skill_name: activeSkillAssessment.skillName,
      skill_id: activeSkillAssessment.skillId,
      score: calculatedLevel,
      correct_answers: correctCount,
      total_questions: totalQuestions
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      // Live update the card badge on the applicant profile screen
      if (activeSkillAssessment.skillId) {
        const badge = document.getElementById(`skillBadge_${activeSkillAssessment.skillId}`);
        const source = document.getElementById(`skillSource_${activeSkillAssessment.skillId}`);
        if (badge) {
          badge.innerText = levelLabels[calculatedLevel];
          badge.className = `text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${levelBadgeColors[calculatedLevel]}`;
        }
        if (source) {
          source.innerHTML = `
            <span class="material-symbols-outlined text-green-700 text-[14px]">verified</span>
            <span class="text-green-800 font-bold">Verified</span>
          `;
        }
      }
    }
  })
  .catch(err => console.error("Error submitting skill assessment:", err));
}

/**
 * Completes assessment and reloads profile to reflect updated metrics
 */
function finishAssessment() {
  closeSkillAssessmentModal();
  window.location.reload();
}

/**
 * Utility to extract CSRF token from cookies or DOM
 */
function getCsrfToken() {
  const input = document.querySelector('input[name="csrfmiddlewaretoken"]');
  if (input) return input.value;

  const cookie = document.cookie.split('; ').find(row => row.startsWith('csrftoken='));
  return cookie ? cookie.split('=')[1] : '';
}
