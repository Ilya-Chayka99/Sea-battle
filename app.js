let pol1=[]
let pol2=[]
let p1_41pal=[]
let p1_31pal=[]
let p1_32pal=[]
let p1_21pal=[]
let p1_22pal=[]
let p1_23pal=[]
let p1_11pal=[]
let p1_12pal=[]
let p1_13pal=[]
let p1_14pal=[]
let p1_41pals=0,p1_31pals=0,p1_32pals=0,p1_21pals=0,p1_22pals=0,p1_23pals=0,p1_11pals=0,p1_12pals=0,p1_13pals=0,p1_14pals=0;
let p2_41pal=[]
let p2_31pal=[]
let p2_32pal=[]
let p2_21pal=[]
let p2_22pal=[]
let p2_23pal=[]
let p2_11pal=[]
let p2_12pal=[]
let p2_13pal=[]
let p2_14pal=[]
let p2_41pals=0,p2_31pals=0,p2_32pals=0,p2_21pals=0,p2_22pals=0,p2_23pals=0,p2_11pals=0,p2_12pals=0,p2_13pals=0,p2_14pals=0;
let hod=1
let game1=0
let game2=0
zero(0)
PrintPole()
// localStorage.clear()
//*******/Локал стор/****************
function localStoree()
{
    if(localStorage.length===0)
    {
        localStorage.setItem("h",'0')
        localStorage.setItem("m",'0')
        localStorage.setItem("s",'0')
        localStorage.setItem("hod",hod)
        localStorage.setItem("game1",game1)
        localStorage.setItem("game2",game2)
        localStorage.setItem("141",p1_41pals)
        localStorage.setItem("131",p1_31pals)
        localStorage.setItem("132",p1_32pals)
        localStorage.setItem("121",p1_21pals)
        localStorage.setItem("122",p1_22pals)
        localStorage.setItem("123",p1_23pals)
        localStorage.setItem("111",p1_11pals)
        localStorage.setItem("112",p1_12pals)
        localStorage.setItem("113",p1_13pals)
        localStorage.setItem("114",p1_14pals)
        localStorage.setItem("241",p2_41pals)
        localStorage.setItem("231",p2_31pals)
        localStorage.setItem("232",p2_32pals)
        localStorage.setItem("221",p2_21pals)
        localStorage.setItem("222",p2_22pals)
        localStorage.setItem("223",p2_23pals)
        localStorage.setItem("211",p2_11pals)
        localStorage.setItem("212",p2_12pals)
        localStorage.setItem("213",p2_13pals)
        localStorage.setItem("214",p2_14pals)

        localStorage.setItem("141m",JSON.stringify(p1_41pal))
        localStorage.setItem("131m",JSON.stringify(p1_31pal))
        localStorage.setItem("132m",JSON.stringify(p1_32pal))
        localStorage.setItem("121m",JSON.stringify(p1_21pal))
        localStorage.setItem("122m",JSON.stringify(p1_22pal))
        localStorage.setItem("123m",JSON.stringify(p1_23pal))
        localStorage.setItem("111m",JSON.stringify(p1_11pal))
        localStorage.setItem("112m",JSON.stringify(p1_12pal))
        localStorage.setItem("113m",JSON.stringify(p1_13pal))
        localStorage.setItem("114m",JSON.stringify(p1_14pal))
        localStorage.setItem("241m",JSON.stringify(p2_41pal))
        localStorage.setItem("231m",JSON.stringify(p2_31pal))
        localStorage.setItem("232m",JSON.stringify(p2_32pal))
        localStorage.setItem("221m",JSON.stringify(p2_21pal))
        localStorage.setItem("222m",JSON.stringify(p2_22pal))
        localStorage.setItem("223m",JSON.stringify(p2_23pal))
        localStorage.setItem("211m",JSON.stringify(p2_11pal))
        localStorage.setItem("212m",JSON.stringify(p2_12pal))
        localStorage.setItem("213m",JSON.stringify(p2_13pal))
        localStorage.setItem("214m",JSON.stringify(p2_14pal))

        localStorage.setItem("pole1",JSON.stringify(pol1))
        localStorage.setItem("pole2",JSON.stringify(pol2))
    }
    else
    {
        hod=+localStorage.getItem("hod")
        game1=+localStorage.getItem("game1")
        game2=+localStorage.getItem("game2")
        p1_41pals=+localStorage.getItem("141")
        p1_31pals=+localStorage.getItem("131")
        p1_32pals=+localStorage.getItem("132")
        p1_21pals=+localStorage.getItem("121")
        p1_22pals=+localStorage.getItem("122")
        p1_23pals=+localStorage.getItem("123")
        p1_11pals=+localStorage.getItem("111")
        p1_12pals=+localStorage.getItem("112")
        p1_13pals=+localStorage.getItem("113")
        p1_14pals=+localStorage.getItem("114")
        p2_41pals=+localStorage.getItem("241")
        p2_31pals=+localStorage.getItem("231")
        p2_32pals=+localStorage.getItem("232")
        p2_21pals=+localStorage.getItem("221")
        p2_22pals=+localStorage.getItem("222")
        p2_23pals=+localStorage.getItem("223")
        p2_11pals=+localStorage.getItem("211")
        p2_12pals=+localStorage.getItem("212")
        p2_13pals=+localStorage.getItem("213")
        p2_14pals=+localStorage.getItem("214")

        p1_41pal=JSON.parse(localStorage.getItem("141m"))
        p1_31pal=JSON.parse(localStorage.getItem("131m"))
        p1_32pal=JSON.parse(localStorage.getItem("132m"))
        p1_21pal=JSON.parse(localStorage.getItem("121m"))
        p1_22pal=JSON.parse(localStorage.getItem("122m"))
        p1_23pal=JSON.parse(localStorage.getItem("123m"))
        p1_11pal=JSON.parse(localStorage.getItem("111m"))
        p1_12pal=JSON.parse(localStorage.getItem("112m"))
        p1_13pal=JSON.parse(localStorage.getItem("113m"))
        p1_14pal=JSON.parse(localStorage.getItem("114m"))
        p2_41pal=JSON.parse(localStorage.getItem("241m"))
        p2_31pal=JSON.parse(localStorage.getItem("231m"))
        p2_32pal=JSON.parse(localStorage.getItem("232m"))
        p2_21pal=JSON.parse(localStorage.getItem("221m"))
        p2_22pal=JSON.parse(localStorage.getItem("222m"))
        p2_23pal=JSON.parse(localStorage.getItem("223m"))
        p2_11pal=JSON.parse(localStorage.getItem("211m"))
        p2_12pal=JSON.parse(localStorage.getItem("212m"))
        p2_13pal=JSON.parse(localStorage.getItem("213m"))
        p2_14pal=JSON.parse(localStorage.getItem("214m"))
        pol1=JSON.parse(localStorage.getItem("pole1"))
        pol2=JSON.parse(localStorage.getItem("pole2"))

        if(game1===1)
        {


            debtn()
            resColor()
            let b= document.querySelector(".gameOverbtn")
            b.style.display="block"
            if(hod===1)
                DeActive(2)
            else
                DeActive(1)
            clock()

        }
        if(game2===1)
        {
            game()
        }
    }
}
localStoree()

//*******/Нажатие кнопок рандом/****************

let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")
let pl1 = document.querySelector("#pl1")
let pl2 = document.querySelector("#pl2")
b1.addEventListener("click",()=>{ArrangementOfShips(1)})
b2.addEventListener("click",()=>{
    ArrangementOfShips(2)
    ArrangementOfShips(2)
})


//*******/Печать полей/****************

function PrintPole()
{
    let pole1 = document.querySelector(".pole1")
    let pole2 = document.querySelector(".pole2")
        for(let j=0;j<10;j++)
            for(let i=0;i<10;i++)
            {
                pole1.insertAdjacentHTML('beforeend', `<button class="kl1 k${i+1+j*10}" value="${i+1+j*10}" disabled></button>`)
                pole2.insertAdjacentHTML('beforeend', `<button class="kl2 k${100+i+1+j*10}" value="${100+i+1+j*10}" disabled></button>`)
            }

}


//*******/Регистрация нажатия на клетку/****************

let p1 = document.querySelectorAll(".kl1")
 p1.forEach(el=>{el.addEventListener("click",()=>{fire(el)})})
let p2 = document.querySelectorAll(".kl2")
 p2.forEach(el=>{el.addEventListener("click",()=>{fire(el)})})

function fire(ell)
{
    let numKletka=+ell.value
    let k=0;
    if(numKletka<=100)
    {
        p1_41pal.forEach(el=>{
            if(el===numKletka-1)
            {
                p1_41pals++
                k++;
                pol1[numKletka-1]=42
                ell.style.backgroundColor="red"
            }
        })
        if(k===0)
        {
            p1_31pal.forEach(el=>{
                if(el===numKletka-1)
                {
                    p1_31pals++
                    k++;
                    pol1[numKletka-1]=32
                    ell.style.backgroundColor="red"
                }
            })
            if(k===0)
            {
                p1_32pal.forEach(el=>{
                    if(el===numKletka-1)
                    {
                        p1_32pals++
                        k++;
                        pol1[numKletka-1]=32
                        ell.style.backgroundColor="red"
                    }
                })
                if(k===0)
                {
                    p1_21pal.forEach(el=>{
                        if(el===numKletka-1)
                        {
                            p1_21pals++
                            k++
                            pol1[numKletka-1]=22
                            ell.style.backgroundColor="red"
                        }
                    })
                    if(k===0)
                    {
                        p1_22pal.forEach(el=>{
                            if(el===numKletka-1)
                            {
                                p1_22pals++
                                k++
                                pol1[numKletka-1]=22
                                ell.style.backgroundColor="red"
                            }
                        })
                        if(k===0)
                        {
                            p1_23pal.forEach(el=>{
                                if(el===numKletka-1)
                                {
                                    p1_23pals++
                                    k++
                                    pol1[numKletka-1]=22
                                    ell.style.backgroundColor="red"
                                }
                            })
                            if(k===0)
                            {
                                p1_11pal.forEach(el=>{
                                    if(el===numKletka-1)
                                    {
                                        p1_11pals++
                                        k++
                                        pol1[numKletka-1]=12
                                        ell.style.backgroundColor="red"
                                    }
                                })
                                if(k===0)
                                {
                                    p1_12pal.forEach(el=>{
                                        if(el===numKletka-1)
                                        {
                                            p1_12pals++
                                            k++
                                            pol1[numKletka-1]=12
                                            ell.style.backgroundColor="red"
                                        }
                                    })
                                    if(k===0)
                                    {
                                        p1_13pal.forEach(el=>{
                                            if(el===numKletka-1)
                                            {
                                                p1_13pals++
                                                k++
                                                pol1[numKletka-1]=12
                                                ell.style.backgroundColor="red"
                                            }
                                        })
                                        if(k===0)
                                        {
                                            p1_14pal.forEach(el=>{
                                                if(el===numKletka-1)
                                                {
                                                    p1_14pals++
                                                    k++
                                                    pol1[numKletka-1]=12
                                                    ell.style.backgroundColor="red"
                                                }
                                                else
                                                {
                                                    ell.style.background="url('../img/1.png') center center / 100% no-repeat"
                                                    pol1[numKletka-1]=1
                                                }
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(p1_41pals===p1_41pal.length)
        {
            p1_41pals++
            killShip(1,41)
        }
        if(p1_31pals===p1_31pal.length)
        {
            p1_31pals++
            killShip(1,31)
        }
        if(p1_32pals===p1_32pal.length)
        {
            p1_32pals++
            killShip(1,32)
        }
        if(p1_21pals===p1_21pal.length)
        {
            p1_21pals++
            killShip(1,21)
        }
        if(p1_22pals===p1_22pal.length)
        {
            p1_22pals++
            killShip(1,22)
        }
        if(p1_23pals===p1_23pal.length)
        {
            p1_23pals++
            killShip(1,23)
        }
        if(p1_11pals===p1_11pal.length)
        {
            p1_11pals++
            killShip(1,11)
        }
        if(p1_12pals===p1_12pal.length)
        {
            p1_12pals++
            killShip(1,12)
        }
        if(p1_13pals===p1_13pal.length)
        {
            p1_13pals++
            killShip(1,13)
        }
        if(p1_14pals===p1_14pal.length)
        {
            p1_14pals++
            killShip(1,14)
        }
        if(k===0)
        {
            DeActive(1)
            hod=2
            localStorage.setItem("hod",hod)
        }

        localStorage.setItem("141",p1_41pals)
        localStorage.setItem("131",p1_31pals)
        localStorage.setItem("132",p1_32pals)
        localStorage.setItem("121",p1_21pals)
        localStorage.setItem("122",p1_22pals)
        localStorage.setItem("123",p1_23pals)
        localStorage.setItem("111",p1_11pals)
        localStorage.setItem("112",p1_12pals)
        localStorage.setItem("113",p1_13pals)
        localStorage.setItem("114",p1_14pals)
        localStorage.setItem("pole1",JSON.stringify(pol1))
    }
    else
    {
        numKletka-=100
        p2_41pal.forEach(el=>{
            if(el===numKletka-1)
            {
                p2_41pals++
                k++;
                pol2[numKletka-1]=42
                ell.style.backgroundColor="red"
            }
        })
        if(k===0)
        {
            p2_31pal.forEach(el=>{
                if(el===numKletka-1)
                {
                    p2_31pals++
                    k++;
                    pol2[numKletka-1]=32
                    ell.style.backgroundColor="red"
                }
            })
            if(k===0)
            {
                p2_32pal.forEach(el=>{
                    if(el===numKletka-1)
                    {
                        p2_32pals++
                        k++;
                        pol2[numKletka-1]=32
                        ell.style.backgroundColor="red"
                    }
                })
                if(k===0)
                {
                    p2_21pal.forEach(el=>{
                        if(el===numKletka-1)
                        {
                            p2_21pals++
                            k++
                            pol2[numKletka-1]=22
                            ell.style.backgroundColor="red"
                        }
                    })
                    if(k===0)
                    {
                        p2_22pal.forEach(el=>{
                            if(el===numKletka-1)
                            {
                                p2_22pals++
                                k++
                                pol2[numKletka-1]=22
                                ell.style.backgroundColor="red"
                            }
                        })
                        if(k===0)
                        {
                            p2_23pal.forEach(el=>{
                                if(el===numKletka-1)
                                {
                                    p2_23pals++
                                    k++
                                    pol2[numKletka-1]=22
                                    ell.style.backgroundColor="red"
                                }
                            })
                            if(k===0)
                            {
                                p2_11pal.forEach(el=>{
                                    if(el===numKletka-1)
                                    {
                                        p2_11pals++
                                        k++
                                        pol2[numKletka-1]=12
                                        ell.style.backgroundColor="red"
                                    }
                                })
                                if(k===0)
                                {
                                    p2_12pal.forEach(el=>{
                                        if(el===numKletka-1)
                                        {
                                            p2_12pals++
                                            k++
                                            pol2[numKletka-1]=12
                                            ell.style.backgroundColor="red"
                                        }
                                    })
                                    if(k===0)
                                    {
                                        p2_13pal.forEach(el=>{
                                            if(el===numKletka-1)
                                            {
                                                p2_13pals++
                                                k++
                                                pol2[numKletka-1]=12
                                                ell.style.backgroundColor="red"
                                            }
                                        })
                                        if(k===0)
                                        {
                                            p2_14pal.forEach(el=>{
                                                if(el===numKletka-1)
                                                {
                                                    p2_14pals++
                                                    k++
                                                    pol2[numKletka-1]=12
                                                    ell.style.backgroundColor="red"
                                                }
                                                else
                                                {
                                                    ell.style.background="url('../img/1.png') center center / 100% no-repeat"
                                                    pol2[numKletka-1]=1
                                                }
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(p2_41pals===p2_41pal.length)
        {
            p2_41pals++
            killShip(2,41)
        }
        if(p2_31pals===p2_31pal.length)
        {
            p2_31pals++
            killShip(2,31)
        }
        if(p2_32pals===p2_32pal.length)
        {
            p2_32pals++
            killShip(2,32)
        }
        if(p2_21pals===p2_21pal.length)
        {
            p2_21pals++
            killShip(2,21)
        }
        if(p2_22pals===p2_22pal.length)
        {
            p2_22pals++
            killShip(2,22)
        }
        if(p2_23pals===p2_23pal.length)
        {
            p2_23pals++
            killShip(2,23)
        }
        if(p2_11pals===p2_11pal.length)
        {
            p2_11pals++
            killShip(2,11)
        }
        if(p2_12pals===p2_12pal.length)
        {
            p2_12pals++
            killShip(2,12)
        }
        if(p2_13pals===p2_13pal.length)
        {
            p2_13pals++
            killShip(2,13)
        }
        if(p2_14pals===p2_14pal.length)
        {
            p2_14pals++
            killShip(2,14)
        }
        if(k===0)
        {
            DeActive(2)
            hod=1
            localStorage.setItem("hod",hod)
        }
        localStorage.setItem("241",p2_41pals)
        localStorage.setItem("231",p2_31pals)
        localStorage.setItem("232",p2_32pals)
        localStorage.setItem("221",p2_21pals)
        localStorage.setItem("222",p2_22pals)
        localStorage.setItem("223",p2_23pals)
        localStorage.setItem("211",p2_11pals)
        localStorage.setItem("212",p2_12pals)
        localStorage.setItem("213",p2_13pals)
        localStorage.setItem("214",p2_14pals)
        localStorage.setItem("pole2",JSON.stringify(pol2))
    }

    ell.setAttribute("disabled","disabled")
}
//*******/Проверка на смерть корабля/****************
function killShipColor(el,num)
{
    let pole1 = document.querySelectorAll(".kl1")
    let pole2 = document.querySelectorAll(".kl2")
    if(num===2)
    {
        if (pol2[el - 11]%10===1 && el%10!==0)
        {
            pol2[el - 11] = 1
            pole2[el-11].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el-11].setAttribute("disabled","disabled")
        }
        if (pol2[el - 10]%10===1)
        {
            pol2[el - 10] = 1
            pole2[el-10].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el-10].setAttribute("disabled","disabled")
        }
        if (pol2[el - 9]%10===1 && el%10!==9)
        {
            pol2[el - 9] = 1
            pole2[el-9].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el-9].setAttribute("disabled","disabled")
        }
        if (pol2[el - 1]%10===1 && el%10!==0)
        {
            pol2[el - 1] = 1
            pole2[el-1].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el-1].setAttribute("disabled","disabled")
        }
        if (pol2[el + 1]%10===1 && el%10!==9)
        {
            pol2[el + 1] = 1
            pole2[el+1].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el+1].setAttribute("disabled","disabled")
        }
        if (pol2[el + 9] %10===1 && el%10!==0)
        {
            pol2[el + 9] = 1
            pole2[el+9].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el+9].setAttribute("disabled","disabled")
        }
        if (pol2[el + 10] %10===1)
        {
            pol2[el + 10] = 1
            pole2[el+10].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el+10].setAttribute("disabled","disabled")
        }
        if (pol2[el + 11 ] %10===1 && el%10!==9)
        {
            pol2[el + 11] = 1
            pole2[el+11].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole2[el+11].setAttribute("disabled","disabled")
        }
    }
    else
    {
        if (pol1[el - 11]%10===1 && el%10!==0)
        {
            pol1[el - 11] = 1
            pole1[el-11].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el-11].setAttribute("disabled","disabled")
        }
        if (pol1[el - 10]%10===1)
        {
            pol1[el - 10] = 1
            pole1[el-10].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el-10].setAttribute("disabled","disabled")
        }
        if (pol1[el - 9]%10===1 && el%10!==9)
        {
            pol1[el - 9] = 1
            pole1[el-9].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el-9].setAttribute("disabled","disabled")
        }
        if (pol1[el - 1]%10===1 && el%10!==0)
        {
            pol1[el - 1] = 1
            pole1[el-1].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el-1].setAttribute("disabled","disabled")
        }
        if (pol1[el + 1]%10===1 && el%10!==9)
        {
            pol1[el + 1] = 1
            pole1[el+1].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el+1].setAttribute("disabled","disabled")
        }
        if (pol1[el + 9] %10===1 && el%10!==0)
        {
            pol1[el + 9] = 1
            pole1[el+9].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el+9].setAttribute("disabled","disabled")
        }
        if (pol1[el + 10] %10===1)
        {
            pol1[el + 10] = 1
            pole1[el+10].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el+10].setAttribute("disabled","disabled")
        }
        if (pol1[el + 11 ] %10===1 && el%10!==9)
        {
            pol1[el + 11] = 1
            pole1[el+11].style.background="url('../img/1.png') center center / 100% no-repeat"
            pole1[el+11].setAttribute("disabled","disabled")
        }
    }
    localStorage.setItem("pole1",JSON.stringify(pol1))
    localStorage.setItem("pole2",JSON.stringify(pol2))

}


function killShip(planeKill,numShip)
{

    if(planeKill===2)
    {
        if(numShip===41)
        {
            p2_41pal.forEach(el=>{
                pol2[el]=43
                killShipColor(el,2)
            })
        }
        if(numShip===31)
        {
            p2_31pal.forEach(el=>{
                pol2[el]=33
                killShipColor(el,2)
            })
        }
        if(numShip===32)
        {
            p2_32pal.forEach(el=>{
                pol2[el]=33
                killShipColor(el,2)
            })
        }
        if(numShip===21)
        {
            p2_21pal.forEach(el=>{
                pol2[el]=23
                killShipColor(el,2)
            })
        }
        if(numShip===22)
        {
            p2_22pal.forEach(el=>{
                pol2[el]=23
                killShipColor(el,2)
            })
        }
        if(numShip===23)
        {
            p2_23pal.forEach(el=>{
                pol2[el]=23
                killShipColor(el,2)
            })
        }
        if(numShip===11)
        {
            p2_11pal.forEach(el=>{
                pol2[el]=13
                killShipColor(el,2)
            })
        }
        if(numShip===12)
        {
            p2_12pal.forEach(el=>{
                pol2[el]=13
                killShipColor(el,2)
            })
        }
        if(numShip===13)
        {
            p2_13pal.forEach(el=>{
                pol2[el]=13
                killShipColor(el,2)
            })
        }
        if(numShip===14)
        {
            p2_14pal.forEach(el=>{
                pol2[el]=13
                killShipColor(el,2)
            })
        }
    }
    else
    {
        if(numShip===41)
        {
            p1_41pal.forEach(el=>{
                pol1[el]=43
                killShipColor(el,1)
            })
        }
        if(numShip===31)
        {
            p1_31pal.forEach(el=>{
                pol1[el]=33
                killShipColor(el,1)
            })
        }
        if(numShip===32)
        {
            p1_32pal.forEach(el=>{
                pol1[el]=33
                killShipColor(el,1)
            })
        }
        if(numShip===21)
        {
            p1_21pal.forEach(el=>{
                pol1[el]=23
                killShipColor(el,1)
            })
        }
        if(numShip===22)
        {
            p1_22pal.forEach(el=>{
                pol1[el]=23
                killShipColor(el,1)
            })
        }
        if(numShip===23)
        {
            p1_23pal.forEach(el=>{
                pol1[el]=23
                killShipColor(el,1)
            })
        }
        if(numShip===11)
        {
            p1_11pal.forEach(el=>{
                pol1[el]=13
                killShipColor(el,1)
            })
        }
        if(numShip===12)
        {
            p1_12pal.forEach(el=>{
                pol1[el]=13
                killShipColor(el,1)
            })
        }
        if(numShip===13)
        {
            p1_13pal.forEach(el=>{
                pol1[el]=13
                killShipColor(el,1)
            })
        }
        if(numShip===14)
        {
            p1_14pal.forEach(el=>{
                pol1[el]=13
                killShipColor(el,1)
            })
        }
    }
    localStorage.setItem("pole1",JSON.stringify(pol1))
    localStorage.setItem("pole2",JSON.stringify(pol2))
}

//*******/Расстановка кораблей/****************

function ArrangementOfShips (num)
{
    zeroColor()
    zero(num)

    if(num===1)
    {
        for (let j=4;j>0;j--)
        {
            let pol=Math.floor(Math.random()*2)
            if(pol===0)
            {
                for(let kol=5-j;kol>0;kol--)
                {
                    let stroka = Math.floor(Math.random()*10)
                    let stolbe = Math.floor(Math.random()*(10-j+1))
                    if (pol1[stroka*10+stolbe]===0)
                    {
                        let sum=1;
                        for(let l=1;l<j;l++)
                            if(pol1[stroka*10+stolbe+l]===0) sum++
                        if (sum!==j) kol++
                        else
                        {
                            let pole1 = document.querySelectorAll(".kl1")
                            for(let i=0;i<j;i++)
                            {
                                pole1[stroka*10+stolbe+i].style.backgroundColor="blue"
                                pol1[stroka*10+stolbe+i]=j*10
                                if(j===4) p1_41pal[i]=stroka*10+stolbe+i
                                if(j===3 && kol===2) p1_31pal[i]=stroka*10+stolbe+i
                                if(j===3 && kol===1) p1_32pal[i]=stroka*10+stolbe+i
                                if(j===2 && kol===3) p1_21pal[i]=stroka*10+stolbe+i
                                if(j===2 && kol===2) p1_22pal[i]=stroka*10+stolbe+i
                                if(j===2 && kol===1) p1_23pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===4) p1_11pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===3) p1_12pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===2) p1_13pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===1) p1_14pal[i]=stroka*10+stolbe+i
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
                    if (pol1[stroka*10+stolbe]===0)
                    {
                        let sum1=1;
                        for(let l=1;l<j;l++)
                            if(pol1[stroka*10+stolbe+l*10]===0) sum1++
                        if (sum1!==j) kol++
                        else
                        {
                            let pole1 = document.querySelectorAll(".kl1")
                            for (let i = 0; i < j; i++) {
                                pole1[stroka * 10 + stolbe + i * 10].style.backgroundColor = "blue"
                                pol1[stroka * 10 + stolbe + i * 10] = j * 10
                                if(j===4) p1_41pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===3 && kol===2) p1_31pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===3 && kol===1) p1_32pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===2 && kol===3) p1_21pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===2 && kol===2) p1_22pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===2 && kol===1) p1_23pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===4) p1_11pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===3) p1_12pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===2) p1_13pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===1) p1_14pal[i]=stroka * 10 + stolbe + i * 10
                            }
                            filling_the_space(j,pol,stroka * 10 + stolbe,1)
                        }
                    }
                    else kol++
                }
            }
        }
        render(1)
    }
    else
    {
        for (let j=4;j>0;j--)
        {
            let pol=Math.floor(Math.random()*2)
            if(pol===0)
            {
                for(let kol=5-j;kol>0;kol--)
                {
                    let stroka = Math.floor(Math.random()*10)
                    let stolbe = Math.floor(Math.random()*(10-j+1))
                    if (pol2[stroka*10+stolbe]===0)
                    {
                        let sum=1;
                        for(let l=1;l<j;l++)
                            if(pol2[stroka*10+stolbe+l]===0) sum++
                        if (sum!==j) kol++
                        else
                        {
                            let pole2 = document.querySelectorAll(".kl2")
                            for(let i=0;i<j;i++)
                            {
                                pole2[stroka*10+stolbe+i].style.backgroundColor="blue"
                                pol2[stroka*10+stolbe+i]=j*10
                                if(j===4) p2_41pal[i]=stroka*10+stolbe+i
                                if(j===3 && kol===2) p2_31pal[i]=stroka*10+stolbe+i
                                if(j===3 && kol===1) p2_32pal[i]=stroka*10+stolbe+i
                                if(j===2 && kol===3) p1_21pal[i]=stroka*10+stolbe+i
                                if(j===2 && kol===2) p2_22pal[i]=stroka*10+stolbe+i
                                if(j===2 && kol===1) p2_23pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===4) p2_11pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===3) p2_12pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===2) p2_13pal[i]=stroka*10+stolbe+i
                                if(j===1 && kol===1) p2_14pal[i]=stroka*10+stolbe+i

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
                    if (pol2[stroka*10+stolbe]===0)
                    {
                        let sum1=1;
                        for(let l=1;l<j;l++)
                            if(pol2[stroka*10+stolbe+l*10]===0) sum1++
                        if (sum1!==j) kol++
                        else
                        {
                            let pole2 = document.querySelectorAll(".kl2")
                            for (let i = 0; i < j; i++) {
                                pole2[stroka * 10 + stolbe + i * 10].style.backgroundColor = "blue"
                                pol2[stroka * 10 + stolbe + i * 10] = j * 10
                                if(j===4) p2_41pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===3 && kol===2) p2_31pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===3 && kol===1) p2_32pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===2 && kol===3) p2_21pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===2 && kol===2) p2_22pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===2 && kol===1) p2_23pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===4) p2_11pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===3) p2_12pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===2) p2_13pal[i]=stroka * 10 + stolbe + i * 10
                                if(j===1 && kol===1) p2_14pal[i]=stroka * 10 + stolbe + i * 10
                            }
                            filling_the_space(j,pol,stroka * 10 + stolbe,2)
                        }
                    }
                    else kol++
                }
            }
        }
        render(2)
    }
    localStorage.setItem("141m",JSON.stringify(p1_41pal))
    localStorage.setItem("131m",JSON.stringify(p1_31pal))
    localStorage.setItem("132m",JSON.stringify(p1_32pal))
    localStorage.setItem("121m",JSON.stringify(p1_21pal))
    localStorage.setItem("122m",JSON.stringify(p1_22pal))
    localStorage.setItem("123m",JSON.stringify(p1_23pal))
    localStorage.setItem("111m",JSON.stringify(p1_11pal))
    localStorage.setItem("112m",JSON.stringify(p1_12pal))
    localStorage.setItem("113m",JSON.stringify(p1_13pal))
    localStorage.setItem("114m",JSON.stringify(p1_14pal))
    localStorage.setItem("241m",JSON.stringify(p2_41pal))
    localStorage.setItem("231m",JSON.stringify(p2_31pal))
    localStorage.setItem("232m",JSON.stringify(p2_32pal))
    localStorage.setItem("221m",JSON.stringify(p2_21pal))
    localStorage.setItem("222m",JSON.stringify(p2_22pal))
    localStorage.setItem("223m",JSON.stringify(p2_23pal))
    localStorage.setItem("211m",JSON.stringify(p2_11pal))
    localStorage.setItem("212m",JSON.stringify(p2_12pal))
    localStorage.setItem("213m",JSON.stringify(p2_13pal))
    localStorage.setItem("214m",JSON.stringify(p2_14pal))
    localStorage.setItem("pole1",JSON.stringify(pol1))
    localStorage.setItem("pole2",JSON.stringify(pol2))
}



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
            }
        }
    }
    localStorage.setItem("pole1",JSON.stringify(pol1))
    localStorage.setItem("pole2",JSON.stringify(pol2))
}


function render(num)
{
    if(num===1)
    {
        let pole1 = document.querySelectorAll(".kl1")
        for(let i=0;i<100;i++)
        {
            let b=pol1[i]/10
            let c=pol1[i]%10
            if(b===0)
            {

            }
            else
            {
                if(c===0) pole1[i].style.backgroundColor = "blue"
                // else pole1[i].style.backgroundColor = "green"
            }

        }
    }

    if(num===2)
    {
        let pole2 = document.querySelectorAll(".kl2")
        for(let i=0;i<100;i++)
        {
            let b=pol2[i]/10
            let c=pol2[i]%10
            if(b===0)
            {

            }
            else
            {
                if(c===0) pole2[i].style.backgroundColor = "blue"
                // else pole2[i].style.backgroundColor = "green"
            }

        }
    }

}


//*******/Зануление двух полей/****************
function zero(num)
{
    if(num===1)
        for(let i=0;i<100;i++) pol1[i]=0;
    if(num===2)
        for(let i=0;i<100;i++) pol2[i]=0;
    if(num===0)
        for(let i=0;i<100;i++)
        {
            pol1[i]=0;
            pol2[i]=0;
        }
}
//*******/Окрашивание двух полей/****************
function zeroColor()
{
    let pole1 = document.querySelectorAll(".kl1")
    let pole2 = document.querySelectorAll(".kl2")

    for(let i=0;i<100;i++)
    {
        if(pol1[i]%10===0&&pol1[i]/10!==0 && pole1[i].style.length!==0)
        pole1[i].style.backgroundColor=null
        if(pol2[i]%10===0&&pol2[i]/10!==0)
        pole2[i].style.backgroundColor=null
    }
}

//*******/Готовность 1го игрока/****************


pl1.addEventListener("click",play1Ready)
pl2.addEventListener("click",()=>{
    zeroColor()
    DeActive(2)
    debtn()
    let b= document.querySelector(".gameOverbtn")
    b.style.display="block"
    game1=1
    localStorage.setItem("game1",game1)
})
//*******/Завершение игры/****************
document.querySelector(".gameOverbtn").addEventListener("click",()=>{
    game1=0
    localStorage.setItem("game1",game1)
    let pole1 = document.querySelectorAll(".kl1")
    let pole2 = document.querySelectorAll(".kl2")

    pole1.forEach((el,i)=>{
        if(pol1[i]%10===0 && pol1[i]/10!==0)
            el.style.backgroundColor="green"
        el.setAttribute("disabled","disabled")
    })
    pole2.forEach((el,i)=>{
        if(pol2[i]%10===0 && pol2[i]/10!==0)
            el.style.backgroundColor="green"
        el.setAttribute("disabled","disabled")
    })
    localStorage.clear()
    setTimeout(function(){
        location.reload();
    }, 10000);


})

//*******/Начало игры/****************
function debtn()
{
    let pl1 = document.querySelector("#pl1")
    let pl2 = document.querySelector("#pl2")
    let b1=document.querySelector("#b1")
    let b2=document.querySelector("#b2")
    pl1.style.display="none"
    pl2.style.display="none"
    b1.style.display="none"
    b2.style.display="none"
}
function play1Ready ()
{
    pl1.setAttribute("disabled","disabled")
    b1.setAttribute("disabled","disabled")

    pl2.removeAttribute("disabled")
    b2.removeAttribute("disabled")
    zeroColor()
}


//*******/Переключение хода/****************

function DeActive(num)
{
    let pole1 = document.querySelectorAll(".kl1")
    let pole2 = document.querySelectorAll(".kl2")
    if(num===1)
    {
        pole2.forEach((el,i)=>{

            if(pol2[i]!==1 && pol2[i]%10!==2 && pol2[i]%10!==3)
                el.removeAttribute("disabled")

        })

        pole1.forEach((el,i)=>{
            if(pol1[i]!==1 && pol1[i]%10!==2 && pol1[i]%10!==3)
                el.setAttribute("disabled","disabled")

        })
    }
    else
    {
        pole1.forEach((el,i)=>{
            if(pol1[i]!==1 && pol1[i]%10!==2 && pol1[i]%10!==3)
                el.removeAttribute("disabled")

        })

        pole2.forEach((el,i)=>{
            if(pol2[i]!==1 && pol2[i]%10!==2 && pol2[i]%10!==3)
                el.setAttribute("disabled","disabled")

        })
    }
}

//*******/Прорисовка поля после реса/****************
function resColor()
{
    let pole1 = document.querySelectorAll(".kl1")
    let pole2 = document.querySelectorAll(".kl2")
        pole2.forEach((el,i)=>{

            if(pol2[i]===1)
                el.style.background="url('../img/1.png') center center / 100% no-repeat"
            if(pol2[i]%10===2 || pol2[i]%10===3)
                el.style.backgroundColor="red"

        })
        pole1.forEach((el,i)=>{
            if(pol1[i]===1)
                el.style.background="url('../img/1.png') center center / 100% no-repeat"
            if(pol1[i]%10===2 || pol1[i]%10===3)
                el.style.backgroundColor="red"

        })
}
//*******/Начало игры кнопка/****************
document.querySelector(".btn").addEventListener("click",game)
function game()
{
    let a = document.querySelector(".mask")
    a.style.display="none"
    game2=1
    localStorage.setItem("game2",game2)
}

//*******/часы/****************

function clock()
{
    if(game1===1)
    {
        let hour = document.querySelector("#hour")
        let minute = document.querySelector("#minute")
        let seconds = document.querySelector("#seconds")
        let h= +localStorage.getItem("h")
        let m= +localStorage.getItem("m")
        let s= +localStorage.getItem("s")

        s++
        if (s===60)
        {
            m++
            s=0
            if(m===60)
            {
                h++
                m=0
                if(h===100) h=0
            }
        }
        h=(h<10)?'0'+h:h
        m=(m<10)?'0'+m:m
        s=(s<10)?'0'+s:s
        hour.innerHTML=h
        minute.innerHTML=m
        seconds.innerHTML=s
        localStorage.setItem("h",h)
        localStorage.setItem("m",m)
        localStorage.setItem("s",s)
    }
}
var interval = setInterval(clock,1000)