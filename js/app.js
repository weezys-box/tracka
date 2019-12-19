let overlay = document.getElementById('overlay');




window.onload = () => {

    let remarks = document.getElementById('remarks');

    setTimeout(function () {
        overlay.classList += ' fade';
    }, 1000);

    setTimeout(function () {

        overlay.style.zIndex = -1;

    }, 2000);

    setTimeout(function () {
        remarks.innerText = '10.4kg difference remain';
    }, 2000)






    let kg = document.getElementById('wkg');

    let cm = document.getElementById('hcm');
    let form = document.getElementById('check-weight');
    let date = document.getElementById('date');
    let dates = document.getElementById('dates');
    let cwg = document.getElementById('cwg');
    let bmiRes = document.getElementById('bmi-res');
    let summary = document.getElementById('summary');
    let allWrap = document.querySelector('.all-wrap');
    let bmi = document.querySelector('.bmi');
    let weightRes = document.querySelector('.weight-result');
    let entries = document.getElementById('entries');
    let error = document.getElementById('error');
    let cancel = document.querySelector('.cancel');
    let hamburger = document.querySelector('.hamburger-menu');
    let menu = document.getElementById('menu');


    console.log(hamburger);


    hamburger.addEventListener('click', function () {

        menu.className += 'scale-up';
        //menu.style.transform = 'animation: scale 0.5s forwards ease-in';
    })
    // console.log(bmi);
    // console.log(weightRes);

    let gif = document.querySelector('.gif-wrap');



    // console.log(allWrap);

    let yes = document.getElementById('save-yes');


    // load entries if any on window load

    if (localStorage.getItem('tracks') !== null) {

        recordsEntity = JSON.parse(localStorage.getItem('tracks'));

        recordsEntity.reverse();


        for (let x = 0; x < 4; x++) {

            entries.innerHTML +=

                `<div class='entry-data'>
            
            <p class= 'entry-date'> ${recordsEntity[x].date}</p>
            <p class= 'entry-weight'> ${recordsEntity[x].weight} <span class='deep-sm'>kg</span></p>
           
           
           </div>`

        }


        // recordsEntity.forEach(function (records) {
        //     entries.innerHTML +=

        //         `<div class='entry-data'>

        //     <p class= 'entry-date'> ${records.date}</p>
        //     <p class= 'entry-weight'> ${records.weight} <span class='deep-sm'>kg</span></p>


        //    </div>`;
        // })
    }







    // 




    // validation

    form.addEventListener('submit', compute);

    function compute(e) {
        entries.style.display = 'none';
        bmi.style.display = 'none';
        allWrap.style.display = 'none';
        weightRes.style.display = 'none';

        if (kg.value === '' && cm.value === '' &&
            date.value === '' || kg.value === '' || cm.value === '' ||
            date.value === '') {

            error.style.display = 'flex';
            cancel.addEventListener('click', function () {
                error.style.display = 'none';
            })
            console.log('values cannot be empty');
        } else {
            // console.log(typeof Number(kg.value) + '' + typeof Number(cm.value));
            dates.innerText = `Date: ${date.value}`;
            cwg.innerHTML = `<p>${kg.value} <span class= 'deep'>kg</span></p>`;
            let diff = kg.value - 85;


            if (kg.value > 85) {
                remarks.innerText = `-${diff}kg difference remain`;
                remarks.style.color = 'red';
                let bmi = (kg.value / cm.value / cm.value) * 10000;

                bmi = Math.round(bmi * 10) / 10;

                bmiRes.innerText = bmi;



                summary.innerText = `${cm.value}cm Height, ${kg.value}kg Weight`;

            } else if (kg.value < 85) {

                remarks.innerHTML = `Congrats!!! you are ${diff}kg less than overweight`;
                remarks.style.color = 'green';

                let bmi = (kg.value / cm.value / cm.value) * 10000;

                bmi = Math.round(bmi * 10) / 10;

                bmiRes.innerText = bmi;

                summary.innerText = `${cm.value}cm Height, ${kg.value}kg Weight`;

            }



            gif.style.display = 'block';

            setTimeout(function () {

                gif.style.display = 'none';

                allWrap.style.display = 'block';
                bmi.style.display = 'flex';
                weightRes.style.display = 'grid';

            }, 3000)



        }

        console.log('hey');

        e.preventDefault();
    }



    // console.log(data);

    // console.log(data);

    // let tracks;





    yes.addEventListener('click', save);

    function save() {

        let data = {
            date: `${date.value}`,
            weight: Number(kg.value),

        };

        console.log(data);

        if (localStorage.getItem('tracks') == null) {

            tracks = [];

        } else {

            tracks = JSON.parse(localStorage.getItem('tracks'));
            console.log('yipeee!');

            // let list = 1;

            // console.log(list);

            // console.log('tracks is already existing...');

            // // let trackList = JSON.parse(localStorage.getItem('tracks'));
            // // trackList.push(data);

        }

        tracks.push(data);

        localStorage.setItem('tracks', JSON.stringify(tracks));

        window.location = 'index.html';

    }


}



//recordsEntity.forEach(function(records){ if(records.date === '2019-12-11'){console.log('records already exist for this day')}})