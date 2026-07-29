import random
from tkinter import *
import json
master = Tk()
master.title("Thirsty Games")
master.geometry("600x400")
try:
    with open("Score.json", "r") as file:
        score = json.load(file)
except:
    score = {
        "Wins": 0,
        "Losses": 0,
        "Ties": 0
    }
drinks = [ 'Iron Brew','Blue Pop','Lemon Up','Classic Cola','Lemonade','Tea','Orange Fizz','Lime Fizz','Water','Coffee','Milk'
,'Juice','Zero Cola','Doc Fizz','Ginger Ale', 'Tonic','Energy Drink','Half & Half','Cherry Grenadine']
rules = {
  "Iron Brew": ["Blue Pop","Lemon Up","Classic Cola","Lemonade","Tea","Orange Fizz","Lime Fizz","Water","Cherry Grenadine"],
  "Blue Pop": ["Lemon Up","Classic Cola","Lemonade","Tea","Orange Fizz","Lime Fizz","Water","Coffee","Half & Half"],
  "Lemon Up": ["Classic Cola","Lemonade","Tea","Orange Fizz","Lime Fizz","Water","Coffee","Milk","Cherry Grenadine"],
  "Classic Cola": ["Lemonade","Tea","Orange Fizz","Lime Fizz","Water","Coffee","Milk","Juice","Half & Half"],
  "Lemonade": ["Tea","Orange Fizz","Lime Fizz","Water","Coffee","Milk","Juice","Zero Cola","Cherry Grenadine"],
  "Tea": ["Orange Fizz","Lime Fizz","Water","Coffee","Milk","Juice","Zero Cola","Doc Fizz","Half & Half"],
  "Orange Fizz": ["Lime Fizz","Water","Coffee","Milk","Juice","Zero Cola","Doc Fizz","Ginger Ale","Cherry Grenadine"],
  "Lime Fizz": ["Water","Coffee","Milk","Juice","Zero Cola","Doc Fizz","Ginger Ale","Tonic","Half & Half"],
  "Water": ["Coffee","Milk","Juice","Zero Cola","Doc Fizz","Ginger Ale","Tonic","Energy Drink","Cherry Grenadine"],
  "Coffee": ["Milk","Juice","Zero Cola","Doc Fizz","Ginger Ale","Tonic","Energy Drink","Iron Brew","Half & Half"],
  "Milk": ["Juice","Zero Cola","Doc Fizz","Ginger Ale","Tonic","Energy Drink","Iron Brew","Blue Pop","Cherry Grenadine"],
  "Juice": ["Zero Cola","Doc Fizz","Ginger Ale","Tonic","Energy Drink","Iron Brew","Blue Pop","Lemon Up","Half & Half"],
  "Zero Cola": ["Doc Fizz","Ginger Ale","Tonic","Energy Drink","Iron Brew","Blue Pop","Lemon Up","Classic Cola","Cherry Grenadine"],
  "Doc Fizz": ["Ginger Ale","Tonic","Energy Drink","Iron Brew","Blue Pop","Lemon Up","Classic Cola","Lemonade","Half & Half"],
  "Ginger Ale": ["Tonic","Energy Drink","Iron Brew","Blue Pop","Lemon Up","Classic Cola","Lemonade","Tea","Cherry Grenadine"],
  "Tonic": ["Energy Drink","Iron Brew","Blue Pop","Lemon Up","Classic Cola","Lemonade","Tea","Orange Fizz","Half & Half"],
  "Energy Drink": ["Iron Brew","Blue Pop","Lemon Up","Classic Cola","Lemonade","Tea","Orange Fizz","Lime Fizz","Cherry Grenadine"],
  "Half & Half": ["Iron Brew","Ginger Ale","Lemon Up","Classic Cola","Lemonade","Tonic","Orange Fizz","Lime Fizz","Blue Pop"],
  "Cherry Grenadine": ["Iron Brew","Lemonade","Tea","Orange Fizz","Lime Fizz","Water","Coffee","Milk", "Half & Half"]}
def play(drink):
    c = random.choice(drinks)
    if drink == c:
        score["Ties"]+= 1
        r = "Tie"
    elif c in  rules[drink]:
        r = "you Lose"
        score["Losses"]+= 1
        print(r)
    else:
        r = "you Win"
        score["Wins"]+= 1
        print(r)
        with open("Score.json","w") as file:
         json.dump(score,file)
    print(f"computer picked {c}  you picked {drink} {r} your score is {score} ")
for number, drink in enumerate(drinks):
    button = Button(master,text=drink, command=lambda d=drink: play(d),width=15,height=2)
    row = number // 5
    column = number % 5
    button.grid(row=row, column=column)
def New_Game():
        score["Ties"] = 0
        score["Wins"] = 0
        score["Losses"]= 0
        with open ("score.json", "w") as file:
            json.dump(score,file)
New_Button = Button(master,text="New_Game", command=New_Game ,width=15,height=2)
New_Button.grid(row=3, column=4)
master.mainloop()