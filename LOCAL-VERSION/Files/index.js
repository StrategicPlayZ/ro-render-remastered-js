// By StrategicPlayZ \\

const express = require("express");
const bodyParser = require("body-parser");
const Jimp = require("jimp");

const port = 8080;

const app = express();

const jsonParser = bodyParser.json({limit:"3mb"});

let imageData = [

];

let xSize = 0;
let ySize = 0;
let linesPerAssign = 2;

let y = 0;

app.post("/requests", jsonParser, (req, res) => {
	if (req.body[0] == "RENDER_START") {
		y = 0;
		xSize = req.body[1]
		ySize = req.body[2]
		linesPerAssign = req.body[3]
		imageData = []
		console.log("RENDER_START", xSize, ySize)
	} else if (req.body[0] == "RENDER_END") {
		console.log("RENDER_END")
		console.log("GENERATING_IMAGE")

		let image = new Jimp(xSize, ySize, function(err, image) {
			if (err) throw err;

			imageData.forEach((row, y) => {
				row.forEach((color, x) => {
					image.setPixelColor(color, x, y);
				});
			});

			image.write("RENDER_MAP.png", (err) => {
				if (err) throw err;
				console.log("DONE")
			});
		})
	} else {
		console.log("LINE_RECEIVED: " + ((y + linesPerAssign) + "/" + ySize))
		
		for (i = 0; i < linesPerAssign; i++) {
			imageData[y] = []
			for (x = (xSize*i); x < ((xSize*i)+xSize); x++) {
				imageData[y].push(Jimp.rgbaToInt(req.body[x][0], req.body[x][1], req.body[x][2], req.body[x][3]))
			}
			y++
		}
	}
	res.send(".")
});
app.get("/requests", (req, res) => {
	res.send("PORT IS ACTIVE.")
})

const listener = app.listen(port, "localhost", () => {console.log("\"Ro-Render Remastered\" is now listening on \"http://localhost:8080/requests\".")});