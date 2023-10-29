# importing the random library that is used to generate random output
import random

# making a main loop which will run the game for ever until the user leaves

leave = False
while not leave:
    # asking mode

    mode = int(input(' Enter 1 for easy , 2 for normal , 3 for hard and 4 for extra hard or 0 to leave   :'))

    if mode==0:
        leave = True
        break

    # setting the highest possible random number according to mode
    if mode==1:
        num = 100

    elif mode==2:
        num = 200

    elif mode==3:
        num = 500

    elif mode == 4:
        num = 10000

    # making random number

    x = random.randint(0,num)

    # making a loop which runs until user enter correct value
    trys = 0
    while True:
        trys += 1
        user = int(input("Enter the Number   :"))
        
        # giving clue to user if answer is incorrect
        if user>x:
            print("You guess is higher than number.")

        elif user<x:
            print("You guess is lower than number.")

        else:
            print("You Guess it right , It is ",x)
            print("You took ",trys," times to figure it out.")
            break
    
    
