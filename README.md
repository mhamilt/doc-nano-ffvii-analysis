# Interactive FFVII Soundtrack Analysis

An interactive Versino of Doc Nano's analysic graph of the Final Fantasy VII soundtrack

![ ](ffvii-themes.png)

## Font

Font used is Google's _Playfair Display_


## To Do

  - [ ] add arrows from nodes to score snippets
  - [ ] collect recordings of sound track snippets

```
ffmpeg -i "final_fantasy_vii_soundtrack/01-The Prelude.mp3" -ss 00:00:00.000 -to 00:00:00.700 -c copy the-prelude_prelude_1.mp3

ffmpeg -i "final_fantasy_vii_soundtrack/01-The Prelude.mp3" -ss 00:00:47.500 -to 00:00:55.500 -c copy the-prelude_prelude_2.mp3

ffmpeg -i "final_fantasy_vii_soundtrack/39-Continue.mp3" -ss 00:00:15.800 -to 00:00:16.500 -c copy continue_prelude_1.mp3

ffmpeg -y -i "final_fantasy_vii_soundtrack/33-Chasing the Black-Caped Man.mp3" -ss 00:01:36.200 -to 00:01:37.400 -c copy chasing-the-black-caped-man_prelude_1.mp3

ffmpeg -y -i "final_fantasy_vii_soundtrack/05-Anxious Heart.mp3" -ss 00:01:38.200 -to 00:01:43.400 -c copy anxious-heart_prelude_1.mp3

ffmpeg -y -i "final_fantasy_vii_soundtrack/51-Those Chosen By the Planet (No Intro).mp3" -ss 00:00:12.200 -to 00:00:21.000 -c copy those-chosen-by-the-planet_prelude_2.mp3

ffmpeg -y -i "final_fantasy_vii_soundtrack/71-Weapon Raid.mp3" -ss 00:01:10.000 -to 00:01:16.000 -c copy weapon-raid_prelude_2.mp3

ffmpeg -y -i "final_fantasy_vii_soundtrack/71-Weapon Raid.mp3" -ss 00:00:14.500 -to 00:00:18.000 -c copy weapon-raid_prelude_3.mp3
```