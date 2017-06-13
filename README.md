## Website Performance Optimization portfolio project

### Getting started
Some useful tips to help you get started:

1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> cd dist/
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to the **`dist directory`** of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./dist/ngrok http 8080
  ```

5. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)


### *What did I do?*
----
used gulp to minimize the html, js and css.

### index.html

- used gulp-imagemin and graphicsmagick to compressed and resized the picture.

- asynced css resource only used on media 'print' to optimize the CRP.

- used inline css and js for small chunk of css & js resource to optimize the CRP.

- moved code for analytics to the end of the DOM and asynced the js request to avoid render blocking.

- set width & height for img elements to optimize DOM render calculation.

### pizza.html

- optimized event on scroll

- optimized event on resizing the pizzas

- please check the comment in pizza.html for detail changes.

---
## Guidance for using gulp to compress the project

1) open terminal

```
cd /path/to/your-project-folder
```

2) run `npm i` to install all the dependencies

3) install imagemagick & graphicsmagick to resize images 
for MacOS X users: 
``` 
brew install imagemagick
brew install graphicsmagick
```
for Ubuntu users:
```
apt-get install imagemagick
apt-get install graphicsmagick
```
for windows users:
[download here](http://www.imagemagick.org/script/binary-releases.php)

4) execute gulpfile.js by
```
gulp
```

5) now everything is ready in the `dist` folder, deploy it on your server.