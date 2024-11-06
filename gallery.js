const loadBtn = document.querySelector(".load-btn");
const cleanBtn = document.querySelector(".clean-btn");
const postsContainer = document.getElementById("posts-container");

const fetchData = () => {
  document.querySelector("#preloader").classList.add("active");
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = ` <img src="${post.url}"  alt="Кот" width="350" height="250"/> `;
        postsContainer.appendChild(postElement);
      });
      document.querySelector("#preloader").classList.remove("active");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const cleanData = () => {
  postsContainer.innerHTML = "";
};

loadBtn.addEventListener("click", fetchData);
cleanBtn.addEventListener("click", cleanData);
