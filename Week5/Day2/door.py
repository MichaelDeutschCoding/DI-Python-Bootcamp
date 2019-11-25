class Door:
    def __init__(self, is_opened=False):
        self.is_opened = is_opened

    def open_door(self):
        if self.is_opened:
            raise ValueError("Door is already open!")
        print("Successfully opened the door.")
        self.is_opened = True

    def close_door(self):
        if not self.is_opened:
            raise ValueError("Door is already closed!")
        print("Successfully closed the door.")
        self.is_opened = False


class Lock:
    def __init__(self, is_locked=False):
        self.is_locked = is_locked

    def lock(self):
        if self.is_locked:
            raise ValueError("Lock is already locked!")
        print("Successfully locked.")
        self.is_locked = True

    def unlock(self):
        if not self.is_locked:
            raise ValueError("It's already unlocked!")
        print("Successfully unlocked.")
        self.is_locked = False

class BlockedDoor(Door):
    def open_door(self):
        raise TypeError("A blocked door cannot be opened!")
    def close_door(self):
        raise TypeError("A blocked door cannot be closed.")

class DoorWithALock(Door):
    def __init__(self, is_opened=False):
        self._lock = Lock()
        super().__init__(is_opened=is_opened)
    
    def open_door(self):
        if self._lock.is_locked:
            raise ValueError("Cannot open door. It's locked.")
        super().open_door()

    def close_door(self):
        if self._lock.is_locked:
            raise ValueError("Door is locked.")
        super().close_door()
    def lock(self):
        self._lock.lock()
    def unlock(self):
        self._lock.unlock()

def open_any_door(d: Door):
    try:
        d.open_door()
    except TypeError as e:
        print(f"ERROR: {e}")
    except ValueError as e:
        if str(e) == "Door is already open!":
            pass
        elif str(e) == "Cannot open door. It's locked.":
            d.unlock()
            try:
                d.open_door()
            except Exception as e:
                print(f"Failed to open door: {e}")
        else:
            raise e from e
    except Exception as e:
        print(f"UNEXPECTED ERROR: {e}")


d = BlockedDoor()
open_any_door(d)

d_with_lock = DoorWithALock()
print(d_with_lock._lock.is_locked)
open_any_door(d_with_lock)
d_with_lock.close_door()
d_with_lock.lock()
open_any_door(d_with_lock)