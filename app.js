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
        for (let j=4;j>2;j--)
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
                        }
                    }
                    else kol++
                }

            }
        }

    }
}

ArrangementOfShips(1)

//*******/Зарисовка зоны вокруг кораблей/****************




