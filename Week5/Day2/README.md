# Classes con't

## Class Heirarchy

### Door class

We have a class called `Door` that has an attribute of 'is_opened' declared when an instance is initiated. We can create a class called 'BlockedDoor' that inherits from the base class Door. We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

We now want to make a class called `DoorWithALock` which should not inherit from Lock, but should inherit from Door. The rule is, ask yourself: "A is B"? If A **is** a B, then it should inherit from the B class. Otherwise, it shouldn't be a child class. Our DoorWithALock **is** a door. It **is not** a lock.

Super() is a method that can be added to child classes that override the parent's version of that method.

Composition relationship is a relationship that asks: "A **has a** B"? When we do this though, we want to do this in a way that doesn't violate the Law of Demeter. We'd like to keep loose coupling, by allowing the user to lock the door, not lock the lock on the door. Eg: `door.lock()` as opposed to `door.lock.lock()`.

We then create a main function `open_any_door(D: Door)` We will give it a try/except block to document the results of any errors that arise when trying to call it inappropriately. When raising the error, we want to use a callback in order to get the original error. So we say `raise e from e` in order to see where the error originated from. This is called a 'reraise'. 


#### Decorator
A decorator will always call the decorator and replace the function it's decorating with the decorator.

    def decorate(f):
        def decorated()
            print(f"Calling f: {f}")
            f()
        return decorated

    @decorate
    def baz():
        pass

Now if we call `>>>baz()` it will print `"Calling f: <function baz at 0xa323c334>"`

#### Property
You can use the `@properator` decorator on a function that makes the function uncallable. If we made the `is_opened` attribute into a function with a @property decorator, it would become read-only and therefore users would not be able to access the is_opened and change it.

    d=Door()
    d.is_opened = True

    Traceback:
    AttributeError: can't set attribute

This allows us to hide our state and limit our functionality. For example: if the user has to pay a fee in order to open the door, this implementation would prevent users from simply declaring `Door.is_open = True` and cheat the system that way.

#### Cached_property
You can create a cache property on a function which will store the result in memory. Allowing you to access that results if the same function is called again. This would be very useful if you have a very expensive operation and want to limit the number of times that operation must be calculated. (This decorator must be imported from functools.)

#### Static method
A static method is a decorator that can be attached to any instance method of a class.

# OOP Design Concepts

### Invariants
We want to get the same results no [matter what happened](https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science). This is a concept that encourages us to constrain the objects of a class to certain parameters. We have two [invariants](https://en.wikipedia.org/wiki/Class_invariant) here:
* d has to have an attribute `self.open`
* the open attribute of d must be callable

We want to make sure that anything calling the methods are doing it appropriately. This is why we raised an error if the door wasn't opened in the correct way. 

### Idempotence
[Idempotence](https://en.wikipedia.org/wiki/Idempotence) is the idea that certain functions won't change when it's called. In our example, if you open a door that's already opened, it shouldn't change anything. Or when you request a webpage, you want the same page to show every time you load. That's an idempotent function.

### Duck Typing
We could in theoory pass something else to the open_any_door function as long as it has those qualifications, and it would do something. This is referred to as [Duck Typing](https://en.wikipedia.org/wiki/Duck_typing).

### Polymorphism
[Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) is an attribute of OOP languages. This would allow us to substitute a child class with a parent class. This is because they both have the same invariants. This allows us to write DRY (don't repeat yourself) code.

## S.O.L.I.D.

[SOLID](https://en.wikipedia.org/wiki/SOLID) is a mnemonic for the five design principles of OOP. 


* Single responsibility principle
* Open-closed principle
* Liskov substitution principle
* Interface segregation principle
* Dependency inversion principle

#### Single responsibility
This is the simplest implementation which will allow us to more easily reuse code.

#### Open-closed
Once we create an object and assign its properties and methods, and we then decide we want to add features, we shouldn't go back into it and change it. We should instead create a new class that inherits from the base class with new added functionality. **Open** for expansion. **Closed** for modification.

#### Liskov substitution
Substitutability is a principle in object-oriented programming stating that, in a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S. This is a major component of polymorphism. In our example, if we were to create a new class of Door that has an alarm, and define it thusly:
    class AlarmDoor(Door):
        def open_door(self, disable_alarm):
            pass
we would have a problem with LSP. This type of door's method of `open_door(self)` takes a different signature than the parent class's open_door method.

#### Interface segregation
No client should be forced to depend on methods it does not use. A good design would split interfaces that are very large into smaller and more specific ones. For example: in our code, we maintained ISP by having a DoorWithALock class call upon the Lock class, rather than try to implement a locking mechanism into the DoorWithALock class.

#### Dependency inversion
We prefer abstract implementation to concrete. We would want to pass abstractions into the constructor rather than the actual objects.
Best explained through an example. If our door had the lock cemented into it, we would never be able to change the lock. A better design would be to screw a lock into the door, so we can easily change the lock and even change between the type of lock. We create a door with an abstract place to install a lock, rather than a concrete implementation of a lock.
