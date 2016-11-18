from flask import Flask, render_template
import json

app=Flask(__name__)
processData={"processType":["AGMD FS","DCMD FS","VMD FS","AGMD HF","DCMD HF","VMD HF"]}

@app.route("/")
def index():	
	return render_template("index.html",processData=processData)


if __name__=="__main__":
	app.run(debug=True)