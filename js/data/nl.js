import Assignments from "../lib/assignments.js";

const words = `
; 100 Woorden - 1 tot 25
abonnement -- abonnement
A4'tje -- A4'tje
gezamenlijk -- gezamenlijk
uittreksel -- uittreksel
lunchen -- lunchen
liniaal -- liniaal
applaus -- applaus
ballonnen -- ballonnen
barbecueën -- barbecueën
beresterk -- beresterk
pannenkoek -- pannenkoek
bibliotheek -- bibliotheek
baby's -- baby's
breedte -- breedte
grootte -- grootte
koninklijke -- koninklijke
burgemeester -- burgemeester
cadeau -- cadeau
caissière -- caissière
cafés -- cafés
cappuccino -- cappuccino
chagrijnig -- chagrijnig
obstakel -- obstakel
chillen -- chillen
chronologisch -- chronologisch
communicatie -- communicatie
conciërge -- conciërge
; 100 Woorden - 25 tot 50
vwo'er -- vwo'er
oké -- oké
interessant -- interessant
dichtstbijzijnde -- dichtstbijzijnde
docent Duits -- docent Duits
docent scheikunde -- docent scheikunde
psycholoog -- psycholoog
dyslexie -- dyslexie
dyslectisch -- dyslectisch
eczeem -- eczeem
wanneer -- wanneer
papegaai -- papegaai
elektricien -- elektricien
enigszins -- enigszins
espresso's -- espresso's
etuis -- etuis
extreem -- extreem
fantasieën -- fantasieën
financiën -- financiën
financieel -- financieel
gedownload -- gedownload
ge-e-maild -- ge-e-maild
geëvalueerd -- geëvalueerd
stiekem -- stiekem
première -- première
geüpdatet -- geüpdatet
; 100 Woorden - 50 tot 75
excursie -- excursie
fontein -- fontein
hartstikke -- hartstikke
hopelijk -- hopelijk
ideaal -- ideaal
dromedaris -- dromedaris
instinct -- instinct
dennenbos -- dennenbos
interviewen -- interviewen
attractie -- attractie
orchidee -- orchidee
trakteren -- trakteren
juffrouw -- juffrouw
kangoeroe -- kangoeroe
bureaus -- bureaus
kopiëren -- kopiëren
laconiek -- laconiek
cactus -- cactus
litteken -- litteken
maneschijn -- maneschijn
onwaarschijnlijk -- onwaarschijnlijk
muggenbulten -- muggenbulten
gymnasium -- gymnasium
atheneum -- atheneum
catalogus -- catalogus
onmiddellijk -- onmiddellijk
; 100 Woorden - 75 tot 100
orthodontist -- orthodontist
blouse -- blouse
eigenlijk -- eigenlijk
per se -- per se
geëvalueerd -- geëvalueerd
context -- context
poriën -- poriën
product  -- product 
puberteit -- puberteit
pyjama -- pyjama
racistisch -- racistisch
rechtszaak -- rechtszaak
regisseur -- regisseur
relaxed -- relaxed
lunchen -- lunchen
sinaasappel -- sinaasappel
spaghetti -- spaghetti
gênant -- gênant
stressen -- stressen
gestrest -- gestrest
sympathie -- sympathie
van tevoren -- van tevoren
verrassing -- verrassing
yoghurt -- yoghurt
; Woordenschat  1
constateren -- constateren
de afkeer -- de afkeer
de afwijzing -- de afwijzing
de auteur -- de auteur
de band -- de band
de communicatie -- de communicatie
de defensie -- de defensie
de dimensie -- de dimensie
de euforie -- de euforie
de genegenheid -- de genegenheid
de gesteldheid -- de gesteldheid
de hartstocht -- de hartstocht
de hiërarchie -- de hiërarchie
de interactie -- de interactie
de interesse(s) -- de interesse(s)
de opkomst -- de opkomst
de passie -- de passie
de saamhorigheid -- de saamhorigheid
de sympathie -- de sympathie
de verantwoordelijkheid -- de verantwoordelijkheid
de verdediging -- de verdediging
de verstandhouding -- de verstandhouding
de weerzin -- de weerzin
de willekeur -- de willekeur
; Woordenschat 2
keuze -- keuze
dominant -- dominant
doorgaans -- doorgaans
frequent -- frequent
fysiek -- fysiek
garanderen -- garanderen
gecompliceerd -- gecompliceerd
het individu -- het individu
het kroost -- het kroost
het perspectief -- het perspectief
imiteren -- imiteren
integer -- integer
intiem -- intiem
joviaal -- joviaal
kwetsbaar -- kwetsbaar
loyaal -- loyaal
observeren -- observeren
onbenullig -- onbenullig
onderscheiden -- onderscheiden
onuitputtelijk -- onuitputtelijk
permanent -- permanent
recent -- recent
reëel -- reëel
sowieso -- sowieso
spectaculair -- spectaculair
teweegbrengen -- teweegbrengen
vertederen -- vertederen
virtueel -- virtueel
volstaan met -- volstaan met
waarnemen -- waarnemen
; Uitdrukkingen
alles goed en wel -- alles goed en wel
alles kort en klein slaan -- alles kort en klein slaan
bont en blauw -- bont en blauw
dood en verderf zaaien -- dood en verderf zaaien
grote schaal -- grote schaal
have en goed -- have en goed
heg noch steg weten -- heg noch steg weten
hoe je het ook wendt of keert -- hoe je het ook wendt of keert
huis en haard verlaten -- huis en haard verlaten
in de bres springen voor iemand -- in de bres springen voor iemand
in kannen en kruiken -- in kannen en kruiken
in vuur en vlam staan -- in vuur en vlam staan
kant noch wal raken -- kant noch wal raken
kommer en kwel -- kommer en kwel
met hangen en wurgen -- met hangen en wurgen
met horten en stoten -- met horten en stoten
mitsen en maren -- mitsen en maren
nooit of te nimmer -- nooit of te nimmer
open en bloot -- open en bloot
pais en vree -- pais en vree
pracht en praal -- pracht en praal
schots en scheef -- schots en scheef
te hooi en te gras -- te hooi en te gras
tot de verbeelding spreken -- tot de verbeelding spreken
van toeten noch blazen weten -- van toeten noch blazen weten
vast en zeker -- vast en zeker
zonder slag of stoot -- zonder slag of stoot
`
const assignments = new Assignments(words);

export default assignments;
