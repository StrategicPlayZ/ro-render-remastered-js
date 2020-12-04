MAKE SURE TO INSTALL NODE.JS FIRST:
***********************************
https://nodejs.org/en/download/


HOW TO USE "LOCAL-VERSION":
***************************

Use this version if you are going to be rendering the image on your computer and not a web server.

1) Run the correct "Installer" for your operating system. You only need to run this file once.
2) Run the correct "Launcher" for your operting system. You need to run this file everytime you want to open the local server.

With this method you CANNOT render the map on the Roblox application. Please use the following
method if you want to render it on a Roblox server with multiple players.

HOW TO USE "SERVER-VERSION":
****************************

Use this version if you are going to be rendering the image on a web server.

1) Upload everything in the folder "SERVER-VERSION" to the host you will be hosting on.
Either a paid host or free host up to you, for free host I recommend repl.it.
MAKE SURE THE HOST SUPPORTS NODE.JS.

2) Install the following packages on your web server:
"jimp"
"body-parser"
"express"
These packages are NEEDED and the script will NOT work without them so make sure to install them.

3) Run the server, copy the link of the server, and in the Ro-Render Remastered plugin, paste it
in the "Http Server" TextBox, then press Inject Scripts (after configuring the other settings
as well) and then you can render the map either on Studio, or on the Roblox application with
other players as well.

With this method you can render the map on the Roblox application as well as your own computer.
But if you are rendering on your own computer, I recommend using the first method instead.


WHERE WILL THE GENERATED MAP BE SAVED?
**************************************

In "LOCAL-VERSION", the generated map will be located in the SAME FOLDER AS THE LAUNCHER FILE.

In "SERVER-VERSION", the generated map will be located in the SAME FOLDER AS THE INDEX.JS FILE.




Ro-Render Remastered, by "StrategicPlayZ", credits to "reteach" and "Widgeon" for the original.
***********************************************************************************************
