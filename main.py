#create a class to store the user details
class User:
    def __init__(self,name,age):
        self.name = name
        self.age = age

#Create a function to sign up
def signUp():
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    if age < 18:
        print("Sorry, you are not eligible to sign up")
    else:
        user = User(name,age)
        print("Welcome {}, you have successfully signed up to Vintex Youth Fund".format(name))

#Create a function to login
def login():
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    if age < 18:
        print("Sorry, you are not eligible to login")
    else:
        user = User(name,age)
        print("Welcome {}, you have successfully logged in to Vintex Youth Fund".format(name))

signUp()
login()