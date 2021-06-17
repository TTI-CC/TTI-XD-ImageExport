/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */


const {Rectangle, Color} = require("scenegraph");
const { editDocument } = require("application");
const commands = require("commands");

function rectangleHandlerFunction(selection) { 

    console.log(selection.items);

    if(selection.items.length > 0) {
    
        const currentSelection = selection.items[0];

        const boundWidth = currentSelection.globalBounds.width;
        const boundHeight = currentSelection.globalBounds.height;

        const multiples = [2,5,10];

        // cycle through each multiple, save the image at that size
        // then revert back to the original size

        for(let i = 0; i < multiples.length; i++) {

            const resizeWidth = boundWidth * multiples[i];
            const resizeHeight = boundHeight * multiples[i];

        //     editDocument({editLabel: "blah", function(){
        //         // scenegraph editing code
        //   });

        //    editDocument({editLabel: 'resize image'}, (newSelection) => {
            commands.duplicate();
            const newSelection = selection.items[0];
            newSelection.resize(resizeWidth, resizeHeight);
            newSelection.visible = false;
            

          //  });
            
            

        }


    }

    

    // const newElement = new Rectangle(); 
    // newElement.width = 100;
    // newElement.height = 50;
    // newElement.fill = new Color("Purple");

    // selection.insertionParent.addChild(newElement);
    // newElement.moveInParentCoordinates(100, 100);

}

module.exports = {
    commands: {
        createRectangle: rectangleHandlerFunction
    }
};
