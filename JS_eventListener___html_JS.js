document.getElementById("myform").addEventListener("submit", f);

function f(e) {
   e.preventDefault();
   var t = document.getElementById("input").value;
   document.getElementById("outputtext").innerHTML = t;
}
