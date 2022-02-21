let nemElerheto = document.getElementById("nem-elerheto")

fetch("http://localhost:8000/api/nemelerheto/")
  .then(response => response.json())
  .then(result => {
      nemElerheto.innerText = result.nemElerhetoAutok;
    })
  .catch(error => console.log('error', error));


function velemenyKuldes(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "velemeny": document.getElementById('velemenyInput').value
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/api/velemeny/", requestOptions)
      .then(response => {
          if(response.status == 200){
              document.getElementById('velemenyInput').value = ""
              alert("Véleménye fontos számunkra!")
          }
      })
      .catch(error => console.log('error', error));
}


  