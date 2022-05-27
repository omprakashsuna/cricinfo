const request=require('request');
const cheerio=require('cheerio');
request("https://www.espncricinfo.com/",cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log("error:",error);
    }
    else{
        handlehtml(html);
    }
}
function handlehtml(html)
{
    let seltool=cheerio.load(html);

    let contentarr=seltool(".ds-text-tight-s.ds-font-bold.ds-uppercase");
    console.log(seltool(contentarr).text());
    
        
}