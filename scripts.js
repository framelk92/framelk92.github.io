function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }
  
function changeIcon() {
    document.getElementById('sun').style.display="flex";
    document.getElementById('moon').style.display="none";
    ;
  }

  function reset() {
    var element = document.body;
    element.classList.remove("dark-mode");
    document.getElementById('sun').style.display="none";
    document.getElementById('moon').style.display="flex";
}