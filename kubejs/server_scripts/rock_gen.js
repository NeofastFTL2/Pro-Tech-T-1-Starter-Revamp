onEvent('recipes', event => {
    function addRecipeRockGen(adjacent,below,out,id) {
        let recipe =  {
            "type": "thermal:rock_gen",
            "adjacent":adjacent,
            "result": Item.of(out)
        }
        if (below != '') {
            recipe.below = below
        }
        event.custom(recipe).id(id)
    }

    addRecipeRockGen('minecraft:stone_bricks','alltheores:zinc_block','minecraft:andesite','kubejs:rock_gen/generate_andesite')
})