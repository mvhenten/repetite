import Assignments from "../lib/assignments.js";

const vwo2unite1 = `
; VWO2:  Unité 4 Apprendre 6, klokkijken
Het is al vijf voor halftien -- Il est déjà neuf heures vingt-cinq
Het is vijf over negen -- Il est neuf heure cinq
het is kwart over negen -- Il est neuf heures et quart
Het is halftien -- Il est neuf heures et demie
Het is tien over halftien -- Il est dix heures moins vingt
Het is kwart voor tien -- Il est dix heures moins le quart
Het is tien voor tien -- Il est dix heures moins dix
; VWO2:  Unité 4 Apprendre 8, werkwoorden op -re
Ik wacht op het antwoord -- J'attends la réponse
Ik hoor een raar geluid -- J'entends un bruit bizarre
Ik verkoop mijn scooter -- Je vends mon scooter
Ik heb mijn portemonnee verloren -- J'ai perdu mon porte-monnaie 
ik verlies -- je perds
jij verliest -- tu perds
hij verliest -- il perd
wij verkopen -- nous vendons
jullie verkopen -- vous vendez
zij wachten -- ils attendent
; VWO2:  Unité 4 Apprendre 9
Heb je een belangrijke wedstrijd? --  Tu as un match important?
Doe je aan hardlopen? -- Tu fais de la course à pied?
Ik train voor... -- Je m'entraine pour...
Jij bent goed -- Tu es fort(e)
Gymnastiek vindt ik leuk -- La gymnastique, j'aime bien
Voetbal jij? -- Tu fais du foot?
Heb je de overhoring Spaans voorbereid? -- Tu as préparé l'interro d'espagnol?
Die spreekbeurt is voor donderdag -- Cet exposé est pour jeudi
Bij natuurkunde hebben we sommen gemaakt -- En physique, on a fait des problèmes
In de Franse les hebben we gediscussieerd -- Pendant le cours de français, on discuté
; VWO2:  Unité 3 Apprendre 7
de uitnodiging -- l'invitation
oma -- mamie
bijwonen -- assister à
belangrijk -- important
de kapper -- le coiffeur
verliezen -- perdre
eruitzien -- avoir l'air
hardlopen -- faire de la course à pied
trainen -- s'entraîner
het eind -- la fin
de competitie -- la compétiton
het toernooi -- le tournoi
ik wist -- je savais
verdedigen -- défendre
; VWO2:  Unité 3 Apprendre 5
vanavond -- ce soir
verkopen -- vender
de pruik -- la perruque
de vlag -- le drapeau
zich amuseren -- s'amuser
we zien elkaar -- on se voit
de sersiering -- le chaise
aangeven, doorgeven -- passer
doen, leggen, zetten -- mettre
op de eerste rij -- au premier rang
leiden -- mener
wat gebeurt er -- qu'est-ce qui se passe
de ellende -- la galère
ook niet, ook geen -- n... pas non plus
het scherm -- l'écran
opbellen -- appeler
in orde komen -- s'arranger
de strafschop -- la pénalité
schieten -- tirer
; VWO2:  Unité 3 Apprendre 4
Vanavond is er een rugbywedstrijd. -- Ce noir, il y a un match de rugby.
Ga je met ons mee? -- Vous allez où pour regarder?
Oké, ik kom ook -- D'accord, je viens aussi
Ga je met ons mee? -- Tu wiens aves nous?
Hoe laat is dat? -- C'est à quelle heure?
Het is al vijf voor halftien. -- Il est défà neuf heures vingt-cinq.
Hoe laat is het? -- Il est puelle heure?
Hoe laat begint de wedstrijd? -- Le match commence à quelle heure?
We zien elkaar om kwart over zes. -- On se ooit à six heures ent quart.
; VWO2:  Unité 3 Apprendre 1
trainen -- s'entraîner
zich inschirijven -- s'inscriver
eindigen -- finir
verslaan -- batte
verdedigen -- défendre
de competitie -- la compétition
het toernooi -- le toernooi
het doel/het doelpunt -- le but
de overwinning -- la victoire
de aankomst -- l'arrivée
de supporter -- le supporter
de tribune -- la tribune
de ploeg, het team -- l'équipe
de atleet -- l'athlète
het hoogspringen -- le saut en hauter
; VWO2:  Unité 3 Apprendre 2
de kampioen -- le champion
combineren -- combiner
de studie -- les études
ongeveer -- environ
de god -- la vague
er -- y
het weergbericht -- la météo
weten -- savoir
ingeschreven -- inscrit
de schriftelijke cursus
ik ontvang -- je reçois
de overhoring -- le contrôle
het voordeel -- au liet de
het moment -- l'instant
erin slagen om -- arriver à
volgen -- suivre
zich ontspannen -- le détendre
drummen -- jouer de la batterie
buiten, behalve -- en decors de
de meeste, het merendeel -- le plupart
het buitenland -- l'étranger
ik weet -- je sais
; VWO2 PW werkwoorden
ik wacht -- j'attends
jij wacht -- tu attends
hij/zij/het wacht -- il/elle attend
wij wachten -- nous attendons
jullie wachten -- vous attendez
zij wachten -- ils/elles attendent
ik heb gewacht -- j'ai attendu
jij hebt gewacht -- tu as attendu
hij/zij/het heeft gewacht -- il/elle a attendu
wij hebben gewacht -- nous avons attendu
jullie hebben gewacht -- vous avez attendu
zij hebben gewacht -- ils/elles ont attendu
ik hoor -- j'entends
jij hoort -- tu entends
hij/zij/het hoort -- il/elle entend
wij horen -- nous entendons
jullie horen -- vous entendez
zij horen -- ils/elles entendent
ik heb gehoord -- j'ai entendu
jij hebt gehoord -- tu as entendu
hij/zij/het heeft gehoord -- il/elle a entendu
wij hebben gehoord -- nous avons entendu
jullie hebben gehoord -- vous avez entendu
zij hebben gehoord -- ils/elles ont entendu
ik verlies -- je perds
jij verliest -- tu perds
hij/zij/het verliest -- il/elle perd
wij verliezen -- nous perdons
jullie verliezen -- vous perdez
zij verliezen -- ils/elles perdent
ik heb verloren -- j'ai perdu
jij hebt verloren -- tu as perdu
hij/zij/het heeft verloren -- il/elle a perdu
wij hebben verloren -- nous avons perdu
jullie hebben verloren -- vous avez perdu
zij hebben verloren -- ils/elles ont perdu
ik vertrek -- je pars
jij vertrekt -- tu pars
hij/zij/het vertrekt -- il/elle part
wij vertrekken -- nous partons
jullie vertrekken -- vous partez
zij vertrekken -- ils/elles partent
ik ben vertrokken -- je suis parti(e)
jij bent vertrokken -- tu es parti(e)
hij/zij/het is vertrokken -- il/elle est parti(e)
wij zijn vertrokken -- nous sommes parti(e)s
jullie zij vertrokken -- vous êtes parti(e)(s)
zij zijn vertrokken -- ils/elles sont parti(e)s
ik voel -- je sens
jij voelt -- tu sens
hij/zij/het voelt -- il/elle sent
wij voelen -- nous sentons
jullie voelen -- vous sentez
zij voelen -- ils/elles sentent
ik heb gevoeld -- j'ai sent
jij hebt gevoeld -- tu as senti
hij/zij/het heeft gevoeld -- il/elle a senti
wij hebben gevoeld -- nous avons senti
jullie hebben gevoeld -- vous avez senti
zij hebben gevoeld -- ils/elles ont senti
ik verkoop -- je vends
jij verkoopt -- tu vends
hij/zij/het verkoopt -- il/elle vend
wij verkopen -- nous vendons
jullie verkopen -- vous vendez
zij verkopen -- ils/elles vendent
ik heb verkocht -- j'ai vendu
jij hebt verkocht -- tu as vendu
hij/zij/het heeft verkocht -- il/elle a vendu
wij hebben verkocht -- nous avons vendu
jullie hebben verkocht -- vous avez vendu
zij hebben verkocht -- ils/elles ont vendu
ik ga uit -- je sors
jij gaat uit -- tu sors
hij/zij/het gaat uit -- il/elle sort
wij gaan uit -- nous sortons
jullie gaan uit -- vous sortez
zij gaan uit -- ils/elles sortent
ik ben uitgegaan -- je suis sorti(e)
jij bent uitgegaan -- tu es sorti(e)
hij/zij/het is uitgegaan -- il/elle est sorti(e)
wij zijn uitgegaan -- nous sommes sorti(e)s
jullie zijn uitgegaan -- vous êtes sorti(e)(s)
zij zijn uitgegaan -- ils/elles sont sorti(e)s
; VWO2:  Unité 2 Apprendre 8
kunnen/mogen -- pouvoir
ik kan -- je peut
jij kunt -- tu peut
hij kan -- il peut
zij kan -- elle peut
men kan, wij kunnen -- on peut
wij kunnen -- nous pouvons
jullie kunnen, u kunt -- vous pouvez
zij kunnen (m) -- ils peuvent
zij kunnen (f) -- elles peuvent
ik kon/ik heb gekund -- j'ai pu
willen -- vouloir
ik wil -- je vieux
jij wilt
tu veux
hij wil -- il peut
zij wil -- elle veut
men wil, wij willen -- on peut
wij willen -- nous voulons
jullie willen, u wilt -- vous voelen
zij willen (m) -- ils veulent
zij willen (f) -- elles veulent
ik heb gewild, ik wilde -- j'ai voulu
; VWO2: aller, avoir, être, faire
gaan -- aller
ik ga -- je vais
jij gaat -- tu vas
hij gaat -- il va
zij gaat  -- elle va
men gaat, wij gaan -- on va
wij gaan -- nous allons
jullie gaan, u gaat -- vous allez
zij gaan (m) -- ils vont
zij gaan (f) -- elles vont
hebben -- avoir
ik heb -- j'ai
jij hebt -- tu as
hij heeft -- il a
zij heeft -- elle a
men heeft, wij hebben -- on a
wij hebben -- nos avons
jullie hebben, u heeft -- vous avez
zij hebben (m) -- ils ont
zij hebben (f) -- elles ont
zijn -- être
ik ben -- je suis
jij bent -- tu es
hij is (m) -- il est
zij is (f) -- elle est
men is, wij zijn -- on est
wij zijn -- nous sommes
jullie zijn, u bent -- vous êtes
zij zijn (m) -- ils sont
zij zijn (f) -- elles sont
maken, doen -- faire
ik doe, ik maak -- je fais
jij doet, jij maakt -- tu fais
hij doet, hij maakt (m) -- il fait
zij dot, zij maakt (f) -- elle fait
men doet, men maakt / wij doen, wij maken -- on fait
wij doen wij maken -- nous faisons
jullie doen, jullie maken / u doet, u maakt -- vous faites
zij doen , zij maken (m) -- ils font
zij doen , zij maken (f) -- elles font
; VWO2:  Unité 2 Apprendre 1
het geld -- l'argent
het zakgeld -- l'argent de poche
de spaarpot -- la tirelire
rijk -- riche
sparen -- faire des économies
het baantje -- le petit boulot
verdienen, winnen -- Wagner
geld opnemen -- retireer de l'argent
de pinpas -- la caret bancaire
de geldautomaat -- le distribueerde billets
de bank -- la banque
teruggeven -- rentree
gul -- généreux, généreuse
lenen van -- empruter à
betalen -- payer
boodschappen doen -- faire des courses
uitgeven -- dépenser
blut -- fauchéde 
schuld -- dette
verliezen -- perdre
; VWO2: Unité 2 Apprendre 7
de kassa -- la caisse
genoeg -- assez
nodig -- nécessaire
weghalen -- elever
enkele -- quelques
het product -- le produit
het pakje -- le paquet
de koek -- le gâteau
de chips -- les chips
ik ben het zat -- j'en ai marren
blut -- fauché
alsjeblieft -- s'il te plaît
beloofd -- promis
; VWO2: Unité 2 Apprendre 5
fantastisch -- fantastique
boodschappen doen -- faire de courses
het geld -- l'argent
laat tard
later -- plus tard
ging het goed ? -- ça s'est bien passé?
de zak -- la poche
nergens -- ne.... nulle part
begrijpen -- comprendre
verloren -- perdu
dat moet -- ça doit
stelen -- voler
het geld -- le fric
de volgende dat le lendemain
verdienen -- gagner
slecht -- mauvais
begeleiden -- accompagner
het liedje -- la chanson
het begin -- le début
redden -- sauver
kopen -- acheter
; VWO2: Unité 2 Apprendre 4
alsjeblieft, vijf euro -- Voilà cinq euros.
dat is alles wat ik heb -- C'est tout ce que j'ai.
Waar is die portemonnee? -- Il est où, ce pore-monnaie?
Misschien heb je hem verloren ? -- Tu l'as peut-être perdu?
Ze hebben mijn portemonnee gestolen. -- On a volé mon porte-monnaie.
we hehebben geen geld meer -- On n'a plus de fric.
we kunnen muziek maken om geld ter verdienen -- On peut faire de la musique pour gagner de l'argent.
we  hebben 24 eure verdiend  -- On a gegné 24 euros.
we hebben weer dan 100 euro -- On a plus de 100 euros.
; VWO2: Unité 2 Apprendre 2
de opiniepeiling -- le sondage
zij ontvangen -- ils reçoivent
regelmatig -- régulièrement
gemiddeld -- en moyenne
dat wil zeggen, dat betekent -- cola vest dire
het cijfer (op school) -- la note
grasmaaien -- tonder la pelouse
sasen -- laver
het middel -- le moyen
de portemonnee -- le porte-monnaie
gevold -- rempli
opbrengen -- rapporter
oppassen (op kinderen) -- harder les enfants
de hond uitlaten -- promener le chien
de uitgave -- la dépense
de jongere -- l'ado
eerder/nogal, tamelijk -- plutôt
het computerspel -- le jeu vidéo
het spel -- le jeu
het tijdschrift -- le magazine
het dient -- il sert
verstandig/redelijk -- raisonnabele
; VWO2: Unité 2 - Dagen van de week
maandag -- luid
dinsdag -- mardi
woensdag -- mercredi
donderdag -- feudi
vrijdag -- vendredi
zaterdag -- samedi
zondag -- dimanche
; VWO2: Unité 2 - De maanden van het jaar
januari -- janvier
februari -- février
maart -- mars
april -- avril
mei -- mai
juni -- juin
juli -- juillet
augustus -- août
september -- septembre
oktober -- november
december -- décember
; VWO2:  Unité 1 Apprendre 10
de kano -- le canoë
eerste -- premier, première
zonder -- sans
het traject -- le trajet
het hotel -- l'hôtel
de tent -- la tente
de rivier -- la rivière
eten -- mager
de maaltijd -- le repas
de zalm -- le saumon
het gerecht -- le plat
reizen -- voyager
zoals, als -- comme
gewoonlijk -- d'abitude
het strand -- la plage
de wandeling -- la plage
de wandeling -- la promenade
oud -- vieux
de brug -- le pont
de kerk -- l'église
zeker -- certainement
; VWO2:  Unité 1 Apprendre 9
Gaat de reis goed? -- Ça se passe bien, le voyage?
Waar ben je op vakantie geweest? -- Tu as été où, en vacances?
Heb je een leuke vakantie gehad? -- Tu as passé des bonnes vacances?
Hebben julie het vliegtuig genomen? -- Vous avez pris l'avion?
Hoeveel tijd doen jullie erover? -- Vous mettez combien de temps?
We hebben een groot feest georganiseerd. -- On a organisé une grande fête.
We hebben veel gerijsd. -- On a beaucoup voyagé.
Ik heb van de zomer een kansstage gedaan. -- J'ai fait un stage de canoë cet été.
Hebben jullie elke dag gekanood? -- Vous avez fait du canoë tous les jours?
Hebben jullie in hotels geslapen? -- Vous avez dormi à l'hôtel?
; VWO2: Unité 1 Apprendre 8
doen -- faire
ik doe/maak -- je fais
jij doet/maakt -- tu fais
hij doet/maakt -- il fait
zij doet/maakt -- elle fait
men/wij doen/maken -- on fait
wij doen/maken -- nous faisons
jullie/u doen/maken -- vous faites
zij doen/maken (m) -- ils font
zij doen/maken (v) -- ils font
; VWO2: Unité 1 Apprendre 7
de reis -- le voyage
luisteren naar -- écouter
pech hebben, kapot zijn -- être en panne
halen, ophalen -- venir chercher
tegenover -- en face de
hij vertrekt -- il part
ik stap in -- je descends
het zwembad -- la piscine
gauw, spoedig -- bientôt
tot gauw -- à bientôt
doorbrengen -- passer
het vliegtuig -- l'avion
jammer genoeg -- malheureusement
de boot -- le bateau
meenemen, meebrengen -- apporter
zoveel -- tellement
het ding -- la chose
het eten, het voedsel -- la nourriture
het cadeau -- le cadeau
; VWO2: Unité 1 Apprendre 5
afgelopen -- fini
zin hebben om -- avoir envie de
de volgende -- le suivant
de ochtend -- le matin
de kaart -- la carte
dus -- donc
we moeten, je moet -- il faut
zwaar -- lourd, lourde
de rugzak -- le sac à dos
de voet -- le pied
nauwelijks -- à peine
volgens -- selon
helemaal niet -- pas du tout
verdwaald -- perdu
tamelijk -- assez
omkeren -- faire demi-tour
herhalen -- répéter
doorlopen, doorgaan -- continuer
tot -- jusqu'à
moe -- fatigué
lastig zijn, zeuren -- être casse-pieds
opzetten (van een tent) -- monter
opschieten, vooruitgaan -- avancer
slapen -- dormir
de ster -- l'étoile
; VWO2: Unité 1 Apprendre 4
Het is drie kilometer naar de camping. -- Le camping es à trois kilomètres.
Waar is de halte? -- Où est l'arrêt?
De bus is net weg. -- Le bus vient de partir.
Pardon mevrouw, wij zoeken de camping. -- Madame, s'il vous plaît, on cerche le camping.
Dat is tamelijk ver. -- C'est asset loin.
Je moet eens naar links. -- Il faut dambord aller à gauche.
Je moet rechtdoor. -- Il faut aller tout droit.
Jullie lopen/u loopt door tot het kruispunt. -- Vous continue juspu'aau carrefour.
U gaat een peetje snel. -- Vous allez unpeu vite.
Kunt u het alstublieft herhalen? -- Vous pouvez répéter, s'il vous plaît?
; VWO2: Unité 1 Apprendre 2
de kus -- la côte
terug -- de retour
hij schrijft -- il écrit
lieve, beste/duur -- cher, chère
de mountainbike -- le VTT
de middag -- l'après midi
de reis -- le voyage
de airconditioning -- l'air conditionné
dat valt niet mee, dat is niet zo eenvoudig -- ce n'est pas évident
midden in de zomer -- en plein été
de graad -- le degré
de schaduw -- l'ombre
openen -- ouvrir
het raam, de ruit -- la vitre
uitdelen -- distribuer
de fles -- la bouteille
net, juist -- juste
langzamer ruiden -- ralentir
later -- plus tard
de stop -- l'arrêt
compleet -- complète
behalve -- sauf
praten -- discuter
de mobiele telefoon -- le portable
wordt vervolgd -- à suivre
ten slotte -- finalement
veel liefs -- grosses bises
; VWO2: Unité 1 Apprendre 1
links -- à gauche
rechts -- à droite
in het midden -- au milieu
tegenover -- en face de
naast -- à côté de
achter -- derrière
rechtdoor -- tout droit
de (verharde) weg -- la route
de (onverharde) weg -- le chemin
het kruispunt -- le carrefour
de rotonde  -- le rond-point
de brug -- le pont
 de kerk -- l'église
het zwembad -- la piscine
de wandeling, het tochtje -- la balade
de bestemming -- la destination
het vertrek -- la tante
het verblijf -- le séjour
reizen -- voyager
kamperen -- faire du camping
oversteken, doortrekken -- traverser`;


const unite6 =`
; VWO1: Unité 6 les mots plus difficile
70 -- soixante-dix
71 -- soixante et onze
72 -- soixante-douze
73 -- soixante-treize
74 -- soixante-quatorze
75 -- soixante-quinze
76 -- soixante-seize
84 -- quatre-vingts-quatre
85 -- quatre-vingts-cinq
86 -- quatre-vingts-six
87 -- quatre-vingts-sept
91 -- quatre-vingts-onze
92 -- quatre-vingts-doze
93 -- quatre-vingts-treize
94 -- quatre-vingts-quatorze
95 -- quatre-vingts-quinze
96 -- quatre-vingts-seize
overal -- partout
ik geloof -- je crois
de winkel -- le magasin
kort -- court, courte
aanpassen, proberen -- essayer
Dat zijn mijn lievelingskleren. -- Ce sont mes vêtements favoris.
We dragen een sweatshirt. -- Nous portos un sweat.
Dat is niet mooi. -- Ce n'est pas joli.
Ik heb maat 42. -- Je fais du 42.
Ik wil die schoenen passen. -- Je voudrais essayer ces chaussures.
waar -- vrai
wensen -- désirer
het model -- le modèle
de vlek -- la tache
gisteren -- hier
nieuw  -- neuf, neuve
de oplossing -- la solution
aantrekken -- mettre
het kaartje -- le billet
de verkoop -- la vente
de opbrengst -- la recette
het tenue -- la tenue
winnen -- gagner
schrijf je in -- inscrivez-vous
Waar gaan we naartoe voor de kleding -- On va où pour les vêtements?
Hoeveel kosten de schoenen? -- Combien coûtent les chaussures?
groen -- vert, verte
wit -- blanc, blanche
het jack -- le blouson
de sok -- la chaussette
kiezen -- choisir
echt -- vraiment
het ding -- le truc
deelnemen aan -- participer à
de kleren   -- les vêtements
de markt -- le marché
daar -- là
grappig -- rigolo
duur -- cher, chère
de jas -- le manteau
de hoed -- le chapeau
laat maar -- laisse tomber
de schoen -- la chaussure
rood -- rouge
de schoenmaat -- la pointure
kosten -- coûter
dragen -- porter
verkocht -- vendu
tenminste -- au moins
; VWO1: Unité 6 Apprendre 1
de kleren -- les vêtements
de kleur -- la couleur
rood -- rouge
oranje -- orange
geel -- jaune
rose -- rose
groen -- vert, verte
blauw -- bleu, bleue
paars -- violet, violette
bruin -- marron
wit -- blanc, blanche
de hoed -- le chapeau
de pet -- la casquette
de jurk -- la robe
de jas -- le manteau
de trui -- le pull
het sweatshirt -- le sweat
het T-shirt -- le T-shirt
het topje -- le top
het jack -- le blouson
de spijkerbroek -- le jean
de broek -- le pantalon
de legging -- le legging
de panty, de maillot -- le collant
de rok -- la jupe
de schoen -- la chaussure
de sok -- la chaussette
de basketbalschoenen -- les baskets
de laars -- la botte
; VWO1: Unité 6 Apprendre 2
de modeshow -- le défilé de mode
kiezen -- choisir
gebruiken -- utiliser
vooral -- surtout
de fantasie, de verbeelding -- l'imagination
deelnemen -- participer
je kunt -- tu peux
aantrekken -- mettre
het jaar -- l'année
het ding -- le truc
er is nodig, er zijn nodig -- il faut
het kaartje -- le billet
de verkoop -- la vente
de opbrengst -- la recette
prijs -- le prix
winnen -- gagner
het tenue -- la tenue
het eind -- la fin
de volwassene -- l'adulte
de deelnemer -- le participant
gratis -- gratuit
schrijf je in -- inscrivez-vous
dus -- donc
snel -- vite
in elk geval -- en tout cas
de inschrijving -- l'inscription
de opening -- l'ouverture
; VWO1: Unité 6 Apprendre 4
Waar gaan we naartoe voor de kleding -- On va où pour les vêtements?
Kijk die jas, super! -- Regarde ce manteau, super!
Nee, geen sprake van -- Non, pas question
Meneer, hoeveel kost dat? -- Monsieur, c'est combien?
Dat is te duur -- C'est trop cher
Dat is mijn (schoen)maat -- C'est ma pointure
Hoeveel kosten de schoenen? -- Combien coûtent les chaussures?
Hij staat je geweldig -- Il te va super bien
Hij draagt een pak -- Il porte un costume
; VWO1: Unité 6 Apprendre 5
echt -- vraiment
het ding -- le truc
deelnemen aan -- participer à
de kleren   -- les vêtements
de markt -- le marché
daar -- là
grappig -- rigolo
duur -- cher, chère
de jas -- le manteau
de hoed -- le chapeau
laat maar -- laisse tomber
de schoen -- la chaussure
rood -- rouge
de schoenmaat -- la pointure
kosten -- coûter
dragen -- porter
verkocht -- vendu
tenminste -- au moins
; VWO1: Unité 6 Apprendre 6
70 -- soixante-dix
71 -- soixante et onze
72 -- soixante-douze
73 -- soixante-treize
74 -- soixante-quatorze
75 -- soixante-quinze
76 -- soixante-seize
77 -- soixante-dix-sept
78 -- soixante-dix-huit
79 -- soixante-dix-neuf
80 -- quatre-vingts
81 -- quatre-vingts-un
82 -- quatre-vingts-deux
83 -- quatre-vingts-trois
84 -- quatre-vingts-quatre
85 -- quatre-vingts-cinq
86 -- quatre-vingts-six
87 -- quatre-vingts-sept
88 -- quatre-vingts-huit
89 -- quatre-vingts-neuf
90 -- quatre-vingts-dix
91 -- quatre-vingts-onze
92 -- quatre-vingts-doze
93 -- quatre-vingts-treize
94 -- quatre-vingts-quatorze
95 -- quatre-vingts-quinze
96 -- quatre-vingts-seize
97 -- quatre-vingts-dix-sept
98 -- quatre-vingts-dix-huit
99 -- quatre-vingts-dix-neuf
100 -- cent
; VWO1: Unité 6 Apprendre 7
de jurk -- la robe
orange -- orange
iets  anders -- autre chose
ik geloof -- je crois
liever hebben, prefereren -- préférer
blauw -- bleu, bleue
het T-shirt -- le T-shirt
geel -- jaune
de rok -- la jupe
de winkel -- le magasin
overal -- partout
hetzelfde -- pareil
wit -- blanc, blanche
het jack -- le blouson
de basketbalschoenen -- les baskets
de pet -- la cassette
de etalage -- la vitrine
een beetje -- un peu
kort -- court, courte
precies -- exactement
ik wil graag -- je voudrais
aanpassen, proberen -- essayer
de maat -- la taille
de vrouw -- la femme
de paskamer -- la cabine
achterin -- au fond
; VWO1: Unité 6 Apprendre 8
Dat is in de mode. -- C'est à la mode.
Dat zijn mijn lievelingskleren. -- Ce sont mes vêtements favoris.
We dragen een sweatshirt. -- Nous portos un sweat.
Dat is precies mijn stijl. -- C'est exactement mon style.
Dat is waardeloos. -- C'est nul.
Wat trek jij morgen aan? -- Qu'est-ce que to vas mettre demain?
Dat is niet mooi. -- Ce n'est pas joli.
Ik wil die schoenen passen. -- Je voudrais essayer ces chaussures.
Ik heb maat 42. -- Je fais du 42.
De trui is splinternieuw. -- Le pull est tout neuf.
; VWO1: Unité 6 Apprendre 9
niets -- ne... rien
Het topje -- le top
Lichtblauw -- bleu clair
niet gek -- pas mal
waar -- vrai
de legging -- le legging
lenen aan -- trêter à
geweldig -- formidable
de man -- l'homme
wensen -- désirer
het model -- le modèle
daar, daarginds -- là bas
de vlek -- la tache
de trui -- le pull
gisteren -- hier
de pen -- le stylo
de ramp -- la catastrophe
nieuw -- neuf, neuve
de oplossing -- la solution`;


const unite5 =`
; VWO1: Unité 5 Apprendre 1
de broer -- le frère
de opa -- le grand-père
de oma -- sa grand-mère
ke tante -- la tante
de oom -- l'oncle
de neef -- le cousin
de nicht -- la cousine
het neefje -- le neveu
het nichtje -- la nièce
met kind -- l'enfant
de zoon -- le fils
de dochter -- la fille
beste -- meilleur, meilleure
de vriendin -- l'amie
de vriending -- la copine
wat is -- qu'est ce que
; VWO1: Unité 5 Apprendre 2
de foto -- la photo
ik woon -- je vis
enig kind -- le fils uique
door -- par
de oorsprong, de afkomst -- l'origin
gescheiden -- divorcé
ik zie -- je vois
de keer -- la fois
hij woont -- il vit
de man, de echtgenoot -- le mari
zomer -- l'été
de grootouders -- les grands-parents
aan de oever van -- au bord de
het strand -- la page
zich amuseren -- s'amuser
heel wat -- plein de
allemaal -- tous
hetzelfde, dezelfde -- la même
wat is -- qu'est ce que
; VWO1: Unité 5 Apprendre 3
mijn vader -- mon père
mijn moeder -- ma mère
mijn ouders -- mes parents
jouw neef -- ton cousin
jouw nicht -- ta cousine
jouw nichten -- tes cousins
zijn grootvader -- son grand-père
zijn grootmoeder -- sa grand-mère
zijn grootouders -- zes grands-parents
haar neef -- son neveu
haar nicht -- sa nièce
haar neven -- ses enfants
een adres -- une adresse
mijn adres -- mon adresse
; VWO1: Unité 5 Apprendre 4
Zij is leuk. -- Elle est cool.
Er is al een bericht. -- Il y a déjà un message.
Ik heb een bericht ontvangen. -- J'ai reçu un message.
Ben je vrienden met Eloïse? -- Tu es ami avec Eloïse?
Zij stuurt berichten. -- Elle envoie des message.
Wij zijn vrienden. -- Nous sommes amis.
Ik weet het niet. -- Je ne sais pas.
Nathan is gek op Eloïse. -- Nathan est fou d'Eloïse.
Zij gaat met Victor -- Elle sort avec Victor.
; VWO1: Unité 5 Apprendre 5
vaak -- souvent
laten zien, tonen -- montrer
de pagina -- la page
het meisje -- la fille
klikken -- cliquer
de foto -- la photo
worden -- devenir
lelijk -- moche
we gaan naar buiten -- on sort
heel wat -- plein de
's avonds -- le soir
ontvangen -- reçu
elke dag -- tous les jours
gezegd -- dit
de nicht -- la cousine
gek -- fou, folle
zij gaat uit -- elle sort
zij antwoordt -- elle répond
afgelopen -- terminé
; VWO1: Unité 5 Apprendre 6
Ben je vrienden met Eloïse? -- Tu es ami avec Eloïse?
Léa is vrienden met een nieuw meisje. -- Léa est amie avec une nouvelle fille.
Wij zijn vrienden. -- Nous sommes amis.
ik ben -- je suis
jij bent -- tu es
hij is -- il est
zij is -- elle est
men is, wij zijn -- on est
wij zijn -- nous sommes
jullie zijn, u bent -- vous êtes
zij zijn -- ils sont
zij zijn elles sont
; VWO1: Unité 5 Apprendre 7
zij willen -- ils veulent
verhuizen -- déménager
zij gaan -- ils vont
de oom -- l'oncle
de tante -- la tante
de minuut -- la minute
ontmoeten -- rencontrer
de boer -- le frère
onverdraaglijk -- insupportable
irriteren, ergeren -- énerver
hij zet -- il met
de muziek -- la musique
zij zeggen -- ils disent
nooit -- ne ... jamais
; VWO1: Unité 5 Apprendre 8
Ik heb een probleem. -- J'ai un problème.
Ik heb een grote zus. -- J'ai une grande sœur.
Zij is 22. -- Elle a vingt-deux ans.
Mijn broertje irriteert me. -- Mon petit frère m'enerve.
Ik heb geen broers en geen zussen. -- Je n'ai pas de frères et pas de sœurs.
Wat doe je zondag? -- Qu'est-ce que tu fais dimanche?
Hij/zij is zaterdag jarig. -- Samedi, c'est son anniversaire.
Hoe oud wordt ze? -- Elle va avoir quel âge?
Ga jij naar je opa? -- Tu vas chez ton grand-père?
Houd jij van familie-feesten? -- Tu aimes les fêtes de familie?
; VWO1: Unité 5 Apprendre 9
het uitstapje -- la sortie
de famillie -- la famille
de ouders -- les parents
komen -- venir
alweer -- encore
het feest -- la fête
scheiden -- divorcer
volgende -- prochain, prochaine
de opa -- le grand-père
oraniseren -- organiser
uitnodigen -- inviter
het kind -- l'enfant
de kleinkinederen -- les petits-enfants
de neef -- le cousin
`;

const unite3 = `
; VWO1: Unité 4 Apprendre 1
het dier -- l'animal
de dieren -- les animaux
de hond -- le chien
de kat -- le chat
de wolf -- le loup
de spin -- l'araignée
de tijger -- le tigre
de slang -- le serpent
de vogel -- l'oiseau
de eend -- le canard
de wesp -- le guêpe
de olifant -- l'éléphant
de kwal -- la méduse
het paard -- le cheval
de koe -- la vache
het schaap -- le mouton
de muis -- la souris
de vis -- le poisson
de staart -- la queue
de poot -- la patte
de haren. de vacht -- les poils
aaien -- caresser
vliegen -- voler
zwemmen -- nager
prikken, steken -- piquer
gevaarlijk -- dangereux, dangereuse
wild -- sauvage
; VWO1: Unité 4 Apprendre 2
de boerderij -- la ferme
de ouders -- les parents
helpen -- aider
soms -- parfois
de kip -- la poule
de verrassing -- la surprise
wanneer -- quand
het lam -- l'agneau
geboren -- né
de nacht -- la nuit
zo -- si
mooi -- beau, belle
besturen, rijden -- conduire
de tractor -- le tracteur
nog niet -- ne ... pas encore
nog -- encore
mogen, het recht hebben -- avoir le droit
; VWO1: Unité 4 Apprendre 4
Hij is dol op spelen. -- Il adore jouer.
Dat is aardig. -- C'est gentil.
Waar is de kat? -- Où est le chat?
Ik weet het niet. -- Je ne sais pas.
Het spijt me. -- Je regrette.
Wat heb je? -- Qu'est-ce que tu as?
Hij heeft pijn aan zijn poot. -- Il a mal à la patte.
Hij kan niet lopen. -- Il ne peut pas marcher.
; VWO1: Unité 4 Apprendre 5
de kat -- le chat
altijd -- toujours
de vakantie -- les vacances
alleen, slechts -- seulement
het platteland -- la campagne
zien -- voir
nemen -- prendre
de koffie -- le café
de cola -- le coca
blijven -- rester
de mand -- le panier
laten -- laisser
open -- ouvert, ouverte
helemaal alleen -- tout seul
aardig, lief -- gentil, gentille
warm -- chaud, chaude
wacht -- attends
zoeken -- chercher
gezien -- vu
gewond -- blessé, blessée
hopen -- espérer
wat is -- qu'est ce que
pijn hebben -- avoir mal
hij kan -- il peut
lopen -- marcher
vinden -- trouver
meteen, dadelijk -- tout de suite
gelukkig -- heureusement
gebroken -- cassé, cassée
arm -- pauvre
buiten -- dehors
goed, lekker -- bon, bonne
; VWO1: Unité 4 Apprendre 6
hebben -- avoir
jij hebt het warm -- tu as chaud
hij heeft pijn aan zijn poot -- il a mal à la platte
ik heb -- j'ai
jij hebt -- tu as
hij heeft -- il a
zij heeft -- elle a
me heeft, wij hebben -- on a
wij hebben -- nous avons
jullie hebben, u heeft -- vous avez
zij hebben (m) -- ils ont
zij hebben (v) -- elles ont
; VWO1: Unité 4 Apprendre 7
de hond -- le chien
de leeftijd -- l'âge
jong -- jeune
de rat -- le rat
de zee -- la mer
zwemmen -- nager
een hekel hebben aan -- détester
zich indenken, zich voorstellen -- imaginer
dik -- gros, grosse
lang -- long, longue
de staart -- la queue
ophouden, stoppen -- arrêter
vals, gemeen -- méchant, méchante
de vogel -- l'oiseau
de buurvrouw -- la voisine
klimmen -- grimper
vangen -- attraper
normaal -- normal, normale
de natuur -- la nature
; VWO1: Unité 4 Apprendre 8
wil jij een hond hebben? -- tu veux avoir un chien?
ik houd niet van honden -- je n'aime pas les chiens
ik haat spinnen -- je déteste les araignées
ik ben bang voor paarden -- j'ai peur des chevaux
hoe is hij? -- il est comment?
hij ziet er lief uit -- il a l'air gentil
dat is normaal -- c'est normal
dat is afschuwelijk -- c'est horrible
hoe oud is hij? -- il a quel âge?
hij is twee jaar -- il a deux ans
; VWO1: Unité 4 Apprendre 9
het ongeluk -- l'accident
ik ga -- je vais
aankomen -- arriver
erg, ernstig -- grave
grijs -- gris, grise
het paard -- le cheval
de paarden -- les chevaux
de les -- la leçon
de verjaardag -- l'anniversaire
bang zijn -- avoir peur
omdat -- parce que
enorm -- énorme
het hoofd -- la tête
overdrijven -- exagérer
het circus -- la cirque
de kooi -- la cage
triest, zielig -- triste
de dierentuin -- le zoo
wild -- sauvage
behandelen -- traiter
denken -- penser
; VWO1: Unité 3 Apprendre 1
het rooster -- l'emploi du temps
de computer -- l'ordinateur
de leerling -- l'élève
de spreekbeurt -- l'exposé
de oefening -- l'exercice
het huiswerk -- les devoirs
Frans -- français
Engels -- anglais
wiskunde -- maths
het schrift -- le cahier
de pen -- le stylo
voorbereiden -- préparer
maken, doen -- faire
de hobby -- le hobby
tennis -- le tennis
de gitaar -- la guitare
het skateboarden -- le skateboard
maandag -- lundi
dinsdag -- mardi
woensdag -- mercredi
donderdag -- jeudi
vrijdag -- vendredi
zaterdag -- samedi
zondag -- dimanche
het uur -- l'heure
12 uur 's middags -- midi
; VWO1: Unité 3 Apprendre 2
voor ( van tijd) -- avant
kijken -- regarder
eten -- manger
opbellen -- téléphoner
de vriend -- l'ami
moeilijk -- difficile
sluiten -- fermer
blijven -- rester
tijdens, gedurende -- pendant
vragen -- demander
jij maakt, jij doet -- tu fais
de week -- la semaine
volgend(e) -- prochain, prochaine
tijd -- le temps
de overhoring -- l'interro
ziek -- malade
werken -- travailler
bewegen -- bouger
bijvoorbeeld -- par exemple
serieus -- sérieux, sérieuse
vergeet niet -- n'oublie pas
vergeten -- oublier
liever hebben, prefereren -- préférer
; VWO1: Unité 3 Apprendre 3
ik vraag -- je demande
jij vraagt -- tu demandes
hij vraagt -- il demande
zij vraagt -- elle demande
men vraagt, wij vragen -- on demandes
wij vragen -- nous demandons
jullie vragen, u vraagt -- vous demandez
zij vragen (m) -- ils demandent
zij vragen (v) -- elles demandent
; VWO1: Unité 3 Apprendre 4
Ik ben dol op zingen -- J'adore chjanter
Je danst supergoed -- Tu danses super bien
Ik heb gitaarles -- J'ai mon cours de guitare
Ik heb basketbaltraining -- J'ai mon entraînement de basketbaltraining
Ik kan niet dansen -- Je ne sais pas danser
ik ben dol op muziek -- J'adore la musique
Ik zing en ik dans -- Je chante et je danse
Ga je gang -- Vas-y
Ik heb een rol -- J'ai un rôle
Jij hebt de hoofdrol -- Tu as le rôle principal
; VWO1: Unité 3 Apprendre 5
de musical -- la comédie musicale
kijken -- regarder
de week -- la semaine
welk(e) -- quel, quelle
de dag -- le jour
woensdag -- emrcredi
dol zijn op -- adorer
dansen -- danser
zingen -- chanter
veel -- beaucoup
dus, dan -- alors
de les -- le cours
jammer -- dommage
de training -- l'entraînement
vragen -- demander
jij komt -- tu viens
onmogelijk -- impossible
misschien -- peut-être
jij wacht, jij verwacht -- tu attends
het antwoord -- la réponse
het bericht -- le message
de sms -- le texto
jij leest -- tu lis
wij zijn -- nous sommes
; VWO1: Unité 3 Apprendre 6, 1 t/m 20
nul -- zéro
één -- un
twee -- deux
drie -- trois
vier -- quatre
vijf -- cinq
zes -- six
zeven -- sept
acht -- huit
negen -- neuf
tien -- dix
elf -- onze
twaalf -- douze
dertien -- treize
veertien -- quatorze
vijftien -- quinze
zestien -- seize
zeventien -- dix-sept
achttien -- dix-huit
negentien -- dix-neuf
; VWO1: Unité 3 Apprendre 6, 20 en hoger
twintig -- vingt
éénentwintig - vingt et un
tweëntwintig -- vingt-deux
drieëentwintig -- vingt-trois
achtentwintig -- vingt-huit
negenentwintig -- vingt-neuf
dertig -- trente
éénendertig -- trente-et-un
drieendertig -- trente-trois
vijfendertig -- trente-cinq
veertig -- quarante
éénenveertig -- quarante et un
tweeëenveertig -- quarante-deux
drieenveertig -- quarante-trois
vierenveertig -- quarante-quatre
vijftig -- cinquante
tweeënvijftig -- cinquante-deux
drieenvijftig -- cinquante-trois
vierenvijftig -- cinquante-quatre
zestig -- soixante
éénenzestig -- soixante et un
tweeëenzestig -- soixante-deux
negenenzestig -- soixante-neuf
; VWO1: Unité 3 Apprendre 7
blijven zitten -- redoubler
engels -- l'anglais
waardeloos, slecht -- nul, nulle
sterk, goed -- fort, forte
de wiskunde -- les maths
het vak -- la matière
ik kan -- je peux
uitleggen -- expliquer
als -- si
jij wilt -- tu veux
te gek -- génial
maandag -- lundi
mogelijk -- possible
ziek -- malade
vrij -- libre
de tijd -- le temps
het huiswerk -- les devoirs
donderdag -- jeudi
geschiedenis -- l'histoire
werken -- travailler
afgesproken -- entendu
nu -- maintenant
; VWO1: Unité 3 Apprendre 8
In welke klas zit jij -- Tu es en quell classe
Ik zit in de vierde -- Je suis en 4ème
vierde (voluit) -- quatrième
Ik ben slecht in Engels -- Je suis nul en Anglais
Dat is mijn lievelingsvak -- C'est ma matière préférée
Hoe laat is het -- Quelle heure est-il
Het is 11 uur -- Il est 11 heures
Zaterdag om half acht -- Samedi à sept heures et demie
Ik en om vier uur klaar  -- Je termine à quatre heures
Ik drum -- Je joue de la batterie
Jij doet aan judo -- Tu fais du judo
Judo is mijn grootste hobby -- Le judo, c'est ma passion
; VWO1: Unité 3 Apprendre 9
tijdens -- pendant
de pauze -- la récré
klaar zijn, eindigen -- terminer
hoe laat -- à quelle heure
waarom -- purquoi
dinsdag -- mardi
de groep -- le groupe
spelen -- jouer
zondag -- dimanche
geven -- donner
het concert -- le concert
zwart -- noir, noire
sinds -- depuis
het jaar -- l'an
oefenen, beoefenen -- pratiquer
het voetbal -- le foot
het leven -- la vie
voorstellen -- proposer
de avond -- la soirée
zaterdag -- Samedi
het adres -- l'adresse
wonen -- habiter
`;

const unite2 = `
; VWO1: Unité 2 Apprendre 1
het flatgebouw -- l'immeuble
het appertement, de flat -- l'appartement
het huis -- la maison
de strat -- la rue
het plein -- la place
de boulevard -- le boulevard
de buitenwijken -- la banlieue
de buurt -- le quartier
de toren -- la tour
het station -- la gare
de metro -- le métro
de bus -- le bus
de fiets -- le vélo
de boot -- le bateau
de auto -- la voiture
de bushalte -- l'arrêt de bus
lopen -- aller à pied
gaan -- aller
; VWO1: Unité 2 Apprendre 2
wonen -- habiter
op -- sur
ons, onze -- notre
net als, zoals -- comme
we hebben -- on a
de woonkamer -- la salle de séjour
de keuken -- la cuisine
de badkamer -- la salle de bains
de slaapkamer -- la chambre
groot -- grand, grande
bij jullie -- chez vous
dus, dan -- alors
klein -- petit, petite
er is, er zijn -- il y a
de tuin -- le jardin
het water -- l'eau
de moeder -- la mère
zij heeft gemaakt -- elle a fait
leuk, mooi -- joli, jolie
houden van, het fijn vinden -- aimer
het uitzicht -- la voiture
de buren -- les voisins
ver -- loin
zetten -- mettre
heel hard -- très fort
; VWO1: Unité 2 Apprendre 3
De vriend van Nathan -- Le copain de Nathan
De vrienden van Nathan -- Les copains de Nathan
Het huis in de straat -- La maison dans la rue
De huizen in de straat -- Les maisons dans la rue
De auto op de snelweg -- L'auto sur l'autoroute
De auto's op de snelweg -- Les autos sur l'autoroute
Er is een tuin -- Il y a un jardin
Er zijn tuinen -- Il y a des jardins
Er is een huis -- Il y a une maisons
Er zijn huizen -- Il y a des maisons
; VWO1: Unité 2 Apprendre 4
Ik heb een afspraak -- J'ai rendez-vous
Ik neem de bus -- Je prends le bus
Waar is de halte -- Où est l'arrêt
Het is te ver om te lopen -- A pied, c'est trop loin
Je neemt een taxi -- Tu prends un taxi
Waar ga je naartoe -- Tu vas où
We gaan naar jouw huis -- On va chez toi
Ik ben te laat -- Je suis en retard
We gaan -- On y va
; VWO1: Unité 2 Apprendre 5
de metro -- le métro
tot later -- à plus
de afspraak -- le rendez-vous
het station -- la gare
wat is er -- qu'est-ce qu'il y a
de bus -- le bus
waar -- où
de halte -- l'arrêt
natuurlijk -- bien sûr
geen bus -- pas de bus
de fiets -- le vélo
lopend -- à pied
te -- trop
ver -- loin
er is, er zijn -- il y a
alles -- tout
het huis -- la maison
na, daarna -- après
klimmen, instapppen -- monter
naar jouw huis, bij jou thuis -- chez toi
vervolgens -- puis
op -- sur
het bed -- le lit
de trein -- le train
; VWO1: Unité 2 Apprendre 6
Daar is een jongen -- Voilà un garçon
Hij is aardig -- Il est sympa
Daar is een meisje -- Voilà un fille
Zij is aardig -- Elle est sympa
Daar is de boot -- Voilà le batea
Hij is groot -- Il est grand
Daar is het huis -- Voilà la maison
Zij is groot -- Elle est grande
Er staat een fiets in de tuin -- Il y a un vélo dans le jardin
Er is een grote keuken -- Il y a une grande cuisine
Er zijn drie slaapkamers -- Il y a trois chambres
; VWO1: Unité 2 Apprendre 7
welk, welke -- quel, quelle
de stad -- la ville
oké -- d'accord
de straat - la rue
de verdieping, de etage -- l'étage
de lift -- l'ascenseur
de trap -- l'escalier
moeilijk, zwaar, hard -- dur
de kamer, de slaapkamer -- la chambre
prachtig -- magnifique
groot - grand, grande
de plaats -- la place
zelfs -- même
de hoek -- le coin
het boek -- le livre
houden van, mooi vinden -- aimer
het balkon -- le balcon
kijk -- regarde
hoog -- haut, haute
hier -- ici
mooi, leuk -- joli, jolie
het raam -- la fenêtre
tussen -- entre
de boom -- l'arbre
leuk -- chouette
erg, heel -- très
rustig -- calme
; VWO1: Unité 2 Apprendre 8
Ik woon in de Gérardstraat 10 -- J'habite 10, rue Gérard
Op welke verdieping is het -- C'est à quel étage
Hier is mijn kamer -- Voilà ma chambre
Ik heb ook een balkon -- J'ai aussi un balcon
Ik heb uitzicht op het park -- J'ai vue sur le parc
We lopen naar huis -- On rentre à pied
Ik woon vlakbij -- J'habite tout près
Hoe is dat? -- Il est comment?
Hoeveel kamers hebben jullie -- Vous avez combien de pièces
Er is een grote tuin -- Il y a un grand jardin
; VWO1: Unité 2 Apprendre 9
vandaag -- aujourd'hui
samen -- ensemble
vlakbij -- tout près
ik bren door -- je passe
de vader -- le père
pretti gweekend -- bon week-end
de buurt -- le quartier
het winkelcentrum -- le centre commercial
de flat, het appertement -- l'appartement
jullie hebben -- vous avez
hoeveel -- combien
de kamer, het vertrek -- la pièce
de keuken -- la cuisine
de woonkamer -- la salle de séjour
eigen -- propre
wat een geluk -- quelle chance
klein -- petit, petite
de tuin -- le jardin
hij heeft -- il a
de auto -- la voiture
`;

const unite1 = `
; VWO1: Unité 1 Apprendre 1 & 2
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
; VWO1: Unité 1 Apprendre 4
hoe heet jij -- comment tu t'appelles
ik heet -- je m'appelle
zij heet  -- elle s'appelle
hoe heet hij -- comment il s'appelle
hij heet  -- il s'appelle
dit is Tim -- voilà Tim
; VWO1: Unité 1 Apprendre 5
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
; VWO1: Unité 1 Apprendre 7 & 8
(het gaat) goed -- ça va bien
dank je wel, dank u wel -- merci
tot ziens -- au revoir
hij ontmoet -- il rencontre
van -- de
hoi -- salut
hoe gaat het -- ça va?
goed -- bien
dag -- bonjour
inderdaad; zo is het -- c'est ça
iedereen -- tout le monde
mevrouw -- madame
welkom -- bienvenu
tevreden, blij -- content
al -- déjà
de leraar -- le professeur
zij zijn -- ils sont
ik heb -- j'ai
met -- avec
veel succes -- bonne chance
`;

const assignments = new Assignments(vwo2unite1 + unite6 + unite5 + unite3 + unite2 + unite1);

export default assignments;
