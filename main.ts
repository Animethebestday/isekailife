let mySprite = sprites.create(img`
    . . 2 f f f f f f f f f f 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . f f 2 2 2 f f 2 2 2 f f . . 
    . . f f 2 4 4 4 4 4 4 2 f f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . 2 2 2 f f f f f f 2 2 2 . . 
    . . 2 f 2 4 4 4 4 4 4 2 f 2 . . 
    . . . . . f 4 4 4 4 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . 4 4 f 4 2 4 4 2 4 f 4 4 . . 
    . . f 2 f 4 2 2 2 2 4 f 2 f . . 
    . . f 2 f 4 4 4 4 4 4 f 2 f . . 
    . . f 2 f f f . . f f f 2 f . . 
    . . . . f 4 f . . f 4 f . . . . 
    . . . . f 4 f . . f 4 f . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
