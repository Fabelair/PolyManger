from flask import Flask
import datetime as dt

app = Flask(__name__)


@app.route('/')
# ‘/’ URL is bound with first function.
def first_function():
    date = str(dt.datetime.now())
    return(f"<h1 style = 'color: gray'> Bienvenue sur PolyManger. <br> {(date.split()[0])}</h1>")

# main driver function
if __name__ == '__main__':

    app.run()