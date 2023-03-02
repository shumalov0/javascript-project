const refreshBtn = document.querySelector(".refresh-btn")
const container = document.querySelector(".container")
const maxPaleteBoxs =32;

const generatePalet = () => {
    container.innerHTML="";
    for(let i=0; i<maxPaleteBoxs;i++){
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        const color= document.createElement("li");
        color.classList.add("color");
        color.innerHTML=  `       
        <div class="rect-box" style="background:${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>
        `;
        color.addEventListener("click",()=>copyColor(color,randomHex))
        container.appendChild(color);
    }
    

}
generatePalet()

const copyColor =(elem,hexVal) =>{
    const colorElement =elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(
        ()=>{
            colorElement.innerText="copied";
            setTimeout(()=>colorElement.innerText=hexVal,1000)
        }
    )
}

refreshBtn.addEventListener("click",generatePalet);
