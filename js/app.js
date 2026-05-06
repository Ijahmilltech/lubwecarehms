/* MOBILE SIDEBAR */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

/* COUNTER ANIMATION */

function animateValue(id, end){

    let obj = document.getElementById(id);
    let current = 0;

    let timer = setInterval(() => {

        current += Math.ceil(end / 100);

        if(current >= end){
            current = end;
            clearInterval(timer);
        }

        obj.innerText = current;

    },20);

}

animateValue("staffCount",12);
animateValue("patientCount",1248);
animateValue("diseaseCount",7);
animateValue("alertCount",3);

/* PIE CHART */

new Chart(document.getElementById('pieChart'), {

    type:'doughnut',

    data:{
        labels:['Malaria','Typhoid','Flu','Respiratory'],
        datasets:[{
            data:[45,30,15,10],
            backgroundColor:[
                '#0f4cfa',
                '#2ed573',
                '#ffa502',
                '#ff6b6b'
            ]
        }]
    }

});

/* LINE CHART */

new Chart(document.getElementById('lineChart'), {

    type:'line',

    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
            label:'Malaria Cases',
            data:[120,190,300,250,400,500],
            borderColor:'#0f4cfa',
            backgroundColor:'rgba(15,76,250,0.1)',
            fill:true,
            tension:0.4
        }]
    }

});