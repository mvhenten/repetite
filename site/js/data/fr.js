import Assignments from "../lib/assignments.js";

const raw = `
; apprendre 1 & 2
twee meisjes -- deux filles 
twee jongens -- deux garçons 
daar is, hier is -- voilà 
zij -- elle 
zij woont -- elle habite 
zij is -- elle est 
op de (middelbare) school -- au collège 
hij -- il 
hij heet -- il s'appelle 
ook -- aussi   
in -- dans 
de klas -- la classe 
nieuw -- nouveau 
lievelingssport -- le sport préféré 
zij heeft -- elle a 
een zus -- une sœur 
dat is, het is -- c'est 
een vriend -- un copain 
de oceaan -- l'océan 
het vakantiehuis -- la maison de vacances
de snelweg -- l'autoroute
een auto -- une auto 
naar -- à 
van -- de 
de trein -- le train 
een dorp -- un village 
een stad -- une ville 
een land -- un pays 
Frankrijk -- la France 
; apprendre 4
hoe heet jij -- comment tu t'appelles
ik heet -- je m'appelle
zij heet  -- elle s'appelle
hoe heet hij -- comment il s'appelle
hij heet  -- il s'appelle
dit is Tim -- voilà Tim
; apprendre 5
de tas  -- le sac
je hebt, heb je			  --		tu as 
het problem   -- le problème 
dat is  --c'est
afschuwelijk  -- horrible
hier, asjeblieft; he  -- tiens
hoe  -- comment 
wij zijn  -- on est
in  -- dans 
ik ga naar huis  -- je rentre
ja  -- oui
voor  -- pour
dank je  -- merci
aardig  -- sympa
maar  -- mais
eerst  -- d'abord
kom  -- venez
bij mij thuis  -- chez moi
morgen  -- demain
goed idee --bonne idée
geef  -- donne
stom --bête
jij bent  -- tu es
ik ben  -- je suis
de klas  -- la classe
het is tijd  -- c'est l'heure
we gaan naar binnen  -- on entre
; test
test1 -- test1
test2 -- test2
test3 -- test3
`;

const assignments = new Assignments(raw);

export default assignments;