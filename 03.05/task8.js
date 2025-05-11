class FileUploader {

    constructor(filename)
    {
        this.filename = filename;
    }

    startUpload()
    {
        console.log("Starting upload",this.filename)
        setTimeout(()=> { console.log("Updolading in process !!!"); this.notifyUser()},2000);
    }

    notifyUser() 
    {
        console.log(`Notification: ${this.filename} uploaded !!!`)
    }
}


const fileup = new FileUploader("JSON");
fileup.startUpload() 