# Hvad skal jeg læse? 
### boganbefalingssystem
<b>ide</b> <br>
anbefaling af bøger baseret på indtastede varibler: køn og/eller alder <br>
de anbefalede bøger skal være en top 10 over mest lånte bøger (f.eks. for en kvinde på 27 år) <br>
baseret på åbne data fra DBC der viser bibliotekslån for ét år <br>

<b>udfordringer</b> <br>
simpelt interface der gør der muligt at indtaste alder og/eller køn <br>
hvorefter 10 bøger med cover og andre informationer vil være resultatet <br>

kombinere to datasæt: udlånsdata + materialedata <br>
udlånsdata indeholder bl.a.: materiale_id, køn, fødselsår <br>
materialedata indeholder bl.a.: materiale_id, title, type, creator, decription <br>

<a href="https://docs.google.com/document/d/1azzIHtbflAPwd3K1q2cv22kECl5fSWPgbgjs6-z3BNk/pub">datasættene kan downloades her som csv og json</a> <br>

de to datasæt indeholder også irrelvant data som lån af andre materialetyper end bøger <br>

udover materialedata vil vi i anbefalingen af de 10 bøger gerne have coverbilleder vist<br>
vi leder efter api der giver adgang til coverbilleder (amazon api, google books api, open library api...?) <br>

![wireframe-forside](https://cloud.githubusercontent.com/assets/24417130/24724155/64801eb4-1a4a-11e7-8fb2-5249fd2bd412.jpg)


