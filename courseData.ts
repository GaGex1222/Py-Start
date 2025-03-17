import { CourseData } from "./types/data"; 
import { icons } from "./constants/icons";

export const coursesData: CourseData[] = [
    {
        title: "Variables and Data Types",
        description: "Understand the fundamental concepts of variables and data types in Python, including different types like integers, strings, and lists, and how they are used in programming.",
        topicIcon: icons.variables,
        informationPages: [
            {
                title: "Introduction to Variables and Data Types",
                infoParagraph: "In Python, variables store values, and data types define the kind of value a variable can hold. Common types include integers, floats, and strings. Python uses dynamic typing, meaning the type of a variable is determined at runtime.",
                code: "x = 10  # Integer\ny = 3.14  # Float\nz = 'Hello'  # String"
            },
            {
                title: "Example: Assigning Variables in Python",
                infoParagraph: "Here is an example of using variables in Python:",
                code: "age = 25\npi = 3.1415\nname = 'Alice'\nis_correct = True"
            },
            {
                title: "Invalid Variable Names in Python",
                infoParagraph: "Variable names cannot be Python keywords or start with numbers.",
                code: "# Invalid\n1var = 5\ndef = 'hello'"
            },
        ],
        questionPages: [
            {
                title: "Which of the following data types matches 'name' variable?",
                code: "name = 'Alice'",
                options: ["boolean", "float", "integer", "string"],
                correctAnswerIndex: 3,
            },
            {
                title: "What will be the data type of the output?",
                code: "x = 10\ny = 5\nprint(x + y)",
                options: ["string", "float", "integer", "boolean"],
                correctAnswerIndex: 2,
            },
        ],
    },
    
    {
        title: "User Input in Python",
        description: "Understand how to get input from users in Python and how to handle it.",
        topicIcon: icons.inputs,
        informationPages: [
            {
                title: "Using the input() function",
                infoParagraph: "The input() function is used to take input from the user.",
                code: "name = input('Enter your name: ')\nprint(f'Hello, {name}')"
            },
            {
                title: "Converting input to other data types",
                infoParagraph: "You can convert the user input into different data types using type casting.",
                code: "age = int(input('Enter your age: '))\nprint(f'Your age is {age}')"
            }
        ],
        questionPages: [
            {
                title: "What will be the output of the following code?",
                code: "name = input('Enter your name: ')\nprint(f'Hello, {name}')",
                options: ["It will print 'Hello' followed by user input", "It will give an error", "It will not ask for input", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "How do you convert the input to an integer?",
                code: "age = input('Enter your age: ')\nprint(int(age))",
                options: ["Use int() to convert it", "Use float() to convert it", "Use str() to convert it", "None of the above"],
                correctAnswerIndex: 0,
            }
        ]
    },

    {
        title: "String Manipulation",
        description: "Explore the essentials of string manipulation in Python, including slicing, concatenation, changing case, finding substrings, and using built-in methods.",
        topicIcon: icons.string,
        informationPages: [
            {
                title: "String Slicing",
                infoParagraph: "The slicing syntax allows extracting parts of a string.",
                code: "text = 'Hello, World!'\nprint(text[0:5])  # Output: Hello"
            },
            {
                title: "String Methods",
                infoParagraph: "Python provides various string methods to modify or check strings.",
                code: "s = ' Python ' \nprint(s.strip())  # Removes spaces\nprint(s.upper())  # Converts to uppercase"
            },
            {
                title: "String Concatenation",
                infoParagraph: "String concatenation is the process of joining two or more strings together using the `+` operator.",
                code: "first_name = 'John'\nlast_name = 'Doe'\nfull_name = first_name + ' ' + last_name\nprint(full_name)  # Output: John Doe"
            },
            {
                title: "Finding Substrings",
                infoParagraph: "You can check if a string contains another substring using the `in` keyword.",
                code: "text = 'Hello, World!'\nprint('World' in text)  # Output: True"
            }
        ],
        questionPages: [
            {
                title: "What is the result of the following code?",
                code: "text = 'Hello, World!'\nprint(text[0:5])",
                options: ["Hello", "Hello,", "World!", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the output of the following code?",
                code: "s = ' Python ' \nprint(s.strip())",
                options: ["'Python'", "' Python'", "'Python '", "' Python"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the result of the following code?",
                code: "first_name = 'John'\nlast_name = 'Doe'\nfull_name = first_name + ' ' + last_name\nprint(full_name)",
                options: ["JohnDoe", "John Doe", "Doe John", "Error"],
                correctAnswerIndex: 1,
            },
            {
                title: "Which of the following checks if a substring exists in a string?",
                code: "text = 'Hello, World!'\nprint('World' in text)",
                options: ["text.find('World')", "'World' in text", "text.contains('World')", "None of the above"],
                correctAnswerIndex: 1,
            }
        ]
    },

    {
        title: "If Statements",
        description: "Learn how to use conditional statements in Python to control the flow of your program based on different conditions.",
        topicIcon: icons.ifStatements,
        informationPages: [
            {
                title: "Basic If Statement",
                infoParagraph: "The 'if' statement is used to execute a block of code if a condition is true. You can add 'else' and 'elif' blocks to handle other conditions.",
                code: "x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')"
            },
            {
                title: "Using Elif to Check Multiple Conditions",
                infoParagraph: "The 'elif' statement allows you to check multiple conditions without having to nest multiple 'if' statements.",
                code: "x = 10\nif x > 15:\n    print('x is greater than 15')\nelif x > 5:\n    print('x is greater than 5 but less than or equal to 15')\nelse:\n    print('x is 5 or less')"
            },
            {
                title: "Nested If Statements",
                infoParagraph: "You can use nested if statements to check multiple conditions within each other, allowing for more complex decision-making.",
                code: "x = 10\nif x > 5:\n    if x < 15:\n        print('x is between 5 and 15')\n    else:\n        print('x is greater than or equal to 15')"
            }
        ],
        questionPages: [
            {
                title: "Which of the following is the correct syntax for an if statement in Python?",
                code: "x = 7\nif x < 10:\n    print('x is less than 10')\nelse:\n    print('x is 10 or more')",
                options: ["if condition:", "if condition then:", "if condition do:", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the output of the following code?",
                code: "x = 7\nif x < 10:\n    print('x is less than 10')\nelse:\n    print('x is 10 or more')",
                options: ["x is less than 10", "x is 10 or more", "Error", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What does 'elif' allow you to do in Python?",
                code: "x = 10\nif x > 15:\n    print('x is greater than 15')\nelif x > 5:\n    print('x is greater than 5 but less than or equal to 15')\nelse:\n    print('x is 5 or less')",
                options: ["Check multiple conditions", "Exit the if statement", "Continue looping through a list", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What is the result of the following nested if statement?",
                code: "x = 10\nif x > 5:\n    if x < 15:\n        print('x is between 5 and 15')\nelse:\n    print('x is 5 or less')",
                options: ["x is between 5 and 15", "x is 5 or less", "Error", "None of the above"],
                correctAnswerIndex: 0,
            }
        ]
    },
    
    {
        title: "Loops in Python",
        description: "Learn about loops in Python, including for loops and while loops, to repeat actions multiple times.",
        topicIcon: icons.loops,
        informationPages: [
            {
                title: "For Loops",
                infoParagraph: "A for loop is used to iterate over a sequence (like a list, tuple, or string).",
                code: "for i in range(5):\n    print(i)"
            },
            {
                title: "While Loops",
                infoParagraph: "A while loop continues as long as a condition is True.",
                code: "x = 0\nwhile x < 5:\n    print(x)\n    x += 1"
            }
        ],
        questionPages: [
            {
                title: "What will be the output of the following code?",
                code: "for i in range(3):\n    print(i)",
                options: ["0, 1, 2", "1, 2, 3", "0, 1", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the result of this code?",
                code: "x = 0\nwhile x < 5:\n    print(x)\n    x += 1",
                options: ["0 1 2 3 4", "1 2 3 4 5", "None", "5"],
                correctAnswerIndex: 0,
            }
        ]
    },

    {
        title: "Arrays",
        description: "Understand how to work with arrays (or lists in Python), including how to create, modify, and access elements, and perform common operations like sorting and slicing.",
        topicIcon: icons.arrays,
        informationPages: [
            {
                title: "Introduction to Arrays (Lists in Python)",
                infoParagraph: "In Python, arrays are implemented using lists. A list is an ordered collection of elements, which can be of different types. Lists are versatile and widely used in Python for various tasks.",
                code: "my_list = [1, 2, 3, 4, 5]\nprint(my_list)  # Output: [1, 2, 3, 4, 5]"
            },
            {
                title: "Accessing and Modifying Elements in Arrays",
                infoParagraph: "You can access and modify elements in a list using indexing. Python lists support both positive and negative indexing, and you can modify elements directly using assignment.",
                code: "my_list = [1, 2, 3, 4, 5]\nprint(my_list[0])  # Output: 1\nmy_list[2] = 10\nprint(my_list)  # Output: [1, 2, 10, 4, 5]"
            },
            {
                title: "Array Operations: Sorting and Slicing",
                infoParagraph: "You can perform various operations on lists, such as sorting elements in ascending or descending order, and slicing to extract sublists.",
                code: "my_list = [5, 3, 8, 1]\nmy_list.sort()\nprint(my_list)  # Output: [1, 3, 5, 8]\nprint(my_list[1:3])  # Output: [3, 5]"
            },
            {
                title: "Array Operations: Adding and Removing Elements",
                infoParagraph: "You can add elements to a list using methods like `append()`, `insert()`, and remove elements using `remove()` or `pop()`.",
                code: "my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)  # Output: [1, 2, 3, 4]\nmy_list.remove(2)\nprint(my_list)  # Output: [1, 3, 4]"
            }
        ],
        questionPages: [
            {
                title: "What will the following code output?",
                code: "my_list = [10, 20, 30]\nprint(my_list[1])",
                options: ["20", "30", "10", "Error"],
                correctAnswerIndex: 0,
            },
            {
                title: "Which of the following methods adds an element to the end of a list?",
                code: "my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)",
                options: ["insert()", "append()", "add()", "extend()"],
                correctAnswerIndex: 1,
            },
            {
                title: "What is the output of the following code?",
                code: "my_list = [1, 2, 3, 4, 5]\nmy_list[1:4] = [8, 9, 10]\nprint(my_list)",
                options: ["[1, 2, 3, 4, 5]", "[1, 8, 9, 10, 5]", "[8, 9, 10]", "Error"],
                correctAnswerIndex: 1,
            },
            {
                title: "Which operation removes the last element from a list?",
                code: "my_list = [1, 2, 3, 4]\nmy_list.pop()\nprint(my_list)",
                options: ["remove()", "pop()", "delete()", "clear()"],
                correctAnswerIndex: 1,
            }
        ]
    },

    {
        title: "Dictionaries in Python",
        description: "Learn about dictionaries in Python, a collection of key-value pairs used to store data.",
        topicIcon: icons.dictionaries,
        informationPages: [
            {
                title: "Introduction to Dictionaries",
                infoParagraph: "Dictionaries store data as key-value pairs. They are unordered collections that are mutable.",
                code: "person = {'name': 'John', 'age': 30}\nprint(person['name'])"
            },
            {
                title: "Adding and Updating Dictionary Entries",
                infoParagraph: "You can add or update entries in a dictionary using keys.",
                code: "person = {'name': 'John', 'age': 30}\nperson['age'] = 31\nperson['city'] = 'New York'"
            }
        ],
        questionPages: [
            {
                title: "How do you access a value in a dictionary?",
                code: "person = {'name': 'John', 'age': 30}\nprint(person['name'])",
                options: ["Using the key inside brackets", "Using the dot notation", "Using a function call", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the result of this code?",
                code: "person = {'name': 'John', 'age': 30}\nperson['city'] = 'New York'\nprint(person['city'])",
                options: ["New York", "None", "Error", "John"],
                correctAnswerIndex: 0,
            }
        ]
    },
    
    {
        title: "Functions in Python",
        description: "Learn about defining and using functions in Python, understanding the concept of parameters, return values, and scope.",
        topicIcon: icons.functions,
        informationPages: [
            {
                title: "Introduction to Functions",
                infoParagraph: "Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.",
                code: "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))"
            },
            {
                title: "Function Parameters and Return Values",
                infoParagraph: "Functions can take parameters, perform operations, and return values back to the caller.",
                code: "def add(x, y):\n    return x + y\n\nresult = add(3, 5)\nprint(result)"
            }
        ],
        questionPages: [
            {
                title: "What will be the output of this function?",
                code: "def multiply(x, y):\n    return x * y\n\nprint(multiply(2, 3))",
                options: ["5", "6", "8", "None of the above"],
                correctAnswerIndex: 1,
            },
            {
                title: "What does the following function return?",
                code: "def subtract(x, y):\n    return x - y\n\nprint(subtract(10, 5))",
                options: ["5", "None", "15", "Error"],
                correctAnswerIndex: 0,
            }
        ]
    },


    {
        title: "Libraries",
        description: "Learn about Python libraries, how to install and import them, and explore popular libraries like `math`, `datetime`, and `os`.",
        topicIcon: icons.libraries,
        informationPages: [
            {
                title: "Introduction to Python Libraries",
                infoParagraph: "Libraries are collections of functions and methods that allow you to perform many tasks without writing code from scratch. In Python, libraries can be installed via `pip` and imported into your code using the `import` keyword.",
                code: "import math\nprint(math.sqrt(16))  # Output: 4.0"
            },
            {
                title: "Using the `math` Library",
                infoParagraph: "The `math` library provides mathematical functions like square roots, trigonometry, and logarithms.",
                code: "import math\nprint(math.pi)  # Output: 3.141592653589793\nprint(math.sin(math.radians(90)))  # Output: 1.0"
            },
            {
                title: "Using the `datetime` Library",
                infoParagraph: "The `datetime` library allows you to work with dates and times in Python. It provides classes for manipulating dates, times, and time intervals.",
                code: "from datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%Y-%m-%d %H:%M:%S'))  # Output: Current date and time"
            },
            {
                title: "Using the `os` Library",
                infoParagraph: "The `os` library provides functions to interact with the operating system, like managing files and directories.",
                code: "import os\nprint(os.getcwd())  # Output: Current working directory\nos.mkdir('new_directory')  # Creates a new directory"
            }
        ],
        questionPages: [
            {
                title: "What does the following code output?",
                code: "import math\nprint(math.sqrt(25))",
                options: ["5", "25", "10", "Error"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the result of this code?",
                code: "from datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%Y-%m-%d'))",
                options: ["2025-03-17", "2025/03/17", "March 17, 2025", "Error"],
                correctAnswerIndex: 0,
            },
            {
                title: "Which Python library provides mathematical functions?",
                code: "import math\nprint(math.sqrt(16))",
                options: ["datetime", "math", "os", "sys"],
                correctAnswerIndex: 1,
            },
            {
                title: "What does the following code do?",
                code: "import os\nos.mkdir('new_folder')",
                options: ["Deletes a folder", "Creates a new folder", "Prints the folder contents", "None of the above"],
                correctAnswerIndex: 1,
            }
        ]
    },

    {
        title: "File Handling",
        description: "Learn how to work with files in Python, including reading, writing, appending, and handling different file formats.",
        topicIcon: icons.files,
        informationPages: [
            {
                title: "Reading Files",
                infoParagraph: "You can read a file using the `open()` function with the `'r'` mode.",
                code: "with open('example.txt', 'r') as file:\n    content = file.read()\nprint(content)"
            },
            {
                title: "Writing to Files",
                infoParagraph: "Use the `'w'` mode to write to a file. This will overwrite existing content.",
                code: "with open('example.txt', 'w') as file:\n    file.write('Hello, world!')"
            },
            {
                title: "Appending to Files",
                infoParagraph: "Use the `'a'` mode to append data without overwriting the file.",
                code: "with open('example.txt', 'a') as file:\n    file.write('\\nAppended text')"
            },
            {
                title: "Working with CSV Files",
                infoParagraph: "Python provides the `csv` module to read and write CSV files.",
                code: "import csv\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)"
            }
        ],
        questionPages: [
            {
                title: "Which mode is used to read a file in Python?",
                code: "with open('example.txt', 'r') as file:\n    content = file.read()",
                options: ["'r'", "'w'", "'a'", "'rb'"],
                correctAnswerIndex: 0
            },
            {
                title: "What happens if you open a file in `'w'` mode?",
                code: "with open('example.txt', 'w') as file:\n    file.write('New content')",
                options: ["Appends text", "Deletes the file", "Overwrites existing content", "Throws an error"],
                correctAnswerIndex: 2
            },
            {
                title: "Which module is used to work with CSV files?",
                code: "import csv\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)",
                options: ["json", "csv", "os", "file"],
                correctAnswerIndex: 1
            }
        ]
    },
    

    {
        title: "Try-Except",
        description: "Learn how to handle exceptions in Python to manage errors effectively and prevent program crashes.",
        topicIcon: icons.tryExcept,
        informationPages: [
            {
                title: "Basic Try-Except Block",
                infoParagraph: "In Python, a try-except block is used to catch and handle exceptions. The code inside the 'try' block is executed, and if an exception occurs, the 'except' block is executed.",
                code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
            },
            {
                title: "Catching Multiple Exceptions",
                infoParagraph: "You can catch multiple types of exceptions in one 'except' block, or use multiple 'except' blocks for different exceptions.",
                code: "try:\n    x = int('string')\nexcept ValueError:\n    print('ValueError: Invalid input')\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
            },
            {
                title: "Using Finally Block",
                infoParagraph: "The 'finally' block allows you to execute code that will always run, regardless of whether an exception is raised or not.",
                code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nfinally:\n    print('This will always run')"
            }
        ],
        questionPages: [
            {
                title: "What happens if no exception is raised in the try block?",
                code: "try:\n    x = 10\nexcept ZeroDivisionError:\n    print('Error!')",
                options: ["The except block is executed", "The try block is skipped", "The program continues normally", "The program crashes"],
                correctAnswerIndex: 2,
            },
            {
                title: "Which exception is raised when attempting to divide by zero in Python?",
                code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')",
                options: ["IndexError", "ZeroDivisionError", "ValueError", "TypeError"],
                correctAnswerIndex: 1,
            },
            {
                title: "Which of the following is the correct way to catch an exception in Python?",
                code: "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Error!')",
                options: [
                    "except Exception: pass",
                    "catch Error as e: pass",
                    "try: except: pass",
                    "None of the above"
                ],
                correctAnswerIndex: 0,
            },
            {
                title: "What is the purpose of the 'finally' block?",
                code: "try:\n    x = 10\nexcept ZeroDivisionError:\n    print('Error!')\nfinally:\n    print('This will always run')",
                options: ["To execute code that runs no matter what", "To catch exceptions", "To re-raise exceptions", "None of the above"],
                correctAnswerIndex: 0,
            }
        ]
    },

    {
        title: "Object-Oriented Programming (OOP)",
        description: "Learn the principles of OOP in Python, including classes, objects, inheritance, and polymorphism.",
        topicIcon: icons.oop,
        informationPages: [
            {
                title: "Introduction to Classes and Objects",
                infoParagraph: "In Python, everything is an object. A class defines a blueprint for creating objects (instances). An object is an instance of a class, with its own attributes and methods.",
                code: "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\ndog1 = Dog('Buddy', 3)\nprint(dog1.name)  # Output: Buddy"
            },
            {
                title: "Inheritance and Polymorphism",
                infoParagraph: "Inheritance allows a class to inherit methods and attributes from another class. Polymorphism allows objects to be treated as instances of their parent class, but with different behaviors.",
                code: "class Animal:\n    def speak(self):\n        print('Animal speaks')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Dog barks')\n\ndog = Dog()\ndog.speak()  # Output: Dog barks"
            },
            {
                title: "Encapsulation in OOP",
                infoParagraph: "Encapsulation is the concept of restricting access to certain methods and attributes of an object to prevent accidental modification. This is achieved using private variables (denoted with __) and providing public methods to access or modify those variables.",
                code: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def deposit(self, amount):\n        self.__balance += amount\n\n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(account.get_balance())  # Output: 1500"
            },
            {
                title: "Class Methods and Static Methods",
                infoParagraph: "Class methods are bound to the class, not instances. Static methods don't require the self parameter and are similar to regular functions, but belong to the class's namespace.",
                code: "class MyClass:\n    @classmethod\n    def class_method(cls):\n        print('This is a class method')\n\n    @staticmethod\n    def static_method():\n        print('This is a static method')\n\nMyClass.class_method()  # Output: This is a class method\nMyClass.static_method()  # Output: This is a static method"
            },
            {
                title: "Operator Overloading",
                infoParagraph: "Operator overloading allows custom behavior for standard operators (like +, -, etc.) when used with class instances. You define methods like `__add__`, `__sub__` to modify the behavior.",
                code: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n\npoint1 = Point(1, 2)\npoint2 = Point(3, 4)\nresult = point1 + point2\nprint(result.x, result.y)  # Output: 4 6"
            }
        ],
        questionPages: [
            {
                title: "What is the purpose of the `__init__` method in a Python class?",
                code: "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\ndog1 = Dog('Buddy', 3)\nprint(dog1.name)",
                options: ["To initialize an object's attributes", "To create a new class", "To delete an object", "To call a function"],
                correctAnswerIndex: 0,
            },
            {
                title: "Which of the following is an example of inheritance in Python?",
                code: "class Dog(Animal): pass",
                options: [
                    "class Dog(Animal): pass",
                    "class Dog: pass",
                    "def dog(): pass",
                    "None of the above"
                ],
                correctAnswerIndex: 0,
            },
            {
                title: "What does polymorphism allow in Python?",
                code: "class Animal:\n    def speak(self):\n        print('Animal speaks')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Dog barks')",
                options: ["Objects of different classes to be treated as instances of the same class", "Objects to be created dynamically", "Objects to change data types", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What is encapsulation in OOP?",
                code: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def deposit(self, amount):\n        self.__balance += amount\n\n    def get_balance(self):\n        return self.__balance",
                options: ["Hiding an object's attributes and methods", "Inheriting methods and attributes from another class", "Treating different objects the same way", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What is the purpose of a static method in a class?",
                code: "class MyClass:\n    @staticmethod\n    def static_method():\n        print('This is a static method')",
                options: ["It is bound to an instance", "It does not require access to the class or instance", "It is used for initialization", "None of the above"],
                correctAnswerIndex: 1,
            },
            {
                title: "Which method is used for operator overloading the `+` operator in a class?",
                code: "class Point:\n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)",
                options: ["`__add__`", "`__sum__`", "`add_operator`", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What is the result of the following code?",
                code: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n\npoint1 = Point(1, 2)\npoint2 = Point(3, 4)\nresult = point1 + point2\nprint(result.x, result.y)  # Output: 4 6",
                options: ["4 6", "1 2", "3 4", "None of the above"],
                correctAnswerIndex: 0,
            }
        ]
    },
    
    
    {
        title: "Decorators",
        description: "Learn how to use decorators in Python to modify the behavior of functions or methods dynamically.",
        topicIcon: icons.decorators, // You can change this to the appropriate icon for decorators
        informationPages: [
            {
                title: "Introduction to Decorators",
                infoParagraph: "A decorator is a function that takes another function as an argument and extends or alters its behavior without explicitly modifying it.",
                code: "def decorator_function(func):\n    def wrapper():\n        print('Before function call')\n        func()\n        print('After function call')\n    return wrapper\n\n@decorator_function\ndef say_hello():\n    print('Hello!')\nsay_hello()  # Output: Before function call\nHello!\nAfter function call"
            },
            {
                title: "Using Decorators with Arguments",
                infoParagraph: "You can pass arguments to the function inside a decorator to allow more flexibility.",
                code: "def decorator_function(func):\n    def wrapper(*args, **kwargs):\n        print('Before function call')\n        result = func(*args, **kwargs)\n        print('After function call')\n        return result\n    return wrapper\n\n@decorator_function\ndef add_numbers(a, b):\n    return a + b\n\nprint(add_numbers(3, 4))  # Output: Before function call\n7\nAfter function call"
            },
            {
                title: "Chaining Multiple Decorators",
                infoParagraph: "You can apply multiple decorators to a single function by stacking them above the function definition.",
                code: "def decorator_1(func):\n    def wrapper():\n        print('Decorator 1')\n        func()\n    return wrapper\n\ndef decorator_2(func):\n    def wrapper():\n        print('Decorator 2')\n        func()\n    return wrapper\n\n@decorator_1\n@decorator_2\ndef greet():\n    print('Hello')\ngreet()  # Output: Decorator 1\nDecorator 2\nHello"
            }
        ],
        questionPages: [
            {
                title: "What is the purpose of a decorator in Python?",
                code: "def decorator_function(func):\n    def wrapper():\n        print('Before function call')\n        func()\n        print('After function call')\n    return wrapper\n\n@decorator_function\ndef say_hello():\n    print('Hello!')\nsay_hello()",
                options: ["To modify the behavior of a function", "To delete a function", "To add a new function", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What will be the output of the following code?",
                code: "@decorator_function\ndef say_hello():\n    print('Hello!')\nsay_hello()",
                options: ["Before function call\nHello!\nAfter function call", "Hello!\nBefore function call\nAfter function call", "Error", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "What happens when you stack multiple decorators?",
                code: "@decorator_1\n@decorator_2\ndef greet():\n    print('Hello')\ngreet()",
                options: ["Each decorator wraps the function and modifies its behavior", "Only the first decorator is applied", "Only the second decorator is applied", "None of the above"],
                correctAnswerIndex: 0,
            },
            {
                title: "How can you pass arguments to the decorated function?",
                code: "def decorator_function(func):\n    def wrapper(*args, **kwargs):\n        print('Before function call')\n        result = func(*args, **kwargs)\n        print('After function call')\n        return result\n    return wrapper\n\n@decorator_function\ndef add_numbers(a, b):\n    return a + b\n\nprint(add_numbers(3, 4))",
                options: ["By using *args and **kwargs", "By directly modifying the decorator function", "By using a global variable", "None of the above"],
                correctAnswerIndex: 0,
            }
        ]
    },
    
    {
        title: "APIs and Web Requests",
        description: "Learn how to interact with web APIs in Python using the `requests` module.",
        topicIcon: icons.api,
        informationPages: [
            {
                title: "Making a GET Request",
                infoParagraph: "The `requests.get()` method fetches data from an API endpoint.",
                code: "import requests\nresponse = requests.get('https://api.example.com/data')\nprint(response.json())"
            },
            {
                title: "Sending a POST Request",
                infoParagraph: "You can send data to an API using `requests.post()`.",
                code: "import requests\npayload = {'name': 'John', 'age': 30}\nresponse = requests.post('https://api.example.com/create', json=payload)\nprint(response.status_code)"
            },
            {
                title: "Handling API Responses",
                infoParagraph: "APIs return data in JSON format, which can be parsed using `.json()`.",
                code: "response = requests.get('https://api.example.com/data')\ndata = response.json()\nprint(data['key'])"
            },
            {
                title: "Authentication in APIs",
                infoParagraph: "Many APIs require authentication using headers or API keys.",
                code: "headers = {'Authorization': 'Bearer YOUR_API_KEY'}\nresponse = requests.get('https://api.example.com/protected', headers=headers)\nprint(response.status_code)"
            }
        ],
        questionPages: [
            {
                title: "Which module is used for making API requests in Python?",
                code: "import requests\nresponse = requests.get('https://api.example.com/data')",
                options: ["urllib", "json", "requests", "http"],
                correctAnswerIndex: 2
            },
            {
                title: "How do you send data in a POST request?",
                code: "import requests\npayload = {'name': 'John'}\nresponse = requests.post('https://api.example.com/create', json=payload)",
                options: ["Using `data=`", "Using `json=`", "Using `params=`", "Using `headers=`"],
                correctAnswerIndex: 1
            },
            {
                title: "What method is used to parse JSON responses?",
                code: "response = requests.get('https://api.example.com/data')\ndata = response.json()",
                options: [".text()", ".json()", ".parse()", ".read()"],
                correctAnswerIndex: 1
            }
        ]
    }
    
    
];

console.log(coursesData);
