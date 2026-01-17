function sne(){
    fetch("",{
        method:"GET",
        headers:{"content-type":"application/json"},
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
        throw new Error("fetch data not found.");
    })
    .then((data)=>{
        const card=document.getElementById("cardContainer");
        card.innerHTML=data
        .map((iten)=>{
            return `
            <div class="card1">
            <h3><strong>phonenumber:</strong>${item.phonenumber}</h3>
            <button onclick="">add</button>
                        <button onclick="">Delete</button>
                        </div>`;


        })
        .json();
    })
    .catch((error)=>{
        document.getElementById("errorMessage").textContent=error.message;
    })
}