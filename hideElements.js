document.addEventListener("DOMContentLoaded", function() {  
    const profileContainers = document.querySelectorAll("div._profileContainer_51w34_53, div._profilePreview_51w34_63");  
    profileContainers.forEach(container => {  
        container.remove();  
    });  
});  
