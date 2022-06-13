//*******/Печать полей/****************

function PrintPole(num)
{
    let pole1 = document.querySelector(".pole1")
    let pole2 = document.querySelector(".pole2")
    for(let j=0;j<10;j++)
    for(let i=0;i<10;i++)
    {
        pole2.insertAdjacentHTML('beforeend',`<div class="kl">${i+1}</div>`)
    }
    for(let j=0;j<10;j++)
        for(let i=0;i<10;i++)
        {
            pole1.insertAdjacentHTML('beforeend',`<div class="kl">${i+1}</div>`)
        }

}
PrintPole(2)

