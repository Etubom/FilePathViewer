const toggleAll = document.querySelector('input[id="toggleAll"]');
console.log('toggleAll',toggleAll);
const fileItems = document.querySelectorAll('.fileItem');
console.log('fileitem',fileItems);
 toggleAll.indeterminate = false;
 
function toggleAllboxes(mainController){
fileItems.forEach(item =>{
    item.checked = mainController.checked;
})
}

fileItems.forEach(element => {
    console.log("preventDefaultFunction",element);
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
    console.log('checkbox counter',checkboxCounter);
    // return checkboxCounter;
    if(checkboxCounter === fileItems.length+1){
        // console.log('updater in if block',updater);
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




