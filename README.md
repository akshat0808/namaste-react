Namste React
.
.
.
.



git commands used ----->
git init
git branch -M main
git add . 
git commit -m "message"
git remote add origin <repository_url>
git push origin main




git push daily work ----->
git add .
git commit -m "message"
git push





.
.
.
.
.



npm commands used ----->
npm init
Press ^C at any time to quit.
package name: (namaste-react)
version: (1.0.0)
description: this is namaste react by akshat vishnoi
entry point: (App.js)
test command: jest
git repository: (https://github.com/akshat0808/namaste-react.git)
keywords: 
author: Akshat Vishnoi
license: (ISC)
About to write to C:\Users\akshat\Desktop\namaste-react\package.json:
ok

npm install -g npm
npm install -D parcel (-D is here for devDependencies)
npm install (install node modules with help of package and package-lock)

npx parcel index.html

npm install react (npm i react)
npm install react-dom (npm i react-dom)

npx parcel build index.html (to start production build)

after change in package.json scripts now 
npm run start (npm start)
npm run build



.
.
.
.
.


important notes ----->

episode 2 ---

package.json is configuration for npm.
parcel is a bundler -  
        - dev built
        - local server
        - HMR
        - file watching algorith - written in c++
        - caching - for giving faster builts
        - image optimization 
        - minification of files
        - bundling
        - compressing files
        - consistent hashing
        - code splitting
        - differential bundling - support older browsers 
        - diagnostics
        - good error handling
        - tree shaking - remove unused code
        - different dev and prod bundles

two types of dependencies are there, which we use in our react, normal dependencies and dev dependencies.
package-lock.json it keeps the track of all the exact versions of all the dependencies.
node modules are data module where all our packages exists, its like a database for all our dependencies.
transitive dependencies - dependencies having thier own dependencies.
.gitignore put /node_modules so that we ignore it to get push that on github.
with help of our package.json and package-lock.json we can regenerate our node module so we dont need node modules to push to github.

browserslist - we have to add this in package.json (we use this to tell browser to be compatible)



episode 3 ----

npm script (in package.json)
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
  }
