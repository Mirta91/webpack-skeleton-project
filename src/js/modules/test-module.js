/*
- ovdje kreirati js za module koji ce se pozivati samo onda kad je potrebno
- potrebno je u html dodati data-onload-module="yes" data-module="naziv-modula"
- u index.js fajl treba dodati "case" za taj specificni modul
- i onda setTimeout funkciju u svaki js posebno
*/

setTimeout(function(){
    $('[data-module="test-module"]').addClass("module-loaded");
}, 500);

console.log("test modul");