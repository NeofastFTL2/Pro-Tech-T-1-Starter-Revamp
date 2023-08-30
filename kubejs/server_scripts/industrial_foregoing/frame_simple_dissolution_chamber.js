onEvent('recipes', event => {
    event.custom(
      {
          "input": [
              {
                  "tag": "forge:plastic"
              },
              {
                  "tag": "forge:plastic"
              },
              {
                  "tag": "forge:storage_blocks/steel"
              },
              {
                  "tag": "industrialforegoing:machine_frame/pity"
              },
              {
                  "tag": "forge:storage_blocks/steel"
              },
              {
                  "item": "kubejs:1_component"
              },
              {
                  "item": "kubejs:1_component"
              },
              {
                  "tag": "forge:gears/gold"
              }
          ],
          "inputFluid": "{FluidName:\"kubejs:molten_brassmium\",Amount:500}",
          "processingTime": 20,
          "output": {
              "item": "industrialforegoing:machine_frame_simple",
              "count": 1
          },
          "type": "industrialforegoing:dissolution_chamber"
      }
  ),
  event.custom(
    {
        "input": [
            {
                "item": "kubejs:bronzar_ingot"
            },
            {
                "item": "kubejs:bronzar_ingot"
            },
            {
                "tag": "industrialforegoing:machine_frame/simple"
            },
            {
                "tag": "industrialforegoing:machine_frame/simple"
            },
            {
                "tag": "forge:storage_blocks/steel"
            },
            {
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "kubejs:3_component"
            }
        ],
        "inputFluid": "{FluidName:\"tconstruct:molten_nickel\",Amount:2000}",
        "processingTime": 150,
        "output": {
            "item": "kubejs:4_component",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
),
event.custom(
    {
        "input": [
            {
                "item": "botania:mana_pearl"
            },
            {
                "item": "botania:mana_diamond"
            },
            {
                "item": "botania:manasteel_ingot"
            }
        ],
        "inputFluid": "{FluidName:\"kubejs:mana\",Amount:8000}",
        "processingTime": 150,
        "output": {
            "item": "botania:terrasteel_ingot",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
),
event.custom(
    {
        "input": [
            {
                "tag": "forge:plastic"
            },
            {
                "tag": "forge:plastic"
            },
            {
                "item": "kubejs:4_component"
            },
            {
                "item": "kubejs:3_component"
            },
            {
                "item": "kubejs:3_component"
            },
            {
                "item": "botania:terrasteel_ingot"
            },
            {
                "item": "botania:terrasteel_ingot"
            },
            {
                "item": "kubejs:4_component"
            }
        ],
        "inputFluid": "{FluidName:\"tconstruct:molten_debris\",Amount:3250}",
        "processingTime": 150,
        "output": {
            "item": "industrialforegoing:machine_frame_advanced",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
)
  })
  