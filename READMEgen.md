
 # Express Note Taker  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)



## Description
Utilizing Express, I wrote a javascript server app to interact between an html client and a JSON 'database', serving the files to the html client, posting user inputs to the JSON 'server' and allowing deletion of specific notes via a unique identifier.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Contact](#contact)

<a name="installation"></a>


## Installation
You will need the npm packages 'express', 'path', and 'fs'. These dependencies are delineated in the included package.json, so just 'npm i' should do it. 

<a name="usage"></a>


## Usage
Launch the server via your terminal window by navigating to the containing directory and entering 'node server.js'. Next, open a browser window and type localhost:3000 into the nav line. At this point, the app should be running and you can use it to keep track of you notes. One cautionary note: don't delete all of the notes, due to the inadequacy of using a .json as a server, an empty db.json will result in crashing the server. If this happens, paste the following line into the db.json file and reboot the sever: '[{"title":"test title","text":"test text"}]; don't forget to save the change before rebooting!

<a name="license"></a>


## License
This app is fully open-sourece and has no licensing.

<a name="contributors"></a>


## Contributors
undefined

<a name="tests"></a>


## Tests
There was no testing suite. I just ran tiral and error until I got it right.

<a name="contact"></a>


## Contact
![alt text](https://avatars1.githubusercontent.com/u/61092970?v=4)
[Email me @ null](mailto:null)