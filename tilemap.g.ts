// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010403030303030303030303030306010e050101010101010101010101010701010501040a0a0a0a0a0a0a0a060107010105010d0101010101010101070107010105010d01040a0a0a0a0601070107010105010d010d010101080701070107010105010d010d010909090b01070107010105010d010d010101010101070107010105010d010c0909090909090b0107010105010d0101010101010101010107010105010c090909090909090909090b010105010101010101010101010101010101040a0a0a0a0a0a0a0a0a0a030306010105010101010101010101010101070108050801010101010101010101010702`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 
. 2 . 2 . . . . . . . . 2 . 2 . 
. 2 . 2 . 2 2 2 2 2 2 . 2 . 2 . 
. 2 . 2 . 2 . . . . 2 . 2 . 2 . 
. 2 . 2 . 2 . 2 . 2 2 . 2 . 2 . 
. 2 . 2 . 2 . . . . . . 2 . 2 . 
. 2 . 2 . 2 2 2 . 2 2 2 2 . 2 . 
. 2 . 2 . . . . . . . . . . 2 . 
. 2 . 2 2 2 2 2 . 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . . . 
. 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.stairEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.stairWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterNorth0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
