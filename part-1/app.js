// 1.

async function getNumber() {
    let baseURL = "http://numbersapi.com";
    let favNum = "7";
    let num = await axios.get(`${baseURL}/${favNum}?json`)
    console.log(num.data.text)
}

// 2.

async function getNumbers() {
    let baseURL = "http://numbersapi.com";
    let { data: n1 } = await axios.get(`${baseURL}/3?json`)
    console.log(n1.text)
    let { data: n2 } = await axios.get(`${baseURL}/5?json`)
    console.log(n2.text)
    let { data: n3 } = await axios.get(`${baseURL}/7?json`)
    console.log(n3.text)
}

// 3.

async function bestNumFacts() {
    let baseURL = "http://numbersapi.com";
    let favNumber = 7;
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNumber}?json`))
    );
    $('body').append(`<p>${facts[0].data.text}</p>`);
    $('body').append(`<p>${facts[1].data.text}</p>`);
    $('body').append(`<p>${facts[2].data.text}</p>`);
    $('body').append(`<p>${facts[3].data.text}</p>`);
}
bestNumFacts();
    