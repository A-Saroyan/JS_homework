function simulateDownload(filename, callback) {
    console.log(`Downloading  ${filename}...`);
    setTimeout(() => {
        callback("Complete !!!");
    }, 2000); 
}


simulateDownload("file.txt", function(message) {
    console.log(message); // 2 varkyan heto =>  "Complete "
});


 