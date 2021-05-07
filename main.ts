scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 4 4 4 4 4 4 2 . . . . 
    . . . 2 2 f f f f f f 2 2 . . . 
    . . . 2 2 f f f f f f 2 2 . . . 
    . . . . 2 4 4 4 4 4 4 2 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . 4 4 f 4 2 4 4 2 4 f 4 4 . . 
    . . f 2 f 4 2 2 2 2 4 f 2 f . . 
    . . f 2 f 4 4 4 4 4 4 f 2 f . . 
    . . f 2 f f f . . f f f 2 f . . 
    . . . . f 4 f . . f 4 f . . . . 
    . . . . f 4 f . . f 4 f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
info.startCountdown(10)
