
const dataContainer = document.getElementById("data-container");

const apiUrl = "https://api.example.com/data";

fetch(apiUrl)
  .then((response) => {
    
    if (!response.ok) {
      
      throw new Error("Network response was not ok");
    }
    
    return response.json();
  })
  .then((data) => {
    
    console.log(data);
    
    let html = "";
    
    for (let item of data) {
      
      html += `<div class="item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>`;
    }
    
    dataContainer.innerHTML = html;
  })
  .catch((error) => {
    
    console.error("Error:", error);
    
    dataContainer.innerHTML = <p>Something went wrong: ${error.message}</p>;
  });