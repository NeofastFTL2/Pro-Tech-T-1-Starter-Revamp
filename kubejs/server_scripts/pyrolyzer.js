onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'kubejs:1_component',
            outputs: [Item.of('immersiveengineering:coal_coke').toJson(), Fluid.of('immersiveengineering:creosote', 500).toJson()],
            experience: 0.15,
            energy: 200,
            id: 'thermal:machine/pyrolyzer/nano_machine'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'thermal:pyrolyzer',
            ingredient: Ingredient.of(recipe.input).toJson(),
            result: recipe.outputs,
            experience: recipe.experience,
            energy: recipe.energy
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
