settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('recipes', event => {
    // REMOVING KUBEJS RECIPES
    event.remove({id: 'projecte:philosophers_stone'});
    event.remove({id: 'projecte:philosophers_stone_alt'});
    event.remove({id: 'projecte:transmutation_table'});
    event.remove({id: 'mining_dimension:teleporter'});
    event.remove({id: 'thermal:device_rock_gen'});
    event.remove({id: 'thermal:machine_smelter'});
    event.remove({id: 'thermal:machine_crucible'});
    event.remove({id: 'thermal:machine_bottler'});
    event.remove({id: 'thermal:machine_furnace'});
    event.remove({id: 'thermal:machine_sawmill'});
    event.remove({id: 'thermal:dynamo_stirling'});
    event.remove({id: 'thermal:machine_chiller'});
    event.remove({input: 'minecraft:fire_charge' });
    event.remove({id: 'rftoolsbase:machine_infuser'});
    event.remove({id: 'industrialforegoing:machine_frame_pity'});
    event.remove({id: 'industrialforegoing:machine_frame_advanced'});
    event.remove({id: 'compactcrafting:base'});
    event.remove({id: 'compactcrafting:projector_dish'});
    event.remove({id: 'excompressum:compressed_dirt'});
    event.remove({id: 'mekanism:steel_casing'});
    event.remove({id: 'mekanism:energized_smelter'});
    event.remove({id: 'mekanism:metallurgic_infuser'});
    event.remove({id: 'mekanism:upgrade_energy'});
    event.remove({id: 'mekanism:upgrade_speed'});
    event.remove({id: 'mekanism:crusher'});
    event.remove({id: 'fluxnetworks:flux_dust'});
    event.remove({output: 'create:zinc_ingot'});
    event.remove({output: 'alltheores:brass_dust'});
    event.remove({output: 'alltheores:brass_ingot'});
    event.remove({output: '#forge:dusts/bronze'});
    event.remove({output: '#forge:ingots/bronze'});
    event.remove({output: '#forge:dusts/invar'});
    event.remove({output: '#forge:ingots/invar'});
    event.remove({output: '#forge:dusts/signalum'});
    event.remove({output: '#forge:ingots/signalum'});
    event.remove({output: '#forge:dusts/electrum'});
    event.remove({output: '#forge:ingots/electrum'});
    event.remove({output: '#forge:dusts/lumium'});
    event.remove({output: '#forge:ingots/lumium'});
    event.remove({output: '#forge:dusts/constantan'});
    event.remove({output: '#forge:ingots/constantan'});
    event.remove({output: '#forge:storage_blocks/zinc'});
    event.remove({output: 'ae2:energy_acceptor'});
    event.remove({output: 'ae2:inscriber'});
    event.remove({id: 'extendedcrafting:redstone_ingot'});
    event.remove({output: 'create:andesite_casing'});
    event.remove({output: 'botania:terrasteel_ingot'});
    event.shaped('ae2:energy_acceptor', [
        'DAD',
        'ASA',
        'DAD'
        ], {
            A: 'ae2:quartz_glass',
            D: 'minecraft:iron_ingot',
            S: 'kubejs:5_component'
        });


            event.shaped('ae2:inscriber', [
        'DAD',
        'CSD',
        'DAD'
        ], {
            A: 'minecraft:sticky_piston',
            D: 'minecraft:iron_ingot',
            S: 'kubejs:5_component',
            C: 'minecraft:copper_ingot'
        });



    event.shaped('alltheores:zinc_block', [
        'III',
        'III',
        'III'
        ], {
            I: '#forge:ingots/zinc'
        });

        event.shaped('kubejs:intrum_ingot_block', [
            'III',
            'III',
            'III'
            ], {
                I: 'kubejs:intrum_ingot'
            });
    

    event.remove({id: 'immersiveengineering:cokeoven/charcoal'});
    event.remove({id: 'immersiveengineering:cokeoven/coke_block'});
    event.remove({id: 'immersiveengineering:cokeoven/coke'});
    event.remove({id: 'immersiveengineering:alloysmelter'});
    
    //Thermal Recipes
    onEvent('recipes', event => {
        event.recipes.thermal.smelter('kubejs:bronzar_ingot', ['#forge:ingots/invar', '#forge:ingots/bronze']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('fluxnetworks:flux_dust', ['minecraft:redstone', '#forge:stone', 'minecraft:obsidian']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('kubejs:intrum_ingot', ['#forge:ingots/invar', '#forge:ingots/electrum']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('kubejs:brassmium_ingot', ['#forge:ingots/brass', '#forge:ingots/osmium']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:brass_ingot', ['#forge:ingots/copper', '#forge:ingots/zinc']
    )});

    
    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:bronze_ingot', ['#forge:ingots/copper', '#forge:ingots/tin']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:invar_ingot', ['#forge:ingots/iron', '#forge:ingots/nickel']
    )});

    
    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:signalum_ingot', ['minecraft:redstone', '#forge:ingots/copper', '#forge:ingots/silver']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:electrum_ingot', ['#forge:ingots/gold', '#forge:ingots/silver']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:lumium_ingot', ['minecraft:glowstone_dust', '#forge:ingots/tin', '#forge:ingots/silver']
    )});

    onEvent('recipes', event => {
        event.recipes.thermal.smelter('alltheores:constantan_ingot', ['#forge:ingots/copper', '#forge:ingots/nickel']
    )});

    event.remove({output: 'industrialforegoing:machine_frame_simple'});
    event.remove({id: 'thermal:creosote'});


    event.remove({output: 'ae2:calculation_processor_press'});
    event.shaped('ae2:calculation_processor_press', [
        'III',
        'ICI',
        'III'
        ], {
            I: 'kubejs:intrum_ingot',
            C: 'ae2:certus_quartz_crystal'
        });

        event.remove({output: 'ae2:engineering_processor_press'});
        event.shaped('ae2:engineering_processor_press', [
            'III',
            'ICI',
            'III'
            ], {
                I: 'kubejs:intrum_ingot',
                C: 'minecraft:diamond'
            });

            
        event.remove({output: 'ae2:logic_processor_press'});
        event.shaped('ae2:logic_processor_press', [
            'III',
            'ICI',
            'III'
            ], {
                I: 'kubejs:intrum_ingot',
                C: 'minecraft:gold_ingot'
            });

            event.remove({output: 'ae2:silicon_press'});
            event.shaped('ae2:silicon_press', [
                'III',
                'ICI',
                'III'
                ], {
                    I: 'kubejs:intrum_ingot',
                    C: 'ae2:silicon'
                });
                


                event.remove({output: 'rftoolsdim:dimension_builder'});
                event.shaped('rftoolsdim:dimension_builder', [
                    'EDE',
                    'ACA',
                    'SSS'
                    ], {
                        A: 'minecraft:diamond',
                        E: 'minecraft:ender_pearl',
                        D: 'minecraft:emerald',
                        S: 'minecraft:gold_ingot',
                        C: 'kubejs:6_component'
                    });

                    event.remove({output: 'rftoolsdim:dimension_editor'});
                    event.shaped('rftoolsdim:dimension_editor', [
                        'EAE',
                        'ACA',
                        'SSS'
                        ], {
                            A: 'minecraft:iron_ingot',
                            E: 'minecraft:ender_pearl',
                            S: 'minecraft:gold_ingot',
                            C: 'kubejs:6_component'
                        });

                        event.remove({output: 'rftoolsdim:enscriber'});
                        event.shaped('rftoolsdim:enscriber', [
                            'EDE',
                            'ACA',
                            'EDE'
                            ], {
                                A: 'minecraft:crafting_table',
                                E: 'minecraft:paper',
                                D: 'rftoolsdim:empty_dimlet',
                                C: 'kubejs:6_component'
                            });

                            event.remove({output: 'rftoolsdim:researcher'});
                            event.shaped('rftoolsdim:researcher', [
                                'EDE',
                                'ACT',
                                'EDE'
                                ], {
                                    A: 'minecraft:comparator',
                                    T: 'minecraft:enchanting_table',
                                    E: 'minecraft:redstone',
                                    D: 'rftoolsdim:empty_dimlet',
                                    C: 'kubejs:6_component'
                                });

                                event.remove({output: 'rftoolsdim:knowledge_holder'});
                                event.shaped('rftoolsdim:knowledge_holder', [
                                    'EDE',
                                    'ACA',
                                    'EDE'
                                    ], {
                                        A: '#forge:chests',
                                        E: 'rftoolsbase:dimensionalshard',
                                        D: 'rftoolsdim:empty_dimlet',
                                        C: 'kubejs:6_component'
                                    });

                                    event.remove({output: 'rftoolsdim:dimlet_workbench'});
                                    event.shaped('rftoolsdim:dimlet_workbench', [
                                        'EDE',
                                        'ACA',
                                        'EDE'
                                        ], {
                                            A: 'minecraft:crafting_table',
                                            E: 'minecraft:redstone',
                                            D: 'rftoolsdim:empty_dimlet',
                                            C: 'kubejs:6_component'
                                        });



    event.remove({output: 'industrialforegoing:machine_frame_advanced'});
    // ADDING KUBEJS RECIPES
    event.shaped('projecte:transmutation_table', [
        'DAD',
        'ASA',
        'DAD'
        ], {
            A: 'compressium:andesite_9',
            D: 'kubejs:9_darkmatter',
            S: 'projecte:philosophers_stone'
        });

        event.remove({output: 'draconicevolution:draconium_core'});
        event.shaped('draconicevolution:draconium_core', [
            'DAD',
            'ASA',
            'DAD'
            ], {
                D: 'draconicevolution:draconium_ingot',
                A: 'minecraft:gold_ingot',
                S: 'kubejs:5_component'
            });


        event.shaped('mekanism:steel_casing', [
            'DAD',
            'ASA',
            'DAD'
            ], {
                A: '#forge:glass',
                D: '#forge:ingots/steel',
                S: 'kubejs:2_component'
            });


            event.shaped('mekanism:energized_smelter', [
                'DBD',
                'ASA',
                'DBD'
                ], {
                    A: '#forge:glass',
                    D: 'minecraft:redstone',
                    B: 'mekanism:basic_control_circuit',
                    S: 'mekanism:steel_casing'
                });


                event.shaped('mekanism:crusher', [
                    'DBD',
                    'ASA',
                    'DBD'
                    ], {
                        A: 'minecraft:lava_bucket',
                        D: 'minecraft:redstone_block',
                        B: 'mekanism:basic_control_circuit',
                        S: 'mekanism:steel_casing'
                    });

                    event.shaped('mekanism:metallurgic_infuser', [
                        'DBD',
                        'ASA',
                        'DBD'
                        ], {
                            A: 'minecraft:redstone_block',
                            D: 'minecraft:iron_block',
                            B: 'minecraft:furnace',
                            S: 'kubejs:2_component'
                        });


                        event.shaped('mekanism:upgrade_energy', [
                            'AGA',
                            'RCR',
                            'AGA'
                            ], {
                                A: 'minecraft:air',
                                R: 'minecraft:redstone',
                                G: '#forge:glass',
                                C: 'kubejs:intrum_ingot'
                            });

                            event.shaped('mekanism:upgrade_speed', [
                                'AGA',
                                'RCR',
                                'AGA'
                                ], {
                                    A: 'minecraft:air',
                                    R: 'minecraft:redstone',
                                    G: '#forge:glass',
                                    C: 'kubejs:brassmium_ingot'
                                });


        event.shaped('resourcechickens:dye_brown_chicken_spawn_egg', [
            'DDD',
            'DED',
            'DDD'
            ], {
                D: 'minecraft:brown_dye',
                E: 'minecraft:egg'
            });

            event.shaped('resourcechickens:dye_yellow_chicken_spawn_egg', [
                'DDD',
                'DED',
                'DDD'
                ], {
                    D: 'minecraft:yellow_dye',
                    E: 'minecraft:egg'
                });

                event.shaped('resourcechickens:quartz_chicken_spawn_egg', [
                    'DDD',
                    'DED',
                    'DDD'
                    ], {
                        D: 'minecraft:quartz',
                        E: 'minecraft:egg'
                    });


                    event.shaped('minecraft:egg', [
                        'DDD',
                        'DED',
                        'DDD'
                        ], {
                            D: 'compressium:dirt_1',
                            E: 'minecraft:dirt'
                        });

        event.shaped('mining_dimension:teleporter', [
            'CZC',
            'GPO',
            'CIC'
            ], {
                C: 'minecraft:charcoal',
                Z: 'minecraft:copper_ingot',
                G: 'minecraft:gold_ingot',
                P: 'mekanismtools:stone_paxel',
                O: '#forge:ingots/osmium',
                I: 'minecraft:iron_ingot'
            });


            event.shaped('kubejs:1_component', [
                'OGC',
                'RIS',
                'DTE'
                ], {
                    O: '#forge:ingots/osmium',
                    G: 'minecraft:gold_ingot',
                    C: 'minecraft:copper_ingot',
                    R: 'minecraft:redstone',
                    I: '#forge:gears/invar',
                    S: '#forge:ingots/steel',
                    D: 'minecraft:glowstone_dust',
                    T: '#forge:ingots/tin',
                    E: 'thermal:glowstone_bucket'
                });


                event.shaped('kubejs:2_component', [
                    'OGC',
                    'RIS',
                    'DTE'
                    ], {
                        O: 'kubejs:brassmium_ingot',
                        G: 'kubejs:intrum_ingot',
                        C: 'kubejs:bronzar_ingot',
                        R: 'minecraft:glowstone',
                        I: 'kubejs:1_component',
                        S: '#forge:ingots/signalum',
                        D: '#forge:ingots/lumium',
                        T: '#forge:ingots/constantan',
                        E: 'thermal:redstone_bucket'
                    });

                    

                event.shaped('thermal:device_rock_gen', [
                    'CZC',
                    'GPO',
                    'CIC'
                    ], {
                        C: 'thermal:invar_ingot',
                        Z: '#forge:gears/constantan',
                        G: 'minecraft:ice',
                        P: 'kubejs:1_component',
                        O: 'minecraft:magma_block',
                        I: 'thermal:redstone_servo'
                    });


                event.shaped('compactcrafting:base', [
                    'ARA',
                    'OPO',
                    'CCC'
                    ], {
                        C: 'minecraft:heavy_weighted_pressure_plate',
                        A: 'minecraft:air',
                        R: 'minecraft:redstone_torch',
                        P: 'kubejs:1_component',
                        O: 'minecraft:diamond'
                    });

                    event.shaped('compactcrafting:projector_dish', [
                        'GOA',
                        'GPO',
                        'GOA'
                        ], {
                            A: 'minecraft:air',
                            P: 'kubejs:1_component',
                            G: '#forge:glass_panes',
                            O: 'minecraft:iron_ingot'
                        });

                    event.shaped('thermal:machine_smelter', [
                        'AXA',
                        'GPG',
                        'CIC'
                        ], {
                            C: 'thermal:invar_gear',
                            X: 'minecraft:blast_furnace',
                            A: 'minecraft:air',
                            P: 'kubejs:1_component',
                            G: '#forge:sand',
                            P: 'kubejs:1_component',
                            I: 'thermal:rf_coil'
                        });
    

                    
                event.shaped('rftoolsbase:machine_infuser', [
                    'CRC',
                    'GPG',
                    'CRC'
                    ], {
                        C: 'rftoolsbase:dimensionalshard',
                        R: 'minecraft:redstone',
                        A: 'minecraft:air',
                        P: 'kubejs:1_component',
                        G: 'minecraft:diamond',
                    });


                    event.shaped('thermal:dynamo_stirling', [
                        'AXA',
                        'GPG',
                        'CIC'
                        ], {
                            C: '#forge:stone',
                            X: 'thermal:rf_coil',
                            A: 'minecraft:air',
                            P: 'kubejs:1_component',
                            G: 'minecraft:iron_ingot',
                            P: 'kubejs:1_component',
                            I: 'minecraft:redstone'
                        });

                    event.shaped('thermal:machine_crucible', [
                        'AXA',
                        'GPG',
                        'CIC'
                        ], {
                            C: 'thermal:invar_gear',
                            X: '#forge:glass',
                            A: 'minecraft:air',
                            P: 'kubejs:1_component',
                            G: 'minecraft:nether_bricks',
                            P: 'kubejs:1_component',
                            I: 'thermal:rf_coil'
                        });

                        event.shaped('thermal:machine_chiller', [
                            'AXA',
                            'GPG',
                            'CIC'
                            ], {
                                C: 'thermal:invar_gear',
                                X: '#forge:glass',
                                A: 'minecraft:air',
                                P: 'kubejs:1_component',
                                G: 'minecraft:packed_ice',
                                P: 'kubejs:1_component',
                                I: 'thermal:rf_coil'
                            });

                        event.shaped('thermal:machine_furnace', [
                            'AXA',
                            'GPG',
                            'CIC'
                            ], {
                                C: 'thermal:copper_gear',
                                X: 'minecraft:redstone',
                                A: 'minecraft:air',
                                P: 'kubejs:1_component',
                                G: 'minecraft:bricks',
                                P: 'kubejs:1_component',
                                I: 'thermal:rf_coil'
                            });
    


                    event.shaped('thermal:machine_bottler', [
                        'AXA',
                        'GPG',
                        'CIC'
                        ], {
                            C: 'thermal:copper_gear',
                            X: 'minecraft:bucket',
                            A: 'minecraft:air',
                            P: 'kubejs:1_component',
                            G: '#forge:glass',
                            P: 'kubejs:1_component',
                            I: 'thermal:rf_coil'
                        });

                        event.shaped('thermal:machine_sawmill', [
                            'AXA',
                            'GPG',
                            'CIC'
                            ], {
                                C: 'thermal:copper_gear',
                                X: 'thermal:saw_blade',
                                A: 'minecraft:air',
                                P: 'kubejs:1_component',
                                G: '#forge:stone',
                                P: 'kubejs:1_component',
                                I: 'thermal:rf_coil'
                            });
        


                    event.shaped('kubejs:1_bone_block', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'minecraft:bone_block'
                        });
                
                        event.shaped('kubejs:2_bone_block', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:1_bone_block'
                            });
                            event.shaped('kubejs:3_bone_block', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:2_bone_block'
                                });
                
                                event.shaped('kubejs:4_bone_block', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:3_bone_block'
                                    });
                
                                    event.shaped('kubejs:5_bone_block', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:4_bone_block'
                                        });
                    
                        event.shaped('kubejs:6_bone_block', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_bone_block'
                            });



    event.shaped('kubejs:1_glowstone', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:glowstone'
        });

        event.shaped('kubejs:2_glowstone', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_glowstone'
            });
            event.shaped('kubejs:3_glowstone', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_glowstone'
                });
                event.shaped('kubejs:4_glowstone', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_glowstone'
                    });
                    event.shaped('kubejs:5_glowstone', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_glowstone'
                        });
                        event.shaped('kubejs:6_glowstone', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_glowstone'
                            });
                            event.shaped('kubejs:7_glowstone', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:6_glowstone'
                                });
                                event.shaped('kubejs:8_glowstone', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:7_glowstone'
                                    });
                                    event.shaped('kubejs:9_glowstone', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:8_glowstone'
                                        });
    event.shaped('kubejs:1_glowstone', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:glowstone'
        });

        event.shaped('kubejs:2_glowstone', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_glowstone'
            });
            event.shaped('kubejs:3_glowstone', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_glowstone'
                });
                event.shaped('kubejs:4_glowstone', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_glowstone'
                    });
                    event.shaped('kubejs:5_glowstone', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_glowstone'
                        });
                        event.shaped('kubejs:6_glowstone', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_glowstone'
                            });
                            event.shaped('kubejs:7_glowstone', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:6_glowstone'
                                });
                                event.shaped('kubejs:8_glowstone', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:7_glowstone'
                                    });
                                    event.shaped('kubejs:9_glowstone', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:8_glowstone'
                                        });


event.shaped('kubejs:1_darkmatter', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'projecte:dark_matter_block'
        });

        event.shaped('kubejs:2_darkmatter', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_darkmatter'
            });
            event.shaped('kubejs:3_darkmatter', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_darkmatter'
                });
                event.shaped('kubejs:4_darkmatter', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_darkmatter'
                    });
                    event.shaped('kubejs:5_darkmatter', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_darkmatter'
                        });
                        event.shaped('kubejs:6_darkmatter', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_darkmatter'
                            });
                            event.shaped('kubejs:7_darkmatter', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:6_darkmatter'
                                });
                                event.shaped('kubejs:8_darkmatter', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:7_darkmatter'
                                    });
                                    event.shaped('kubejs:9_darkmatter', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:8_darkmatter'
                                        });


	event.shaped('kubejs:1_hay_bale', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:hay_block'
        });

        event.shaped('kubejs:2_hay_bale', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_hay_bale'
            });
            event.shaped('kubejs:3_hay_bale', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_hay_bale'
                });

                event.shaped('kubejs:4_hay_bale', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_hay_bale'
                    });

                    event.shaped('kubejs:5_hay_bale', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_hay_bale'
                        });
    
        event.shaped('kubejs:6_hay_bale', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:5_hay_bale'
        })});