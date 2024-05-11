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
    console.log(result)
    return result;
}

$(document).ready(function () {
    getTopMovers().then((movers) => {
        const bulls = movers["gainers"];

        for (let i = 0; i < 3; i++) {
            const bull = bulls[i];

            $(`#bull${i}`).text(`${bull.symbol} gained ${bull.percent_change}%, curently at price $${bull.price}`);
        }

        const bears = movers["losers"];

        for (let i = 0; i < 3; i++) {
            const bear = bears[i];

            $(`#bear${i}`).text(`${bear.symbol} lost ${bear.percent_change}%, curently at price $${bear.price}`);
        }
    });
});
