#### Function Practice

JavaScript Functions Practice
JavaScript Functions Practice: Real-World Examples with Physics and Calculus
### 1. Function with No Parameters

Scenario: You are tasked with creating a simple clock system that logs the current date and time every time it is called. This function will not take any parameters.
## Task:
Write a function named logCurrentTime that does not take any parameters.
Inside the function, log the current date and time using console.log().
You can use the Date() object to get the current time.
# Example Input & Output:
Input:
Text
1. logCurrentTime();
Output:
Text

1. "2024-10-02T10:00:00.000Z"
### 2. Function with No Return Value
Scenario: You are building a basic logging system for an app. Every time a user performs an action, the system should record a log with a simple message. This function does not need to return anything; it simply logs the message.
## Task:
Write a function named logUserAction that does not return any value.
The function should take a userAction string as a parameter.
Inside the function, simply log the message "User performed: <userAction>".
# Example Input & Output:
Input:
Text
1.calculate(10, 5, "add");
2.calculate(10, 5, "subtract");
3.calculate(10, 5, "multiply");
4.calculate(10, 5, "divide");

logUserAction("Login");
logUserAction("View Profile");
logUserAction("Logout");
logUserAction("Add Item to Cart");
Output:
Text
1.15
2.6
3.50
4.2
"User performed: Login"
"User performed: View Profile"
"User performed: Logout"
"User performed: Add Item to Cart"
### 3. Function with Multiple Parameters

Scenario: You are building a simple calculator app. The app allows users to add, subtract, multiply, and divide two numbers.
## Task:
Write a function named calculate that takes three parameters: num1, num2, and operation.
Based on the operation parameter (which can be "add", "subtract", "multiply", or "divide"), perform the respective mathematical operation.
Return the result of the operation.
# Example Input & Output:
Input:
Text

1. calculate(10, 5, "add");
2. calculate(10, 5, "subtract");
3. calculate(10, 5, "multiply");
4. calculate(10, 5, "divide");
Output:
Text

1. 15
2. 5
3. 50
4. 2

### 4. Physics Problem: Calculus-Based

Scenario: You are working on a tool that helps students calculate the velocity of an object given its initial velocity, acceleration, and time. Use the formula from kinematics: v(t) = v₀ + at
Where:
v(t) is the velocity at time t
v₀ is the initial velocity
a is the acceleration
t is the time
## Task:
Write a function named calculateVelocity that takes in three parameters: initialVelocity, acceleration, and time.
Use the formula to calculate the velocity at time t.
Return the calculated velocity.
# Example Input & Output:
Input:
Text

1. calculateVelocity(5, 2, 3);
2. calculateVelocity(0, 10, 5);
3. calculateVelocity(20, -3, 4);
4. calculateVelocity(15, 1, 10);
Output:
Text

1. 11
2. 50
3. 8
4. 25
### 5. Gaming Problem: Chess Knight Moves
Context: In chess, a knight moves in an "L" shape: the knight can move two squares in one direction and then one square perpendicular, or it can move one square in one direction and then two squares perpendicular. The knight's movement is unique because it "jumps" over other pieces, making it different from other pieces in chess.
The board is a standard 8x8 chessboard, where the coordinates range from (1,1) to (8,8). This means the bottom-left corner is (1,1), and the top-right corner is (8,8).
## Task:
Write a function named knightMoves that takes two parameters: x and y, representing the knight's current position on the chessboard.
The function should calculate all valid moves (staying within the board boundaries) and return them as a string of coordinates separated by commas.
# Example Input & Output:
Input:
Text

1. knightMoves(4, 4);
2. knightMoves(1, 1);
3. knightMoves(8, 8);
4. knightMoves(5, 7);
Output:
Text

1. "2,3, 2,5, 3,2, 3,6, 5,2, 5,6, 6,3, 6,5"
2. "2,2, 2,0, 3,3, 3,-1"
3. "6,7, 6,9, 7,6, 7,10, 8,7"
4. "3,5, 3,9, 4,5, 4,9, 6,5, 6,9"

### 6. Arrow Function

Scenario: You are developing a leaderboard for a game. You need a function to calculate the average score of players in a game round.
## Task:
Write an arrow function named calculateAverageScore that takes in an array of scores and returns the average score.
If the array is empty, return 0.
You can use array methods such as reduce() to calculate the sum of the scores.
# Example Input & Output:
Input:
Text

1. calculateAverageScore([80, 90, 70, 60]);
2. calculateAverageScore([100, 90, 95]);
3. calculateAverageScore([50, 50, 50, 50, 50]);
4. calculateAverageScore([]);
Output:
Text
1. 75
2. 95
3. 50
4. 0

### 7. Practice Assigning Functions to Variables

Scenario: You are managing a list of tasks. Each task has a due date and a status. You want to create a simple to-do list system by assigning a function to a variable that will log whether a task is completed or not based on its status.
## Task:
Write a function named checkTaskStatus that takes in two parameters: taskName and isCompleted (boolean).
If isCompleted is true, log "Task <taskName> is completed".
If isCompleted is false, log "Task <taskName> is not completed yet".
Assign this function to a variable named taskLogger and then call taskLogger to check different task statuses.
# Example Input & Output:
Input:
Text

1. taskLogger("Finish Homework", true);
2. taskLogger("Clean Room", false);
3. taskLogger("Go for a Run", true);
4. taskLogger("Read Book", false);
Output:
Text

1. "Task Finish Homework is completed"
2. "Task Clean Room is not completed yet"
3. "Task Go for a Run is completed"
4. "Task Read Book is not completed yet"
8. Practice Assigning Function Calls to Variables

Scenario: You are developing a simple online store. You want to calculate the total cost of a shopping cart and store it in a variable.
Task:
Write a function named calculateTotal that takes two parameters: unitPrice and quantity.
The function should calculate the total cost by multiplying unitPrice by quantity and return the result.
Assign the result of calling this function to a variable named totalCost and log the value.
# Example Input & Output:
Input:
Text

1. const totalCost = calculateTotal(15, 3);
2. console.log(totalCost);
Output:
Text
1. 45
