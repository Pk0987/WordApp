// Synonyms, Antonyms, Definition, Examples, Rhymes, Pronounciation, Syllables, Frequency
// typeOf, hasTypes, partOf, hasParts, instanceOf, hasInstances, similarTo, also, entails, 
// memberOf, hasMembers, substanceOf, hasSubstances, inCategory, hasCategories, usageOf, hasUsages, inRegion, regionOf, pertainsTo 

const title = document.getElementById('main-title');
const content = document.getElementById('content-items');


async function call_function(incoming_event){
    console.log("request fun called")
    const data = await fetch(`/${incoming_event.id}`, {
        method : "GET",
        headers : {"Content-Type" : "application/json"}
    })
    .then(response => response.json())
    .then(data => data);
    return data;
};


function synonyms_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Synonyms</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        } );
    };
    promise_data();
};

function antonyms_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Antonyms</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    };
    promise_data();
};


function definitions_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Definitions</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            // console.log(`Definition: ${a['definition']} \n Parts-Of-Speech: ${a['partOfSpeech']}`)
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a['definition']}</li>
            <span><b>Parts of speech: </b>  ${a['partOfSpeech']}</span> <br/><br/> `
        });
    }; promise_data() ;
};



function examples_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Examples</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li> <br/>` 
        });
    }; promise_data() ;
};


function rhymes_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Rhymes</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => a.forEach(b => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${b}</li>` 
        }));
    }; promise_data() ;
};


function pronunciation_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Pronunciation</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`    
        });
    }; promise_data() ;
};


function syllables_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Syllables</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]['list']).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data() ;
};


function frequency_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Frequency</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        let obj_keys = Object.keys(JSON.parse(ans)[`${this.id}`]);
        let obj_values = Object.values(JSON.parse(ans)[`${this.id}`]);
        content.removeAttribute("hidden");
        for ( var i=0; i<3; i++) {
            content.innerHTML += `<li style='padding=10px' id="content-items">
            <b>${obj_keys[i]}</b>: <br/> ${obj_values[i]}</li>`
        };
    }; promise_data();
};


function typeOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Type of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};


function hasTypes_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has types</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};


function partOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Part of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};


function hasParts_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has parts</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};



function instanceOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Instance of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};




function hasInstances_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has instances</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};



function similarTo_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Similar to</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};



function also_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>also</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function entails_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Entails</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function memberOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Member of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function hasMembers_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has members</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function substanceOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Substance of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function hasSubstances_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has substance</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function inCategory_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>In category</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function hasCategories_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has categories</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};





function usageOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Usage of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};




function hasUsages_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Has usages</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};




function inRegion_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>In region</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};




function regionOf_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Region of</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};



function pertainsTo_function(event){
    event.preventDefault();
    title.innerHTML = "<h4 class='h4' id='main-title'>Pertains to</h4>"
    content.innerHTML = null;
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => {
            content.removeAttribute("hidden");
            content.innerHTML += `<li style='padding=10px' id="content-items">${a}</li>`
        });
    }; promise_data();
};








document.getElementById("synonyms").addEventListener("click", synonyms_function)
document.getElementById("antonyms").addEventListener("click", antonyms_function)
document.getElementById("definitions").addEventListener("click", definitions_function)
document.getElementById("examples").addEventListener("click", examples_function)
document.getElementById("rhymes").addEventListener("click", rhymes_function)
document.getElementById("pronunciation").addEventListener("click", pronunciation_function)
document.getElementById("syllables").addEventListener("click", syllables_function)
document.getElementById("frequency").addEventListener("click", frequency_function)
document.getElementById("typeOf").addEventListener("click", typeOf_function)
document.getElementById("hasTypes").addEventListener("click", hasTypes_function)
document.getElementById("partOf").addEventListener("click", partOf_function)
document.getElementById("hasParts").addEventListener("click", hasParts_function)
document.getElementById("instanceOf").addEventListener("click", instanceOf_function)
document.getElementById("hasInstances").addEventListener("click", hasInstances_function)
document.getElementById("similarTo").addEventListener("click", similarTo_function)
document.getElementById("also").addEventListener("click", also_function)
document.getElementById("entails").addEventListener("click", entails_function)
document.getElementById("memberOf").addEventListener("click", memberOf_function)
document.getElementById("hasMembers").addEventListener("click", hasMembers_function)
document.getElementById("substanceOf").addEventListener("click", substanceOf_function)
document.getElementById("hasSubstances").addEventListener("click", hasSubstances_function)
document.getElementById("inCategory").addEventListener("click", inCategory_function)
document.getElementById("hasCategories").addEventListener("click", hasCategories_function)
document.getElementById("usageOf").addEventListener("click", usageOf_function)
document.getElementById("hasUsages").addEventListener("click", hasUsages_function)
document.getElementById("inRegion").addEventListener("click", inRegion_function)
document.getElementById("regionOf").addEventListener("click", regionOf_function)
document.getElementById("pertainsTo").addEventListener("click", pertainsTo_function)


