ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

  event.shaped(
    Item.of('minecraft:stone', 3), // arg 1: output
    [
      'A B',
      ' C ', // arg 2: the shape (array of strings)
      'B A'
    ],
    {
      A: 'minecraft:andesite',
      B: 'minecraft:diorite',  //arg 3: the mapping object
      C: 'minecraft:granite'
    }
  )

  event.shapeless(
    Item.of('minecraft:dandelion', 3), // arg 1: output
    [
      'minecraft:bone_meal',
      'minecraft:yellow_dye', 	       // arg 2: the array of inputs
      '3x minecraft:ender_pearl'
    ]
  )

  event.smithing(
    'minecraft:netherite_ingot',                     // arg 1: output
    'minecraft:netherite_upgrade_smithing_template', // arg 2: the smithing template
    'minecraft:iron_ingot',                          // arg 3: the item to be upgraded
    'minecraft:black_dye'                            // arg 4: the upgrade item
  )

  // Cook 1 stone into 3 gravel in a Furnace:
  event.smelting('3x minecraft:gravel', 'minecraft:stone')

  // Blast 1 iron ingot into 10 nuggets in a Blast Furnace: 
  event.blasting('10x minecraft:iron_nugget', 'minecraft:iron_ingot')

  // Smoke glass into tinted glass in the Smoker and give 0.35XP:
  event.smoking('minecraft:tinted_glass', 'minecraft:glass').xp(0.35)

  // Burn sticks into torches on the Campfire, give 0.35XP and take 30 seconds:
  event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)

  //allow cutting 3 sticks from any plank on the stonecutter
  event.stonecutting('3x minecraft:stick', '#minecraft:planks')

  // Slice cake on a cutting board!
  event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:cake' }
    ],
    tool: { tag: 'forge:tools/knives' },
    result: [
      { item: 'farmersdelight:cake_slice', count: 7 }
    ]
  })

  console.log('Hello! The recipe event has fired!')
})