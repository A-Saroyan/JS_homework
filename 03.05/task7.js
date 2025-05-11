const fetch = require ("node-fetch");

class DataPipeline {

    async fetchData(url)
    {
        return await fetch(url).then(response => response.json());
    }

      filterData(data)
    {
        this.result = data.filter(obj => obj.userId < 5)
        return this.result; 
         
    } 
     logData(data) 
    {
        console.log( data);    
    }
}


let users = new DataPipeline();
users.fetchData("https://jsonplaceholder.typicode.com/posts")
.then(data => users.filterData(data))
.then(datas => users.logData(datas));