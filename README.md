# password-generator

# A program designed to generate a password within chosen specifications.

Upon pressing 'generate' on the page, the user will be asked to specify password criteria by answering 3 prompts.
  1. They will first choose amount of characters desired ranging from 8 to 128 characters.
  
  2. They will choose if there will be any combination of...
    -Uppercase letters
    -Lowercase letters
    -Special characters
    
  3. Based upon their choice of character types, the push() function will add an array of each of the chosen types of characters to an array that will hold desired characters.
  
  4. The program will then run through a for loop and take a character from a random position in the array and add it to a final array until reaching the chosen amount of characters.
  
  5. That array with then be converted to a string and then printed onto the page in the space above the generate password button.
  
  6. The user can then repeat the process any amount of times for different passwords.
