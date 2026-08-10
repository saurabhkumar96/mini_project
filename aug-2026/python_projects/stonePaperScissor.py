import random
print("Welcome to the stone-paper-scissors game!")

while True:
    value = 0
    value = input("Enter the value")
    # input(print("Enter the number 2 for paper"))
    # input(print("Enter the number 3 for scissor"))
    item = [1]
    stone=3
    scissor=2
    paper = 1
    if(value==1):
        computer = random.choice(item)
        print(computer)
        if(computer==value):
            print("Match Tie")
        elif stone>computer or scissor>computer:
            print("You win")
        else:
            print("Computer win")
    elif(value==2):
        pass
    elif(value==3):
        pass
    else:
        break


