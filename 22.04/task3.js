let config = {};
Object.defineProperties(config,{"SECRET_KEY" :   {  value : "xyz123", 
                                                    writable : false, 
                                                    enumerable : false, 
                                                    configurable : false }});

  console.log(config.SECRET_KEY);             
  
  config.SECRET_KEY = "hello";
  console.log(config.SECRET_KEY);   

  delete config.SECRET_KEY;
  console.log(config.SECRET_KEY); 

  console.log(Object.keys(config));

