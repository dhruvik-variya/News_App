const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("profile-image").src = user.imageUrl;
  document.getElementById("profile-name").textContent = `Name: ${user.name}`;
}
else{
  window.location.href = "/signup.html";  
  alert("Please Login firt and try again."); 
}
 
const newsList = JSON.parse(localStorage.getItem("newsList")) || [];

 
const handleuser = (newsList) => {
  const newsListElement = document.getElementById("newsList");
  newsListElement.innerHTML = "";

  newsList.map((news, index) => {
    const newstitle = document.createElement("h3");
    newstitle.textContent = news.title;

    const newsimg = document.createElement("img");
    newsimg.src = news.newsimg;

    const newscontent = document.createElement("p");
    newscontent.setAttribute("class", "newscontent");
    newscontent.textContent = news.content;

    const btnDlt = document.createElement("button");
    btnDlt.textContent = "Delete";
    btnDlt.addEventListener("click", () => handleDelete(index));

    let div = document.createElement("div");
    div.className = "newsItem";  
    div.append(newstitle, newsimg, newscontent, btnDlt);
    
    newsListElement.append(div);
  });
};
 
const handleDelete = (index) => {
  newsList.splice(index, 1);
  localStorage.setItem("newsList", JSON.stringify(newsList));
  handleuser(newsList);  
};
 
handleuser(newsList);