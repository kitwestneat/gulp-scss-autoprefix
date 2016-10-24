By default the pathing for the gulp watch is set up to look for the mirror git repo a sibling, like this:

some parent folder
--gulp-scss-autoprefix
--mirror2-ati-theme

So easiest thing is to clone it as a sibling, but if you want to change the directory relationship you can update a variable in the gulpfile.js.

Once cloned, enter the directory and type in `NPM install`

Assuming you have node.js installed, that should install all the dependencies. Then you just type `gulp watch`. If everything if configured right it it will spit out a new CSS file when you save any of the component scss files.

I haven't tested this on Windows, so let me know if it's buggy.