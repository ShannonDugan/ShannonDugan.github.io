(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    //this is an object
    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        createCollectable(type.grace, 110, 200, 75, 0.75); // woman no glasses left
        createCollectable(type.max, 310, 150, 100, 0.75); // man no glasses
        createCollectable(type.db, 500, 250, 100, 0.75); // stacked blue disc
        createCollectable(type.steve, 650, 50, 100, 0.75); // man with glasses lower left
        createCollectable(type.kennedi, 760, 325, 75, 0.75); // woman with glasses right    
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);