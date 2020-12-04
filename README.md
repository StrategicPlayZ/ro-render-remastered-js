### Make sure to install Node.JS first:
https://nodejs.org/en/download/

### How to use 'Local-Version':
Use this version if you are going to be rendering the image on your computer and not a web server.

1) Run the correct **Installer** for your operating system. You only need to *run this file once*.
2) Run the correct **Launcher** for your operting system. You need to run this file *every time you want to open the local server*.

With this method you **cannot** render the map on the Roblox application. Please use the following method if you want to render it on a Roblox server with multiple players.

### How to use 'Server-Version':

Use this version if you are going to be rendering the image on a web server.

1) Upload everything in the folder "SERVER-VERSION" to the host you will be hosting on.
Either a paid host or free host up to you, for free host I recommend repl.it.
**Make sure the host supports Node.JS**.

2) Install the following packages on your web server:

 - express
 - body-parser
 - jimp

These packages are **needed** and the script will **not** work without them so make sure to install them.

3) Run the server, copy the link of the server, and in the Ro-Render Remastered plugin, paste it in the "Http Server" TextBox, then press Inject Scripts (after configuring the other settings as well) and then you can render the map either on Studio, or on the Roblox application with
other players as well.

With this method you can render the map on the Roblox application as well as your own computer.
But if you are rendering on your own computer, I recommend using the first method instead.


#### Where will the generated map be saved?

In 'Local-Version', the generated map will be located in the **same folder as the *Launcher* file**.

In 'Server-Version', the generated map will be located in the **same folder as the *index.js* file.**
