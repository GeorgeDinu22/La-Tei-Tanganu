document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar')
    const rotate = document.getElementById ('inchide-sidebar')
    const body =document.querySelector('.main-content')
    const OpenSideBar = document.getElementById("deschide-sidebar");
    const CloseSideBar = document.getElementById("inchide-sidebar");

OpenSideBar.addEventListener('click', () =>{
    ShowSideBar();
})

CloseSideBar.addEventListener('click', ()=>{
    setTimeout(HideSideBar,400)
    CloseSideBar.style.backgroundColor = 'white'
            setTimeout( () => {
                 CloseSideBar.style.backgroundColor = '';
        },620)

})


function ShowSideBar () {
   
    body.classList.add('blur');
    sidebar.classList.add('open');
    rotate.classList.remove('rotate');
}
function HideSideBar () {
    body.classList.remove('blur');
    sidebar.classList.remove('open');
    rotate.classList.add('rotate');
}



const ContentMeniu = document.querySelectorAll('.content-meniu');
const IdMeniu = document.querySelectorAll('.item-selector-meniu');
const ContainerMeniu = document.querySelector('.container-content-meniu');
const PrimulMeniu = document.getElementById('FirstMenu');
const PozeMeniu = document.querySelectorAll('.mancare-meniu');


AdaptHeight();
UpdateSelector(0);

function HideExtraImg(index){
    if (index == 0){
        PozeMeniu[4].style.display = 'block';
        PozeMeniu[5].style.display = 'block';
        PozeMeniu[6].style.display = 'block';
        PozeMeniu[7].style.display = 'block';
    }
    else if(index == 3){
        PozeMeniu[5].style.display = 'none';
        PozeMeniu[6].style.display = 'none';
        PozeMeniu[7].style.display = 'none';
    }
    else {
        PozeMeniu[4].style.display = 'none';
        PozeMeniu[5].style.display = 'none';
        PozeMeniu[6].style.display = 'none';
        PozeMeniu[7].style.display = 'none';
    }
}

IdMeniu.forEach(id =>{
    let selectie;
    id.addEventListener('click', ()=> {
        selectie = Array.from(IdMeniu).indexOf(id);
        Meniu(selectie);
        HideExtraImg(selectie);
    })
})


function AdaptHeight (){
    let inaltime1 = PrimulMeniu.offsetHeight;
    ContainerMeniu.style.height = `${inaltime1}px`;
}
function UpdateSelector(index){
    IdMeniu.forEach(element =>{
        element.classList.remove('current-menu');
    })
    IdMeniu[index].classList.add('current-menu');
}


function Meniu (index){
    ContentMeniu.forEach(element =>{
        element.style.opacity = '0';
        element.style.transition = 'opacity 500ms ease-in-out';
       
        setTimeout ( () =>{
            element.style.display = 'none';
        },500);
    });
    setTimeout( () =>{
        UpdateSelector(index);
    },350);
 
    
    setTimeout( () =>{
        ContentMeniu[index].style.display = 'block';
        let inaltime = ContentMeniu[index].offsetHeight;
        if (inaltime < 400){
            inaltime = 400;
        }
        ContainerMeniu.style.height = `${inaltime}px`;
    },500);

    setTimeout( () =>{
        ContentMeniu[index].style.opacity = '1';
        ContentMeniu[index].style.transition = 'opacity 500ms ease-in-out';
    },600);
}

});




