class Foo:
    def __init__(self):
        self.i = 2
    def __add__(self, other):
        return self.i + other.i

f = Foo()
g = Foo()

# We can now simply use the + sign, it will call the __add__ method.
print("f + g:", f + g)        # prints 4

        # Trying to use an undefined operator
# print("f * g:", f * g) 
# TypeError: unsupported operand type(s) for *: 'Foo' and 'Foo'


class SomeFunc:
    def __init__(self):
        self.called = False
        self.number_of_calls = 0
    def __call__(self):
        self.called = True
        self.number_of_calls += 1
        # Actual function stuff HERE

some_func = SomeFunc()
print(some_func.called)     #returns False
some_func()
print(some_func.called)     #now returns True



##### Instructions for the pickle module
import pickle
class Reducable:
    def __init__(self, arg1, arg2, optionalarg=5):
        self.arg1 = arg1
        self.arg2 = arg2
        self.optionalarg = optionalarg
    def __reduce__(self):
        return (self.__class__, (self.arg1, self.arg2))

r = Reducable("abc", "foo", optionalarg=3)
print(pickle.dumps(r))

class Bar:
    pass

class Baz:
    def __init__(self, bar):
        print("INIT")
    def __new__(cls, bar):
        if bar:
            return Bar()
        else:
            return super().__new__(cls)

print(Baz(True))
print(Baz(False))


### ITERATORS

l = [1,2,3]
it = iter(l)

print(next(it))     # prints 1
print(next(it))     # prints 2
print(next(it))     # prints 3
# print(next(it))     # Raises StopIteration error

### str and repr

from datetime import datetime
d = datetime.now()

print(str(d))        #   2019-11-26 11:21:22.358166
print(repr(d))  #   datetime.datetime(2019, 11, 26, 11, 21, 22, 358166)