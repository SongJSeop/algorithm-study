import sys

toppingCount = int(sys.stdin.readline())
toppings = list(set(sys.stdin.readline().split()))


def isCheese(topping: str):
    return topping.endswith("Cheese")


def countCheeseInToppings(toppingList):
    count = 0
    for topping in toppingList:
        if isCheese(topping):
            count += 1
            if count >= 4:
                print("yummy")
                return

    print("sad")


countCheeseInToppings(toppings)
