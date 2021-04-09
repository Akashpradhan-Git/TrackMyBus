window.addEventListener('load', () => {

    const From = localStorage.getItem('From')
    const to = localStorage.getItem('To')


    if(From== 'bpd' && to == 'bbs'){
        document.getElementById('From').innerText = "Baripada"
        document.getElementById('To').innerText = "Bhubaneswar"
    }
    else if(From =='bls' && to =='bbs'){
        document.getElementById('From').innerText = "Balasore"
        document.getElementById('To').innerText = "Bhubaneswar"
    }

    

    document.getElementById('searchmore').addEventListener('click', () => (
        location.replace('index.html')
    ))


    async function fetchData() {
        try {

            const res = await fetch("data.json")
            const data = await res.json();
            
            var out = ""
            data.map(e => {
                f = e.from;
                t = e.to;
               
                if (f == From && t == to) {
                   
                    
                    out +=
                        `
                       
                    <li class="card">
                    <div class="businfo">
                        <div class="text">
                            <div class="title">${e.name}</div>
                            <div class="sub-title">${e.info}</div>
                        </div>

                        <div class="route">
                            <div class="from">${e.fromName}</div>
                            <div class="arrow"><i class="fas fa-arrow-right"></i></div>
                            <div class="to">${e.toName}</div>
                        </div>
                        <div class="price">
                            <i class="fas fa-rupee-sign"> ${e.price}</i>
                        </div>
                    </div>
                    <div class="otherinfo">
                        <div class="seat">Total seat: ${e.seat}</div>
                        <div class="time-taken">${e.totTime}</div>
                        <div class="time">
                            <div class="start">${e.start}</div>
                            <div class="end">${e.end}</div>
                        </div>
                    </div>

                </li>

                   `
                
                }
                  
            })
         
            
            
            document.getElementById('output').innerHTML = out;
        }
        catch (error) {
                console.error(error)
        }

    }

    fetchData()

})


