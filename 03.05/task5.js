const fetch  = require("node-fetch");

class UserFetcher {

    constructor (baseUrl)
    {
        this.baseUrl = baseUrl;
    }

    async getUser(userId)
    {
         return await fetch(`${this.baseUrl}/users/${userId}`)
                      .then(response => response.json());
    }

    async printUserName(userId)
    {
        let obj = await this.getUser(userId);
        console.log(obj,'\n',obj.name);
    }
}

let usr = new UserFetcher("https://jsonplaceholder.typicode.com");
usr.printUserName(2); 