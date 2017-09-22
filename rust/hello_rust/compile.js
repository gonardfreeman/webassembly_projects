const exec = require('child_process').exec;

exec(`echo $PATH`, (error, stdout, stderr)=>{
    console.log(`stdout ${stdout}`);
    console.log(`stderr ${stderr}`);
    if (error !== null) {
        console.log('exec error: ' + error);
   }
});
