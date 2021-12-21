const form = document.getElementById('vote-form');

// var event;
form.addEventListener('submit', e => {

    const choice = document.querySelector('input[name=feedback]:checked').value;
    console.log(choice);
    const data = { feedback: choice };


    alert("Vote is Valid");



    fetch('https://feedback-poll-demo.herokuapp.com/poll', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(err => console.log(err));

    e.preventDefault();
});


// var event;
form.addEventListener('submit', e => {

    // const choice = document.querySelector('input[type="submit"]').value;
    // console.log(choice)

    // if (choice = Yes){
        sessionStorage.buttonDisabled = 'disabled';
        this.disabled = sessionStorage.buttonDisabled;

    

});



fetch("https://feedback-poll-demo.herokuapp.com/poll")
    .then(res => res.json())
    .then(data => {
        let votes = data.votes;
        let totalVotes = votes.length;
        document.querySelector('#chartTitle').textContent = `Total Votes: ${totalVotes}`;

        let voteCounts = {
            Yes: 0,
            No: 0,
            Invalid: 0,
            Other: 0
        };

        voteCounts = votes.reduce((acc, vote) => (
            (acc[vote.feedback] = (acc[vote.feedback] || 0) + parseInt(vote.points)), acc),
            {}
        );

        let dataPoints = [
            { label: 'Yes', y: voteCounts.Yes },
            { label: 'No', y: voteCounts.No },
            { label: 'Invalid', y: voteCounts.Invalid },
            { label: 'Something Else', y: voteCounts.Other }
        ];

        const chartContainer = document.querySelector('#chartContainer');

        if (chartContainer) {

            // Listen for the event.
            document.addEventListener('votesAdded', function (e) {
                document.querySelector('#chartTitle').textContent = `Total Votes: ${e.detail.totalVotes}`;
            });

            const chart = new CanvasJS.Chart('chartContainer', {
                animationEnabled: true,
                theme: 'theme2',
                data: [
                    {
                        type: 'bar',
                        dataPoints: dataPoints
                    }
                ]
            });
            chart.render();


        }

    });

    // var disableButton = document.querySelector("#myBtn");


    // disableButton.addEventListener("click", function onclick(event) {
    //     setTimeout(() => { //Don't use function, use arrow function so 'this' refers to 'func' and not window
            
    //         console.log("Set")
 
    //       }, 200);  
    //       localStorage.buttonDisabled = 'disabled';
    //       this.disabled = localStorage.buttonDisabled;

    // });

