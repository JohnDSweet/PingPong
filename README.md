# Ping Pong

### Author: John Sweet

### Epicodus: Intro to Programming
This portfolio serves as the third code review project for the Epicodus program.

## Setup instructions

### Ping Pong Objectives
Create a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "pingpong"

A user should be able to enter a new number and see new results over and over again.

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.

### Specifications
* It can count up to the provided number.
  - Example Input: 2
  - Example Output: [1,2]

* It returns "pingpong" for any number divisible by 15.
  - Example Input: 15
  - Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong]

* It returns "ping" for any number divisible by 3 unless it is divisible by 15.
  - Example Input: 3
  - Example Output: [1,2,ping]

* It returns "pong" for any number divisible by 5 unless it is divisible by 15.
  - Example Input: 5
  - Example Output: [1,2,ping,4,pong]

* It returns the number for any number not divisible by 3 or 5.
  - Example Input: 4
  - Example Output: [1,2,ping,4]

### GitHub Repository
https://github.com/JohnDSweet/PingPong

### GitHub Pages
https://johndsweet.github.io/PingPong/

### Copyright: John Sweet, 2019

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
