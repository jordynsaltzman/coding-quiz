# Coding Quiz

## Description
This website was created for homework assignment #4 at the Coding Boot Camp at Johns Hopkins University. It is a timer-based quiz application that stores high scores client-side.

After clicking "Start Quiz," the user is prompted to complete a 5 question quiz within the 60 second time limit. A wrong answer causes 10 seconds to be deducted, while a correct answer will add an additional 10 seconds to the timer. The user's final score will be the number of seconds left once the quiz has been completed. The user is then able to submit their score, which gets stored to the high scores list. 

Link to deployed site: 
https://jordynsaltzman.github.io/coding-quiz/.

Screenshot of site:
![Screenshot of Site](assets/images/screenshot.jpg "Screenshot")

## Known Issues
Once the user answers the final question, this error appears in the console: 

    script.js:53 Uncaught TypeError: Cannot read property 'title' of undefined
        at displayQuizQuestions (script.js:53)
        at HTMLButtonElement.<anonymous> (script.js:110)


## Acknowledgements

This website was created as part of the Johns Hopkins Coding Bootcamp curriculum. Thank you to my instructors, Stetson Lewis and Donald Hesler, for providing direction and assistance. Also, special thanks to Keisha Shepherd for assisting me with my code. 


## License 

MIT License

Copyright (c) 2019 Jordyn Saltzman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
