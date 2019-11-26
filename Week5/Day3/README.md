# Dunder Methods

Dunder methods are the methods of a class that are called with two underscores before and after the method name. The `__init__(self)` method is an example of a dunder method we've used before.

    class Foo:
        def __init__(self):
            self.i = 2
        def __add__(self, other):
            return self.i + other.i

### Operator Overloading
We can override the basic built-in operators with our own custom operations or comparisons. We can then simply use the '+' operator and it will call the __add__ method we've defined. In this example if we add two Foo objects together, we'll receive the sum of their `i` attributes. If we were to try to use an operator that we did not define, we'd get an error. `TypeError: unsupported operand type(s) for *: 'Foo' and 'Foo'`

### DSL
Domain Specific Languages are small languages that we can implement in a specific application. It is still written in Python, but once we override enough of the builtin methods, it basically becomes its own language. We could then emulate a different language within Python if we define the execution of that other language.

### Called
We can execute code whenever a function is called by making it a class. Then we add whatever logic we want to the dunder method `__call__(self)`

### Iterators
Iterators are objects that "produce" outcomes.

In the old days, if you were to use the `range(stop)` function, it would create a list of everything in that range. This can be very expensive when dealing with large ranges. The new way of handling range is by returning a range object, which is an iterator. It is called numerous times and each time it will keep track of what number it's up to, return that number, and then increment its counter. It does not create a list in memory. Only one number is created at a time. This is called a generator

We can create a generator object by using the `yield` command in place of a `return`. This suspends the execution of the function, but remembers its place. Then the next time it's called, it will resume from that line of code and continue to execute the function from there.

After the iterator object finishes iterating through its items, it will raise `StopIteration` error and then its job is finished. You cannot get any more objects out of it; if you want to iterate again through the list, you'd need to create a new iterator object.

### repr and str
Two similar dunder methods are `__repr__` and `__str__`. You can define how the object represents itself in a custom manner that makes sense in order to present the relevant information. Str will always be a string representation, while repr can be a more "behind the scenes" look at the object. When you call print, it will default to the str version of an object's representation. 

### format
Any time you use string formatting, you are implicitly calling the string class's definition of `__format__`. You can override that and format an object however you like.


### Pickle

    import pickle

    with open("pickledtext.txt", "wb") as f:
        pickle.dump(some_process, f)

This writes the pickled string in binary into the file. We can then open that pickled string. But it would throw an error unless we've defined that class type. You can't read the object if the current file you're working on doesn't recognize that class. Once you first define the class in the current file, or import the module containing the class definition, you can then read the pickled date using the `load` function.

    with open("pickledtext.txt", "rb") as f:
        pickle.load(object, f)
