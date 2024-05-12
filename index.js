const main=document.getElementById('articles-container');

let data;
let datalength=0;

    async function getData(){
     const res = await fetch(" https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d90e5439d81b428a80ad09f9a694c9f3");
     const result= await res.json();
     data = result.articles;
     datalength=data.length;
     console.log("\n:data:",data);

     renderUI();
    }

getData();

  
function renderUI(){
for(let i=0; i<datalength; i++){
const article=document.createElement('article');
article.innerHTML=`
            <img class="article-image" src="${data[i].urlToImage}" alt="news Image 1"/> 
             <div class="article-content">
                <h2 id="heading-1">${data[i].title}</h2>
            <p>
               ${data[i].description}
            </p>
            <a href="${data[i].url}" target="_blank">Read More....</a>
            <p>~"${data[i].author}"
            </div>
                `;  
    main.appendChild(article);
}
}
