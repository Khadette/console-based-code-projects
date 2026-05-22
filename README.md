**PROJECT NAME:Console-Based Data Fetching Project**

**Project Overview**
This project shows how to fetch data from an API, process it, display it in the browser console, and save it in Local Storage using JavaScript modules.

**What the project does**
- Fetches posts from an API using fetch()
- Uses .then() and .catch() for handling requests
- Uses async/await with try/catch for saving data
- Displays only the first 5 posts in the console
- Saves those 5 posts in Local Storage

**Project files**
- api.js → gets data from API
- storage.js → saves data in Local Storage
- app.js → main file that connects everything

**Why there is no HTML file**
This project is console-based in the browser.
That means:
- It does not show a visual webpage
- Output appears in the browser console
- It is not meant for Node.js terminal

**Why it does not run in VS Code terminal**
**This project uses browser features:**
- fetch() works in browser
- localStorage works only in browser
- ES Modules work best in browser

**So running with "node app.js" will not work.**

**How to run the project correctly**
**Option 1**: PlayCode (recommended)
- Paste the code in PlayCode
- Run it and open console

**Option 2**: VS Code + Live Server
- Install Live Server extension
- Create index.html with:
  <script type="module" src="./app.js"></script>
- Open with Live Server
- Open browser console (F12)

**How to check output
Open browser console and you will see:**
- Post 1 to Post 5
- Title and body of each post
- Confirmation message for Local Storage

**Technologies used**
- JavaScript (ES6 Modules)
- Fetch API
- Promises (.then/.catch)
- Async/Await
- Local Storage

**author: isimbi emelyne niyokwizerwa**



