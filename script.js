const gridEl = document.getElementById('grid');

const createmyelement = () => {
    const node = document.createElement("div");
    node.className = "square";
    return node;
}

const myNewArrRandom = createUNiqueRandomNUm (64, 1, 64);
console.log(myNewArrRandom);

for (let i = 0; i < myNewArrRandom.length; i++) {
    const divEL = createmyelement();

    let Arritem = myNewArrRandom[i];
    console.log(Arritem);

    divEL.addEventListener("click",
        function(){
            this.classList.add("clicked");
        }
    )
    gridEl.append(divEL);
}


function createUNiqueRandomNUm(numItems, min, max) {
    const ArrInt = [];
    while ( ArrInt.length < numItems){
        let randomnumint = getrandomnumminmax(min,max);
        if (!ArrInt.includes(randomnumint)){
            ArrInt.push(randomnumint);
        }
    }

    return ArrInt
}

function getrandomnumminmax (Rangemin, Rangemax) {
    let result = Math.floor(Math.random() * (Rangemax- Rangemin+1)) + Rangemin ;

    return result;
}