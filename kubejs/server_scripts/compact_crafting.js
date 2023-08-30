 onEvent('recipes', (event) => {
     const machineShapes = {
         machine_frame_pity: [
             {
                 type: 'compactcrafting:mixed',
                 pattern: [
                    ['I', 'I', 'I', 'I', 'I'],
                    ['I', 'I', 'I', 'I', 'I'],
                    ['I', 'I', 'I', 'I', 'I'],
                    ['I', 'I', 'I', 'I', 'I'],
                    ['I', 'I', 'I', 'I', 'I']
                 ]
             },
             {
                type: 'compactcrafting:mixed',
                pattern: [
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'I', 'I', 'I', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'L', 'C', 'L', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'I', 'I', 'I', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'L', 'L', 'L', 'I'],
                   ['I', 'I', 'I', 'I', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'I', 'I', 'I', 'I'],
                   ['I', 'I', 'I', 'I', 'I']
                ]
            }
         ]
     };

     const recipes = [
         {
             recipeSize: 5,
             layers: machineShapes.machine_frame_pity,
             catalyst: {
                 id: 'kubejs:3_component',
                 Count: 1
             },
             components: {
                 I: {
                     type: 'compactcrafting:block',
                     block: 'minecraft:iron_block'
                 },
                 L: {
                     type: 'compactcrafting:block',
                     block: 'minecraft:oak_log'
                 },
                 C: {
                     type: 'compactcrafting:block',
                     block: 'minecraft:redstone_block'
                 }
             },
             outputs: [
                 {
                     id: 'industrialforegoing:machine_frame_pity',
                     Count: 1
                 }
             ]
         }
     ];

     recipes.forEach((recipe) => {
         event.custom({
             type: 'compactcrafting:miniaturization',
             version: 1,
             recipeSize: recipe.recipeSize,
             layers: recipe.layers,
             catalyst: recipe.catalyst,
             components: recipe.components,
             outputs: recipe.outputs
         });
     });
 });
