let content = document.getElementById('content')
//let theKey;

function findNews() {
    // let keyword = document.getElementById('key')
    // theKey = keyword.value
    // console.log(theKey)
    fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=97f9f432a32e4965bd33c02f2cedb88c")
        .then(response => response.json())
        .then(news => {
            console.log(news.articles)
            for (let elt of news.articles) {
                content.innerHTML += `
                                        <div>
                                        <img src="${elt.urlToImage}" alt=""/>
                                        <h1>${elt.title}</h1>
                                        <p>${elt.description}</p>
                                        <p>${elt.publishedAt}</p>
                                        <a href=${elt.url} target='-blank'>Read me </a>
                
                `
            }


        })


}
console.log(findNews())



