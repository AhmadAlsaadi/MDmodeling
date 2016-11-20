from flask import Flask, render_template
import json

app=Flask(__name__)
processData={"processType":["AGMD FS","DCMD FS","VMD FS","AGMD HF","DCMD HF","VMD HF"],
			"processCounter":{"AGMD FS":0,"AGMD HF":0,"DCMD FS":0,"DCMD HF":0,"VMD FS":0,"VMD HF":0},
			"processParameters":{"AGMD FS":{"feed":{"flowrate":1,"temperature":80,"salinity":4}
											"coolant":{"flowrate":1,"temperature":20,"salinity":0}
											"membrane":{"MTCType":"measured","MTCValue":0.01,"material":["PTFE",
											"PVDF","PP","others"],"materialSe"
											}}}}

@app.route("/")
def index():	
	return render_template("index.html",processData=processData)


if __name__=="__main__":
	app.run(debug=True)