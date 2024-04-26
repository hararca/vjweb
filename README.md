# vjweb

Web experiments for projected visuals

:warning: DISCLAIMER! This is meant to run locally on a computer connected to a projector in fullscreen mode, so... No. It is not responsive, it is not accessible and it is meant to work properly with the appropriate fonts installed in the system. It is a work in progress and it is not meant to be used in a production environment. It is a playground for me to experiment with visuals and code. If you want to use it, you are free to do so, but you are on your own. I am not responsible for any damage or loss of data that may occur. You have been warned.

## How to use

You will need to run the app on a local server. You can use Python's built-in HTTP server to do this. Here's how:

1. Open a terminal and navigate to the root directory of the project.

2. Check the Python version in your system. You can check your Python version by running the following command in your terminal:

```bash
python -V
# If the above fails, try:
python3 -V
# Or, if the "py" command is available, try:
py -V
```

3. If you have Python installed, go to step 4. If you don't, mostly in Windows systems, you will need to install Python 3. You can find the info to install Python 3 in [https://docs.python.org/3/using/windows.html#windows-full](https://docs.python.org/3/using/windows.html#windows-full/).

4. Start the server. Run the following command in your terminal:

```bash
# If Python version returned above is 3.X
# On Windows, try "python -m http.server" or "py -3 -m http.server"
python3 -m http.server
# If Python version returned above is 2.X
python -m SimpleHTTPServer
```

5. Open your browser and go to [http://localhost:8000](http://localhost:8000).
