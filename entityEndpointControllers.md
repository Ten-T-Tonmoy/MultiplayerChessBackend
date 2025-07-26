# Entities and Controllers for them

## entity: ``user`` 
 
- flow
    - create User
        - CURD operation of user
            - will have necessary info
            - can have friends/follower (a filter to who can view my games live)
            - will have ratings, games statistics bla bla whatever info chess platform needs a player to have 


        - can create Games (live streamable)
            - random opponent or play with playerID/roomID or friend
            - each game willl have game mode option
            - matchMaking logic nd rating based opponent choosing
            - each game a socket room 2 players active
            - if game public there will be a chat stream box on side (twitch like)
            - point distribution 
            - play moves history record and show to viewers if game is public
            - winner and loser deciding
            - assigning/modifying rating/rank to each participant
        
        - can modify personal infos(basic user curd)
    


 ## entity: ``setting`` 

 - flow
    - default setting assigned for each player
    - its like max rating of opponent 
    - interface color/bla bla 
    - language? might be hard to implement
    - 
            
        
 ## entity: ``puzzles or lessons``

- flow
    - create puzzle
        - players can create own problems and puzzle 
        - players can solve existing problems/puzzles made by others
        - puzzles will have by rating/tag filter 
        
 ## entity: ``achievements``

 - flow
    - complete achievements
        - by default every player will have 0 achievements
        - there will be login streak achievement/win/lose/rating/friend count/whatever possible chess game achievements list
        - achievement will unlock titles/banners/frames bla bla

## entity: ``gameHistory``
- flow 
    - create GameHistory (it wont be deleteable or updateable)
        - each games log (winner,loser,participant,peak viewer)
        - a POTG like moment capturing method? 
        - bruh tf! timeStamp saving and reusing that to recreate viideo like potg moment replay!! 
        - player moves array history (gonna help for replay)
