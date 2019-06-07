/* glavni JS za cijeli projekt */

import 'bootstrap';
//you may import bootstrap plugins individually like this
//import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/dropdown';

//main .scss file
import './scss/main.scss'

//main .js files here
import './js/main.js';

//load modules dynamicaly
var onload_modules = document.querySelectorAll('[data-onload-module="yes"]');
for (var i = 0; i < onload_modules.length; i++) {
    var d = onload_modules[i];
    var module = d.attributes['data-module'];    
    if (module !== undefined){
        //console.log('find element with module: ' + module.value);
        switch (module.value) {
            case "test-module":
                import(/* webpackChunkName: "test-module" */ './js/modules/test-module');
                break;
            default:
                break;
        }
        
    }
}

//izbrisati kad se projekt pocne koristiti
import webpackLogo from '@img/webpack.svg'
import nodejsLogo from '@img/nodejs.png'
