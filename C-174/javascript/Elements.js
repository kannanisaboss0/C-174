//-----------------------------------C-174-----------------------------------//
//------------------------------The Elementals-----------------------------------//
//--------------------------------Elements.js-----------------------------------//

//Registering a new component for rendering the elements

AFRAME.registerComponent("elements-render",{

    //Schema
    schema:{},

    //Init function
    init: async function(){

         //Defining a function to get the elements
        var elements_object=await this.getElements()

        //Sourcing the value from the elements list
        elements=Object.values(elements_object)

        //Mapping the elements list
        elements.map((element)=>{

                //Creating a marker tag and setting repsective attributes
                var marker=document.createElement("a-marker")
                marker.setAttribute("type","barcode")
                marker.setAttribute("value",element.barcode_val)
                marker.setAttribute("id",`mrkr-${element.name}`)
    
                //Creating them odel tag and setting respective attributes
                var model=document.createElement("a-entity")
                model.setAttribute("gltf-model",`./models/${element.name}_el/scene.gltf`)
                model.setAttribute("scale",element.scale)
    
                //Appenidng the model to hte marker
                marker.appendChild(model)

                //Appedning the marker to the scene
                this.el.appendChild(marker)
            })
    },

    //Defining a fuction to get the elements list
    getElements:function(){
        return fetch("javascript/elements.json").then(res=>res.json()).then(data=>data)
    }
})

//--------------------------------Elements.js-----------------------------------//
//------------------------------The Elementals-----------------------------------//
//-----------------------------------C-174-----------------------------------//