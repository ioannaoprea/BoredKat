document.getElementById("get-btn").addEventListener("click", function(){
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent="Try to: " + data.activity;
            document.getElementById("title").textContent="Happy Kat 😻";
            document.body.classList.add("joy")
    });
});

