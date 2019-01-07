const toggleAll = document.querySelector('input[id="toggleAll"]');
const showCount = document.querySelector('.counts');
const fileItems = document.querySelectorAll('.fileItem');
let divTextContent = document.querySelectorAll('.status').textContent;


 toggleAll.indeterminate = false;

function alertMessage(){
fileItems.forEach(element => {

if(element.checked = true)
    {
        alert(divTextContent);
    }
})
}


function toggleAllboxes(mainController){
fileItems.forEach(item =>{
    item.checked = mainController.checked;
})
}

fileItems.forEach(element => {

   return  element.addEventListener('click', statusUpdater);
});

function statusUpdater(){
    let checkboxCounter = 1;
    fileItems.forEach(item => {
        if(item.checked)
        {
            checkboxCounter++;
        }
    });
    if(checkboxCounter === fileItems.length+1){
    
        toggleAll.checked = true;
        toggleAll.indeterminate = false;
    }  else if(checkboxCounter <= fileItems.length + 1 && checkboxCounter >1)
    {
        toggleAll.checked = false;
        toggleAll.indeterminate = true;
    }else{
        toggleAll.checked = false;
        toggleAll.indeterminate = false;
    }
}




