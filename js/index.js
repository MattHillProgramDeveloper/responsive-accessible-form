//cached element variables

//product view
const elproductlegend = document.querySelector("#productlegend");
const elproductimage = document.querySelector("#productimage");

//radio buttons
const elradbtnblack = document.querySelector("#black");
const elradbtnorange = document.querySelector("#orange");
const elradbtngrey = document.querySelector("#grey");
const elradbtncalico = document.querySelector("#calico");

//shipping fields

const elname = document.querySelector("#name");
const elemail = document.querySelector("#email");
const eladdress1 = document.querySelector("#address1");
const eladdress2 = document.querySelector("#address2");
const elcity = document.querySelector("#city");
const elstate = document.querySelector("#state");
const elzipcode = document.querySelector("#zipcode");
const elcountry = document.querySelector("#country");

//order summary fields

const elsumproductname = document.querySelector("#sumproductname");

const elusername = document.querySelector("#username");
const eluseraddress = document.querySelector("#useraddress");
const eluseraddress2 = document.querySelector("#useraddress2");
const elcitystatezip = document.querySelector("#citystatezip");
const elshipcountry = document.querySelector("#shipcountry");


/*
Begin updating shipping information
*/

elname.addEventListener('keyup', function(){
    elusername.innerHTML = elname.value;
},false);

eladdress1.addEventListener('keyup', function(){
    eluseraddress.innerHTML = eladdress1.value;
},false);

eladdress2.addEventListener('keyup', function(){
    eluseraddress2.innerHTML = eladdress2.value;
},false);


function cityStateZip(){
    elcitystatezip.innerHTML = elcity.value+", "+elstate.value+" "+elzipcode.value;
}

elcity.addEventListener('keyup', function(){
    cityStateZip();
},false);
elstate.addEventListener('keyup', function(){
    cityStateZip();
},false);
elzipcode.addEventListener('keyup', function(){
    cityStateZip();
},false);

function getCountryName(){
    let countryvalue = elcountry.value;
    if(countryvalue === "US"){
        return "";
    }else{
        return document.querySelector("option[value='"+countryvalue+"']").innerHTML
    }
}

elcountry.addEventListener('change', function(){

    elshipcountry.innerHTML = getCountryName();
},false);

/*
End updating shipping information
*/

/*
Begin updating Product Choice

*/

function changeProduct(color){
    elproductlegend.innerHTML = color+" Cat";
    elproductimage.src = "images/Cat"+color+".jpg";
    elproductimage.alt = "Picture of a "+color+" cat"
    elsumproductname.innerHTML = color+" Cat";

}

elradbtnblack.addEventListener('change', function(){
    changeProduct("Black");
},false);

elradbtnorange.addEventListener('change', function(){
    changeProduct("Orange");

},false);

elradbtngrey.addEventListener('change', function(){
    changeProduct("Grey");

},false);

elradbtncalico.addEventListener('change', function(){
    changeProduct("Calico");
},false);
/*
End updating Product Choice
*/


console.log("JS Loaded")