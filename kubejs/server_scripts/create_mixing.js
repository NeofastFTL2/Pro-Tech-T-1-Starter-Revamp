// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)

onEvent('recipes', event => {
event.recipes.createMixing(Item.of(KJ('5_component'), 1), [Fluid.of(KJ('molten_brassmium'), 1000), Item.of(KJ('4_component'), 1)]).processingTime(1)
});