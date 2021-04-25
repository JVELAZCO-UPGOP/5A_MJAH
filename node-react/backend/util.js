const palabraSinAcento = (palabra)=>
palabra
.toLowerCase()
.replace("á", "a")
.replace("é" , "e")
.replace("í", "i")
.replace("ú","u");

module.exports ={
    palabraSinAcento,
};