const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-btn");
let footer = document.getElementById('footer');

let keyword = '';
let page = 1;
const accessKey = 'dAHTEavwkI4kTeya_JW_TOHj6PfQghIZ9Pu0Z46CWFk';



async function searchImages() {
        keyword = searchBox.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;
        
        const response = await fetch(url);
        const data = await response.json();
        if(page === 1){
            searchResult.innerHTML = "";
        }
        const results = data.results;

        results.map((result => {
            const image = document.createElement('img');
            image.src = result.urls.small;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        }))
        showMoreBtn.style.display = "block";
        footer.style.display = 'block';
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})
