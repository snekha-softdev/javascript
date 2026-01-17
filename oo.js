function sne() {
  fetch("https://694fe8918531714d9bcf4ee7.mockapi.io/snekha", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("fetch not found.");
    })
    .then((data) => {
      const card = document.getElementById("cardContainer");
      card.innerHTML = data
     .map((item) => {
        return `
    1
            <div class="card2">
            <h3><strong>phonenumber:</strong>${item.phonenumber}</h3>
            <button onclick="">Edit</button>
            <button onclick="">Delete</button>

            </div>
            `;
    
      })
      .join("");
    })
    .catch((error) => {
      document.getElementById("errorMessage").
      textContent = error.message;
    });
}
sne();
// post method
function postfunction() {
const phonenumber=document.getElementById("inputValue").value; 
fetch("https://694fe8918531714d9bcf4ee7.mockapi.io/snekha",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({phonenumber})
})
.then(()=>{
    document.getElementById("inputValue").value="";
    sne();

})
.catch((error)=>{
    document.getElementById("errorMessage").textContent=error.message;
})
}
