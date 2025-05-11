
let library = [];

for( let i = 1; i<= 3;  ++i)
{
     library[i] = {

            title : "Samvel",
            author : "Raffi",
            year : 1886,
            genres : ["historical","novel"]
     }
}



library[1].year = 2000;
library[2].genres.push("Action");
delete library[3].author;


for( let i = 1; i<= 3;  ++i)
    {
         console.log(library[i]);
    }