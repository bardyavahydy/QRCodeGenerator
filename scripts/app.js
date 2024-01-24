const $ = document
const wrapper = $.querySelector('.wrapper')
const inputElm = $.querySelector('input')
const generateQRCode = $.querySelector('button')
const qrCodeImgElm = $.querySelector('img')

const generateQRCodeColor = () =>{
    let red = Math.floor(Math.random() * 258)
    let blue = Math.floor(Math.random() * 258)
    let green = Math.floor(Math.random() * 258)
    return `${red}-${blue}-${green}`
}

const generateQRCodeHandler = () =>{
    if(inputElm.value === "" || inputElm.value === " "){
        iziToast.show({
            title: "هشدار",
            titleColor: "#f00",
            message: "لطفا متنی معتبر وارد کنید",
            theme: "dark",
            position:"topRight",
            rtl: true,
        });
    }else{
        generateQRCode.innerText = ' Generating QR Code...'
        qrCodeImgElm.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputElm.value.trim()}&color=${generateQRCodeColor()}`

        qrCodeImgElm.onload = () =>{
            generateQRCode.innerText = 'Generate QR Code'
            wrapper.classList.add('active')
        }
    }
}

generateQRCode.addEventListener('click', generateQRCodeHandler)
inputElm.addEventListener('keyup', event =>{
    if(event.code === "Enter") generateQRCodeHandler()
    else if(event.target.value.trim() === '') wrapper.classList.remove('active')
})