function showDateDiff() {
    setInterval(() => {
        let selectedDate = document.getElementById("dateTime");
        console.log(selectedDate.value);
        let now = new Date();
        let future = new Date(selectedDate.value);
        let diff = future.getTime() - now.getTime();
        if (diff < 0) {
            alert("Select A Valid Date And Refresh The Page")
        } else {
            let days = Math.floor(diff / (1000 * 24 * 60 * 60));
            let hours = Math.floor((diff % (1000 * 24 * 60 * 60) / (1000 * 60 * 60)));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / (1000));
            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;
        }
       
    }, 1000);
}