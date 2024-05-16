const headers = {
    "APCA-API-KEY-ID": "PKJ86NT3DZV4OEE0N8JG",
    "APCA-API-SECRET-KEY": "0FD4BeSIrpt4gLOeUEOUr095e4aSxerLkhDUjrBV"
}
const API_ENDPOINT = "https://data.alpaca.markets/v1beta1";
async function getTopMovers() {
    const response = await fetch(`${API_ENDPOINT}/screener/stocks/movers`, {
        headers: headers
    });
    const result = await response.json();
    console.log(result);
    return result;
}
async function getBearPic() {
    const response = await fetch(picBearAPI);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
$(document).ready(function() {
    // Notes popup
    $('#floating-notes textarea').text(localStorage.getItem("notes") || "");
    $("#floating-button").on("click", function() {
        $("#floating-notes").toggle();
    });
    $('#floating-notes textarea').bind('input propertychange', function() {
        const text = $(this).val();
        localStorage.setItem("notes", text);
    });
    getTopMovers()
        .then((movers) => {
            const bulls = movers["gainers"];
            for (let i = 0; i < 3; i++) {
                const bull = bulls[i];
                $(`#bull${i}`).text(`${bull.symbol} gained ${bull.percent_change}%, currently at price $${bull.price}`);
            }
            const bears = movers["losers"];
            for (let i = 0; i < 3; i++) {
                const bear = bears[i];
                $(`#bear${i}`).text(`${bear.symbol} lost ${bear.percent_change}%, currently at price $${bear.price}`);
            }
        })
        .catch(error => {
            console.error("Error fetching top movers:", error);
        });
});


/* function bearPictures(){
const bearPic = `https://api.unsplash.com/search/photos?query=bear&client_id=lG6nD1qGOHg2Ph-WfJwKJMQLLvv6me6Q-T2g9LLPObE`;
    fetch(bearPic)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
        };
       bearPictures()
 */
       window.addEventListener('load', loadImg);

       function loadImg() {
         const bearUrl = "https://api.unsplash.com/search/photos?query=bear&client_id=lG6nD1qGOHg2Ph-WfJwKJMQLLvv6me6Q-T2g9LLPObE";
         const imageDiv = document.querySelector('.bearImage');
           fetch(bearUrl)
               .then(response => {
                   return response.json();
               })
               .then(data => {
                      
                       for (let i = 0; i < data.results.length; i++) {
                          
                           if (data.results[i].id == "y421kXlUOQk") {
                               let imageElement = document.createElement('img');
                               imageElement.src = data.results[i].urls.thumb;
                               imageDiv.append(imageElement);
                           }
                          
                       }
                   });
       };
       window.addEventListener('load', loadBullImg);

       function loadBullImg() {
         const bullUrl = "https://api.unsplash.com/search/photos?query=bull&client_id=lG6nD1qGOHg2Ph-WfJwKJMQLLvv6me6Q-T2g9LLPObE";
         const imageBullDiv = document.querySelector('.bullImage');
           fetch(bullUrl)
               .then(response => {
                   return response.json();
               })
               .then(data => {
                      
                       for (let i = 0; i < data.results.length; i++) {
                          
                           if (data.results[i].id == "y5qQJddyGmU") {
                               let imageElement = document.createElement('img');
                               imageElement.src = data.results[i].urls.thumb;
                               imageBullDiv.append(imageElement);
                           }
                          
                       }
                   });
       }
   function saveDataB0(){
    const bear0 = document.getElementById('bear0');
    const dataToSave = bear0.textContent;
    const key = "data_" + bear0.id;
    localStorage.setItem(key, dataToSave)
};

 function saveDataB1(){
    const bear1 = document.getElementById('bear1');
    const dataToSave = bear1.textContent;
    const key = "data_" + bear1.id;
    localStorage.setItem(key, dataToSave)
};

    function saveDataB2(){
    const bear2 = document.getElementById('bear2');
    const dataToSave = bear2.textContent;
    const key = "data_" + bear2.id;
    localStorage.setItem(key, dataToSave)
};
 
function saveDataBB0(){
    const bull0 = document.getElementById('bull0');
    const dataToSave = bull0.textContent;
    const key = "data_" + bull0.id;
    localStorage.setItem(key, dataToSave)
};

function saveDataBB1(){
    const bull1 = document.getElementById('bull1');
    const dataToSave = bull1.textContent;
    const key = "data_" + bull1.id;
    localStorage.setItem(key, dataToSave)
};

function saveDataBB2(){
    const bull2 = document.getElementById('bull2');
    const dataToSave = bull2.textContent;
    const key = "data_" + bull2.id;
    localStorage.setItem(key, dataToSave)
};




