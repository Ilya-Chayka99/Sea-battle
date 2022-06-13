let pol1=[]
let pol2=[]
//*******/Зануление двух полей/****************
function zero()
{
    for(let i=0;i<100;i++)
    {
        pol1[i]=0;
        pol2[i]=0;
    }
}
zero()
//*******/Печать полей/****************

function PrintPole(num)
{
    let pole1 = document.querySelector(".pole1")
    let pole2 = document.querySelector(".pole2")
    if(num===1)
    {
        for(let j=0;j<10;j++)
            for(let i=0;i<10;i++)
                pole1.insertAdjacentHTML('beforeend',`<button class="kl1 ${i+1+j*10}" value="${i+1+j*10}">${i+1+j*10}</button>`)
    }
    if(num===2)
    {
        for(let j=0;j<10;j++)
            for(let i=0;i<10;i++)
                pole2.insertAdjacentHTML('beforeend',`<button class="kl2 ${100+i+1+j*10}" value="${i+1+j*10}">${i+1+j*10}</button>`)
    }
    if(num===3)
    {
        for(let j=0;j<10;j++)
            for(let i=0;i<10;i++)
            {
                pole1.insertAdjacentHTML('beforeend', `<button class="kl1 ${i+1+j*10}" value="${i+1+j*10}">${i + 1 + j * 10}</button>`)
                pole2.insertAdjacentHTML('beforeend', `<button class="kl2 ${100+i+1+j*10}" value="${i+1+j*10}">${i + 1 + j * 10}</button>`)
            }
    }
}
PrintPole(3)
//*******/Регистрация нажатия на клетку/****************

let p1 = document.querySelectorAll(".kl1")
 p1.forEach(el=>{el.addEventListener("click",()=>{pop(el)})})

function pop(el)
{
    el.style.backgroundColor="red"
    el.setAttribute("disabled","disabled")
}

//*******/Расстановка кораблей/****************

function ArrangementOfShips (num)
{
    if(num===1)
    {
        for (let j=4;j>0;j--)
        {
            let pol=Math.floor(Math.random()*2)
            console.log(pol)
            if(pol===0)
            {
                for(let kol=5-j;kol>0;kol--)
                {
                    let stroka = Math.floor(Math.random()*10)
                    let stolbe = Math.floor(Math.random()*(10-j+1))
                    console.log(stroka+" "+pol)
                    console.log(stolbe+" "+pol)
                    if (pol1[stroka*10+stolbe]===0)
                    {
                        let sum=1;
                        for(let l=1;l<j;l++)
                            if(pol1[stroka*10+stolbe+l]===0) sum++
                        console.log("aaaaaaaaaaaa="+sum+"  "+j+" "+kol+"   p="+pol)
                        if (sum!==j)
                        {
                            kol++
                        }
                        else
                        {
                            console.log(pol1)
                            let pole1 = document.querySelectorAll(".kl1")
                            for(let i=0;i<j;i++)
                            {
                                pole1[stroka*10+stolbe+i].style.backgroundColor="blue"
                                pol1[stroka*10+stolbe+i]=j*10
                            }
                            filling_the_space(j,pol,stroka * 10 + stolbe,1)
                        }
                    }
                    else kol++
                }


            }
            else
            {
                for(let kol=5-j;kol>0;kol--)
                {
                    let stroka = Math.floor(Math.random()*(10-j+1))
                    let stolbe = Math.floor(Math.random()*10)
                    console.log(stroka+" "+pol)
                    console.log(stolbe+" "+pol)
                    if (pol1[stroka*10+stolbe]===0)
                    {
                        let sum1=1;
                        for(let l=1;l<j;l++)
                            if(pol1[stroka*10+stolbe+l*10]===0) sum1++
                        console.log("aaaaaaaaaaaa="+sum1+"  "+j+" "+kol)
                        if (sum1!==j)
                        {
                            kol++
                        }
                        else
                        {
                            console.log(pol1)
                            let pole1 = document.querySelectorAll(".kl1")
                            for (let i = 0; i < j; i++) {
                                pole1[stroka * 10 + stolbe + i * 10].style.backgroundColor = "blue"
                                pol1[stroka * 10 + stolbe + i * 10] = j * 10
                            }
                            filling_the_space(j,pol,stroka * 10 + stolbe,1)
                        }
                    }
                    else kol++
                }

            }
        }

    }
    else
    {
        for (let j=4;j>0;j--)
        {
            let pol=Math.floor(Math.random()*2)
            console.log(pol)
            if(pol===0)
            {
                for(let kol=5-j;kol>0;kol--)
                {
                    let stroka = Math.floor(Math.random()*10)
                    let stolbe = Math.floor(Math.random()*(10-j+1))
                    console.log(stroka+" "+pol)
                    console.log(stolbe+" "+pol)
                    if (pol2[stroka*10+stolbe]===0)
                    {
                        let sum=1;
                        for(let l=1;l<j;l++)
                            if(pol2[stroka*10+stolbe+l]===0) sum++
                        console.log("aaaaaaaaaaaa="+sum+"  "+j+" "+kol+"   p="+pol)
                        if (sum!==j)
                        {
                            kol++
                        }
                        else
                        {
                            console.log(pol1)
                            let pole2 = document.querySelectorAll(".kl2")
                            for(let i=0;i<j;i++)
                            {
                                pole2[stroka*10+stolbe+i].style.backgroundColor="blue"
                                pol2[stroka*10+stolbe+i]=j*10
                            }
                            filling_the_space(j,pol,stroka * 10 + stolbe,2)
                        }
                    }
                    else kol++
                }


            }
            else
            {
                for(let kol=5-j;kol>0;kol--)
                {
                    let stroka = Math.floor(Math.random()*(10-j+1))
                    let stolbe = Math.floor(Math.random()*10)
                    console.log(stroka+" "+pol)
                    console.log(stolbe+" "+pol)
                    if (pol2[stroka*10+stolbe]===0)
                    {
                        let sum1=1;
                        for(let l=1;l<j;l++)
                            if(pol2[stroka*10+stolbe+l*10]===0) sum1++
                        console.log("aaaaaaaaaaaa="+sum1+"  "+j+" "+kol)
                        if (sum1!==j)
                        {
                            kol++
                        }
                        else
                        {
                            console.log(pol1)
                            let pole2 = document.querySelectorAll(".kl2")
                            for (let i = 0; i < j; i++) {
                                pole2[stroka * 10 + stolbe + i * 10].style.backgroundColor = "blue"
                                pol2[stroka * 10 + stolbe + i * 10] = j * 10
                            }
                            filling_the_space(j,pol,stroka * 10 + stolbe,2)
                        }
                    }
                    else kol++
                }

            }
        }
    }
    render()
}

ArrangementOfShips(1)
ArrangementOfShips(2)

//*******/Зарисовка зоны вокруг кораблей/****************

function filling_the_space(kolP,polpj,koord,poles)
{
    if(poles===1)
    {
        if(polpj===0)
        {
            for(let i=0;i<kolP;i++)
            {
                if (pol1[koord + i - 11] === 0 && (koord + i)%10 !== 0 ) pol1[koord + i - 11] = kolP * 10 + 1
                if (pol1[koord + i - 10] === 0) pol1[koord + i - 10] = kolP * 10 + 1
                if (pol1[koord + i - 9] === 0 && (koord + i)%10 !== 9) pol1[koord + i - 9] = kolP * 10 + 1
                if (pol1[koord + i - 1] === 0 && (koord + i)%10 !== 0) pol1[koord + i - 1] = kolP * 10 + 1
                if (pol1[koord + i + 1] === 0 && (koord + i)%10 !== 9) pol1[koord + i + 1] = kolP * 10 + 1
                if (pol1[koord + i + 9] === 0 && (koord + i)%10 !== 0) pol1[koord + i + 9] = kolP * 10 + 1
                if (pol1[koord + i + 10] === 0) pol1[koord + i + 10] = kolP * 10 + 1
                if (pol1[koord + i + 11] === 0 && (koord + i)%10 !== 9) pol1[koord + i + 11] = kolP * 10 + 1
                console.log((koord + i)%10 + "--------")
            }
        }
        else
        {
            for(let i=0;i<kolP;i++)
            {
                if (pol1[koord + i*10 - 11] === 0  && (koord + i*10)%10 !== 0) pol1[koord + i*10 - 11] = kolP * 10 + 1
                if (pol1[koord + i*10 - 10] === 0 && (koord + i*10)/10 !== 0) pol1[koord + i*10 - 10] = kolP * 10 + 1
                if (pol1[koord + i*10 - 9] === 0 && (koord + i*10)%10 !== 9) pol1[koord + i*10 - 9] = kolP * 10 + 1
                if (pol1[koord + i*10 - 1] === 0 && (koord + i*10)%10 !== 0) pol1[koord + i*10 - 1] = kolP * 10 + 1
                if (pol1[koord + i*10 + 1] === 0 && (koord + i*10)%10 !== 9) pol1[koord + i*10 + 1] = kolP * 10 + 1
                if (pol1[koord + i*10 + 9] === 0 && (koord + i*10)%10 !== 0) pol1[koord + i*10 + 9] = kolP * 10 + 1
                if (pol1[koord + i*10 + 10] === 0 && (koord + i*10)/10 !== 9) pol1[koord + i*10 + 10] = kolP * 10 + 1
                if (pol1[koord + i*10 + 11] === 0 && (koord + i*10)%10 !== 9) pol1[koord + i*10 + 11] = kolP * 10 + 1
            }
        }
    }
    else
    {
        if(polpj===0)
        {
            for(let i=0;i<kolP;i++)
            {
                if (pol2[koord + i - 11] === 0 && (koord + i)%10 !== 0 ) pol2[koord + i - 11] = kolP * 10 + 1
                if (pol2[koord + i - 10] === 0) pol2[koord + i - 10] = kolP * 10 + 1
                if (pol2[koord + i - 9] === 0 && (koord + i)%10 !== 9) pol2[koord + i - 9] = kolP * 10 + 1
                if (pol2[koord + i - 1] === 0 && (koord + i)%10 !== 0) pol2[koord + i - 1] = kolP * 10 + 1
                if (pol2[koord + i + 1] === 0 && (koord + i)%10 !== 9) pol2[koord + i + 1] = kolP * 10 + 1
                if (pol2[koord + i + 9] === 0 && (koord + i)%10 !== 0) pol2[koord + i + 9] = kolP * 10 + 1
                if (pol2[koord + i + 10] === 0) pol2[koord + i + 10] = kolP * 10 + 1
                if (pol2[koord + i + 11] === 0 && (koord + i)%10 !== 9) pol2[koord + i + 11] = kolP * 10 + 1
            }
        }
        else
        {
            for(let i=0;i<kolP;i++)
            {
                if (pol2[koord + i*10 - 11] === 0  && (koord + i*10)%10 !== 0) pol2[koord + i*10 - 11] = kolP * 10 + 1
                if (pol2[koord + i*10 - 10] === 0 && (koord + i*10)/10 !== 0) pol2[koord + i*10 - 10] = kolP * 10 + 1
                if (pol2[koord + i*10 - 9] === 0 && (koord + i*10)%10 !== 9) pol2[koord + i*10 - 9] = kolP * 10 + 1
                if (pol2[koord + i*10 - 1] === 0 && (koord + i*10)%10 !== 0) pol2[koord + i*10 - 1] = kolP * 10 + 1
                if (pol2[koord + i*10 + 1] === 0 && (koord + i*10)%10 !== 9) pol2[koord + i*10 + 1] = kolP * 10 + 1
                if (pol2[koord + i*10 + 9] === 0 && (koord + i*10)%10 !== 0) pol2[koord + i*10 + 9] = kolP * 10 + 1
                if (pol2[koord + i*10 + 10] === 0 && (koord + i*10)/10 !== 9) pol2[koord + i*10 + 10] = kolP * 10 + 1
                if (pol2[koord + i*10 + 11] === 0 && (koord + i*10)%10 !== 9) pol2[koord + i*10 + 11] = kolP * 10 + 1
                console.log((koord + i)%10 + "--------")
            }
        }
    }

}


function render()
{
    let pole1 = document.querySelectorAll(".kl1")
    for(let i=0;i<100;i++)
    {
        let b=pol1[i]/10
        let c=pol1[i]%10
        console.log(c)
        if(b===0)
        {

        }
        else
        {
            if(c===0) pole1[i].style.backgroundColor = "blue"
             else pole1[i].style.backgroundColor = "green"
        }

    }
    let pole2 = document.querySelectorAll(".kl2")
    for(let i=0;i<100;i++)
    {
        let b=pol2[i]/10
        let c=pol2[i]%10
        console.log(c)
        if(b===0)
        {

        }
        else
        {
            if(c===0) pole2[i].style.backgroundColor = "blue"
             else pole2[i].style.backgroundColor = "green"
        }

    }
}