var ghpages = require('gh-pages');
 
ghpages.publish('build', {
    branch: 'master',
    message: 'Auto-commit',
    repo: 'https://github.com/mari4w04/mari4w04.github.io.git',
    dest: 'weatherapp'
},
function(err) {
    if(err){
        console.log(err);
    }
});