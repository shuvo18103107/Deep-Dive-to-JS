//ls/dir -> to list up all files

//cd .. ->to go down a file also
//cd ../.. ->to move down twol level
//to go to a file - cd '.\adb driver\'
//clear the console -> clear
// mkdir foldername -> to create a folder - like mkdir test
//make file on  a folder -> edit index.html or edit script.js

//delete a file-> del filename


/*
npm installing
 check version -> npm -v
 initializing -> npm init
 then it will ask some question to name the package.json file

 npm package namanor por npm module file delete kore npm i  korle abar package.json e dependency te sob file chole ase r noile eto large dependency file codebase e rakha bokami
 bundling our code using percel
 parcel create a dist folder which stands for distribution which is send for production
 npm i parcel --save-dev

 use percel command -> npx parcel index.html
 another way using script this is the practical way of bundiling in parcel -> go to package.json inside script create a property like this "start": "parcel index.html"
 and now run in command line -> npm run start
 when we finished our project we need a final bundle for that we need another parcel command
go to package.json add nother script -> "build":"parcel build index.html"
then run in command line -> npm run build
 also here we don,t need to use type module attribute in index.html script tag
 //parcel e hot reload activate kora jai
 if(module.hot){
     module.hot.accept()
 }

 opening a live server ->  live-server.cmd
*/

/*
Bubbling  - convert our code to es5 so that all user can use our application
parcel automatic use bubble to transpile our code (babel)
but bubble not transfyling es6 feature like promise find it just change the syntax like let to vat or a arraow function to normal function
but we can change all es6 feature+ updated feature to es5 feature using polyfilling
configure polyfilling so that new feature in updated js version also convert to es5

so in the script file
import ' core-js/stable' -parcel will automatically download it
if not then use npm i core-js
we can polyfilling customly any feature so that older browser can convert this feature to es5
example: it reduce bundle size
import 'core-js/stable/array/find'
import 'core-js/stable/promise'

there is still one feature like sync  that not polyfilling by core-js import so we have to install another thing
npm i regenerator-runtime
polyfilling async
import 'regenerator-runtime/runtime'
*/