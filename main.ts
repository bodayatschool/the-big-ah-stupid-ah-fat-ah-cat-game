namespace SpriteKind {
    export const BED = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (patrick.vy == 0) {
        patrick.vy = -170
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let patrick: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddd99999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444999999999999999999999dd5555555555555dd999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444499999999999999dd55555555555555555dd9999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999499999999999dd555555555555555555555dd99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994499999999d5555555555555555555555555d9999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555d999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d55555555555555555555555555555d99999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d5555555555555555555555555555555d9999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555d999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555d999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d55555555555555555555555555555555555d99999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d55555555555555555555555555555555555d99999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d5555555555555555555555555555555555555d9999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d5555555555555555555555555555555555555d9999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444449999999d555555555555555555555555555555555555555d999
    9999999999999999999999999dddddddddddddddddddd99999999999999999999999999999999999999999999999999444999499999999999999d555555555555555555555555555555555555555d999
    9999999999999999999dddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999444499999999999999d555555555555555555555555555555555555555d999
    999999999999999999d11111111111111111111111111ddddddd9999999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    99999999999999999d1111111111111111111111111111dddddddd99999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    99999999999999999d1111111111111111111111111111111111dddd999999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    9999999999999999d1111111111111111111111111111111111111dddd9999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    999999999999999dd11111111111111111111111111111111111111ddd9999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    999999999999999d1111111111111111111111111111111111111111ddd999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    999999999999999d11111111111111111111111111111111111111111ddd99999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    999999999999999d111111111111111111111111111111111111111111ddd9999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    999999999999999d111111111111111111111111111111111111111111dddd999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555555555d999
    999999999999999d11111111111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999999999999d5555555555555555555555555555555555555d9999
    999999999999999d11111111111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999999999999d5555555555555555555555555555555555555d9999
    999999999999999dd1111111111111111111111111111111111111111111dd99999999999999999999999999999999999999999999999999999999d55555555555555555555555555555555555d99999
    99999999999999999dd1111111111111111111111111111111111111111ddd99999999999999999999999999999999999999999999999999999999d55555555555555555555555555555555555d99999
    9999999999999999999ddd1111111111111111111111111111111111111ddd999999999999999999999999999999999999999999999999999999999d555555555555555555555555555555555d999999
    9999999999999999999999d111111111111111111111111111111111ddddd9999999999999999999999999999999999999999999999999944999999d555555555555555555555555555555555d999999
    99999999999999999999999dd11111111111111111111111111111dddddd999999999999999999999999999999999999999999999999999499999999d5555555555555555555555555555555d9999999
    9999999999999999999999999dd1111111111111111111111111dddddd999999999999999999999999999999999999999999999999999994999999999d55555555555555555555555555555d99999999
    999999999999999999999999999ddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999949999999999d555555555555555555555555555d999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999499999999999d5555555555555555555555555d9999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944999999999999dd555555555555555555555dd99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994999999999999999dd55555555555555555dd9999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994499999999999999999dd5555555555555dd999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994499999999999999999999ddddddddddddd99999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999449999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999499999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994499999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944999999999999999999949999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994999999999999999999949999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994499999999999999999949999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999499999999999999999949999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994499999999999999999949999999
    99999999999999999999999999999999999999999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999944999999999999999999994499999
    999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999949999999999999999999999499999
    99999999999999999999999999999999999999999999d1111111111111111111111dddddddd9999999999999999999999999999999999999999999999999999999949999999999999999999994999999
    9999999999999999999999999999999999999999999d111111111111111111111111111ddddddd9999999999999999999999999999999999999999999999999999499999999999999999999994999999
    9999999999999999999999999999999999999999999d11111111111111111111111111111111dddd99999999999999999999999999999999999999999999999999499999999999999999999994499999
    9999999999999999999999999999999999999999999d1111111111111111111111111111111111ddddd99999999999999999999999999999999999999999999994999999999999999999999444499999
    9999999999999999999999999999999999999999999d111111111111111111111111111111111111ddddd999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999d1111111111111111111111111111111111111ddddd99999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999d111111111111111111111111111111111111111ddd9999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999d1111111111111111111111111111111111111111ddd999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999d1111111111111111111111111111111111111111dddd99999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999d1111111111111111111111111111111111111111dddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999d11111111111111111111111111111111111111111ddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999d111111111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999d111111111111111111111111111111111111111111dd999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999d111111111111111111111111111111111111111111dd999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999d11111111111111111111111111111111111111111dd999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999d1111111111111111111111111111111111111111ddd99999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999dd11111111111111111111111111111111111111ddd99999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999d1111111111111111111111111111111111111ddd99999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999dddd111111111111111111111111111111111dd999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999ddd11111111111111111111111111111dd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999ddddd11111111111111111111dddd999999999999999999999999ddddddddddddddddddddd999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd999999999999999999999dddddddddddddddddddddddddddddd9999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd11111111111111111111ddddddddddddd9999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd11111111111111111111111111111111dddddd999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd11111111111111111111111111111111111d1ddd99999999999999999999
    9999999999999999999dddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999dd111111111111111111111111111111111111111dddd999999999999999999
    99999999999999999ddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999d11111111111111111111111111111111111111111dddd99999999999999999
    9999999999999999dddd11111111111111111111111111dddddddd999999999999999999999999999999999999999999d11111111111111111111111111111111111111111111dddd999999999999999
    99999999999999999d1111111111111111111111111111111111dddd9999999999999999999999999999999999999999d11111111111111111111111111111111111111111111ddddd99999999999999
    99999999999999999d11111111111111111111111111111111111dddd99999999999999999999999999999999999999d111111111111111111111111111111111111111111111dddddd9999999999999
    99999999999999999d1111111111111111111111111111111111111ddd9999999999999999999999999999999999999d1111111111111111111111111111111111111111111111111dd9999999999999
    99999999999999999d11111111111111111111111111111111111111dd999999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    99999999999999999d111111111111111111111111111111111111111dd99999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    99999999999999999d1111111111111111111111111111111111111111dd9999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    99999999999999999d1111111111111111111111111111111111111111dd9999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    99999999999999999d1111111111111111111111111111111111111111dd9999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    99999999999999999d1111111111111111111111111111111111111111dd9999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    999999999999999999d111111111111111111111111111111111111111dd9999999999999999999999999999999999d111111111111111111111111111111111111111111111111111dd999999999999
    999999999999999999d111111111111111111111111111111111111111dd99999999999999999999999999999999999d11111111111111111111111111111111111111111111111111dd999999999999
    999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999d11111111111111111111111111111111111111111111111111dd999999999999
    9999999999999999999d111111111111111111111111111111111111ddd9999999999999999999999999999999999999d111111111111111111111111111111111111111111111111ddd999999999999
    9999999999999999999dd1111111111111111111111111111111111ddd99999999999999999999999999999999999999dd11111111111111111111111111111111111111111111111ddd999999999999
    99999999999999999999dd111111111111111111111111111111111dd99999999999999999999999999999999999999999d1111111111111111111111111111111111111111111111dd9999999999999
    9999999999999999999999d111111111111111111111111111111dddd999999999999999999999999999999999999999999d111111111111111111111111111111111111111111111dd9999999999999
    9999999999999999999999dd11111111111111111111111111111d9999999999999999999999999999999999999999999999d11111111111111111111111111111111111111111111d99999999999999
    999999999999999999999999d111111111111111111111111111d999999999999999999999999999999999999999999999999d111111111111111111111111111111111111111111d999999999999999
    9999999999999999999999999ddd11111111111111111111dddd99999999999999999999999999999999999999999999999999dd11111111111111111111111111111111111111dd9999999999999999
    9999999999999999999999999999ddd111111111111ddddd99999999999999999999999999999999999999999999999999999999d11111111111111111111111111111111111dd999999999999999999
    9999999999999999999999999999999dddddddddddd99999999999999999999999999999999999999999999999999999999999999dd1111111111111111111111111111111dd99999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd111111111111111111111111dddd9999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd111111111111111ddd99999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddd99999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
patrick = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .......................4........
    .......................444......
    ........44444e44e44e44e4f43.....
    .......44..4e44e44e44e41111.....
    .......1...444444444444.........
    ...........411411114114.........
    ...........4..4....4..4.........
    ...........41.41...41.41........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
scene.cameraFollowSprite(patrick)
tiles.setCurrentTilemap(tilemap`niveau4`)
controller.moveSprite(patrick, 100, 0)
patrick.ay = 215
info.setLife(3)
let BED = sprites.create(assets.image`myImage2`, SpriteKind.Food)
tiles.placeOnTile(BED, tiles.getTileLocation(58, 38))
forever(function () {
    if (patrick.vy == 0) {
        patrick.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .......................4........
            .......................444......
            ........44444e44e44e44e4f43.....
            .......44..4e44e44e44e41111.....
            .......1...444444444444.........
            ...........411411114114.........
            ...........4..4....4..4.........
            ...........41.41...41.41........
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
        scene.cameraShake(12, 500)
        patrick.startEffect(effects.ashes, 1000)
        pauseUntil(() => patrick.vy != 0)
    }
})
forever(function () {
    pauseUntil(() => patrick.y == 753)
    info.changeLifeBy(-1)
    tiles.placeOnTile(patrick, tiles.getTileLocation(4, 30))
})
