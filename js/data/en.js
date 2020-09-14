import Assignments from "../lib/assignments.js";

const IrregularVerbs = `
; VWO2: Irregular Verbs 1
zijn/woorden -- to be, was/were, been
verslaan -- to beat, beat, beaten
worden -- to become, became, become
beginnen -- to begin, began, begun
wedden -- to bet, bet, bet
bijten -- to bite, bit, bitten
bloeden -- to bleed, bled, bled
blazen -- to blow, blew, blown
breken -- to break, broke, broken
brengen -- to bring, brought, brought
; VWO2: Irregular Verbs 1
bouwen -- to build, built, built
kopen -- to buy, brought, brought
vangen -- to catch, caught, caught
kiezen -- to choose, chose, chosen
komen -- to come, came, come
kosten -- to cost, cost, cost
snijden; knippen -- to cut, cut, cut
graven -- to dig, dug, dug
doen -- to do, did, done
tekenen; trekken -- to draw, drew, drawn
; VWO2: Irregular Verbs 3
drinken -- to drink, drank, drunk
eten -- to eat, ate, eaten
vallen -- to fall, fell, fallen
voelen -- to feel, felt, felt
vechten -- to fight, fought, fought
vinden -- to find, found, found
vliegen -- to fly, flew, flown
verbieden -- to forbid, forbade, forbidden
vergeten -- to forget, forgot, forgotten
krijgen;worden -- to get, got, got
geven -- to give, gave, given
gaan -- to go, went, gone
groeien; worden -- to grow, grew, grown
hebben -- to have, had, had
horen -- to hear, heard, heard
zich verbergen -- to hide, hid, hidden
`;

const ThemeFive = `
; Theme Five D speaking en writing
het eens zijn met -- agree with
boot -- boat
boekenkast -- bookcase
stapelbed -- bunkbed
tapijt -- carpet
bureau -- desk
vrijstaand huis -- detached house
niet leuk vinden -- dislike
boerderij -- farm
vloer -- floor
twee-onder-een-kapwonig -- semi-detched house
rijtjeshuis -- terraced house
netjes -- tidy
bovenste verdieping -- top floor
muur -- wall
geweldig -- wonderful
; Theme Five G listening
verschrikkelijk -- awful
kostschool -- boarding games
munt -- coin
griezelig -- creepy
ingang -- entrance
verwachten -- expect
volgen -- follow
lijmen -- glue
schoolhoofd -- headmaster
bibliotheek -- library
enorm(e) -- massive
stapel -- pile
sportterrein -- pitch
grap -- prank
toekomstige -- prospectieve
leerling -- pupil
rondleiding -- show around
naar binnen sluipen -- sneak into
warm -- toasty
handdoek -- towel
; Theme Five H reading
voor de deur -- on your doorstep
everzwijn -- boar
knus, gezellig -- cosy
hert -- deer
opknappen -- do up
dubbeldekkerbus -- double-decker bus
uitzonderlijk(e) -- extraordinary
gelukkig -- fortunately
beangstigend -- frightening
blokhut -- log cabin
lawaaierig(e) -- noisy
pauw -- peacock
dennenboom -- pine tree
ijsbeer -- polar bear
ronddwalen -- roam
brullen -- roar
eekhoorn -- squirrel
boomhut -- tree house
; Theme Five I speaking & wtiting
afwassen -- do the dishes
wedstrijd -- match
hardop -- out loud
herhaling -- repeat
; Theme Five A Listening
uitzenden -- air
toestaan -- allow
bordspel -- board game
line -- borrow
bijpraten -- catch up
beslissen -- decide
precies -- exactly
koelkast -- fridge
wen aan -- get used to
voorstellen -- imagine
uitvinden -- invent
ketel -- kettle
luisteraar -- listener
kijkcijfers -- ratings
delen -- share
ruiken -- smell
fornuis -- stove
worstelen -- struggle
technologie -- technology
typisch -- typical
; Theme Five B Theme Words
zolder -- attic
kelder -- basement
gebouw -- building
plafon -- ceiling
kussen -- cushion
beneden -- downstairs
oprit -- driveway
meubilair -- furniture
gazon -- lawn
buurt, wijk -- neighbourhood
(hoofd) kussen -- pillow
schuur (tje) -- shed
gootsteen -- sink
kraan -- tap
boven -- upstairs
kledingkast -- wardrobe
; Theme Five C Reading
immers -- after all
waarderen -- appreciate
schors -- bark
deken -- blanket
baksteen -- brick
bioscoop -- cinema
comfortabel -- comfortable
gemeenschap -- community
visser -- fisherman
(dieren) huid -- hide
jager -- hunter
ijs -- ice
bereiken -- reach
gebied -- region
sneeuw -- snow
vangen -- trap
rijk, welvaren -- wealthy
hout -- wood
`;


const ThemeFour = `
; Theme Four: G LISTENING
pijn doen -- ache
eeuwenoud(e) -- ancient
doedelzak -- bagpipe
adembenemend -- breathtaking
kanoën -- canoe
gevangennemen -- capture
kasteel -- castle
munteenheid -- currency
bestemming -- destination
vechten -- fight
held -- hero
wandelen, trekken -- hike
ruig -- rugged
bestuur, heerschappij -- rule
zeilen -- sail
oever -- shore
bezienswaardigheden bezoeken -- sightseeing
bezoeker -- visitor
; Theme Four: H READING
avontuur -- adventure
avonturier -- adventurer
poging -- attempt
dapper -- bravely
liefdadige organisatie -- charity
oversteken -- cross
gevaarlijk -- dangerous
onderzoek -- exploration
ontdekkingsreiziger -- explorer
interessant(e) -- interesting
reis, tocht -- journey
de voorjeur geven aan -- prefer
soort -- species
troep, rommel -- stuff
benodigdheden -- supplies
overleven -- survive
(volks)stam -- tribe
vulkaan -- volcano
; Theme Four: I SPEAKING & WRITING
platteland -- countryside
beschrijven -- describe
plat -- flat
gebeuren -- happen
heuvelachtig -- hilly
herkenningpunt -- landmark
landschap -- landscape
nergens -- nowhere
landschap -- scenery
omgeving -- surroundings
stad(je) -- town
; Theme Four: PROVERBS & SAYINGS
Je mag een gegeven paard niet in de bek kijken -- Don’t look a gift horse in the mouth
Als aan de grond genageld staan. -- Like a deer in headlights.
Informatie direct van de bron. -- Straight from the horse’s mouth.
Iets in de verkeerde volgorde doen. -- To put the cart before the horse.
; Vocabulary Four:  C. Reading
gebied -- area
rieren -- celebrate
figuur -- character 
kleurrijk -- colourful
kostuum -- costume
nieuwsgierig -- curious
schattig -- cute
ontwerpen -- design
jurk -- dress
modieus, populair -- fashionable
heel erg grappig -- hilarious 
enorm -- huge
binnen -- indoors
uitnodigen -- invite
voorbereiden -- prepare
deelnemen aan -- take part in
; Vocabulary Four: D. Speaking & Writing
aantrekkelijk -- attractive
wijd -- baggy
beugel -- braces
donker -- dark
sproeten -- freckles
vriendelijk -- friendly
bril -- glasses
prachtig -- gorgeous
eerlijk -- honest
trui met capuchon -- hooded sweatshirt
leren, van leer -- leather
geheugen -- memory
gek op het buitenleven -- outdoorsy
verlegen -- shy
steil -- straight 
zonnebril -- sunglasses
broek -- trousers 
geestig, gevat -- witty
; Second theme A: Listening (p33)
handvaardigheid -- arts and crafts 
atletiek -- athletics 
beschikbaar -- available 
bouwen -- build 
uitdaging -- challenge 
scheikunde -- chemistry 
beklimmen -- climb 
stripboek -- comic 
strijden tegen -- compete against 
gesprek -- conversation 
gek op -- crazy about 
ontwerp -- design 
tekenen -- draw 
leuk vinden -- enjoy 
schuld -- fault 
rondhangen -- hang out 
schaatsen -- ice skating 
onder de indruk -- impressed 
in plaats van -- instead of 
interesse hebben in -- be into 
inschrijven -- sign up 
superheld -- superhero 
de hond uitlaten -- walk the dog 
fluisteren -- whisper 
; Second theme B: Theme Words (p33)
tekenen (kunst) -- art 
opdracht -- assignment 
spieken -- cheat 
nablijven -- detention 
Nederlands -- Dutch 
examen -- exam 
oefening -- exercise 
zakken voor -- fail 
aardrijkskunde -- geography 
wiskunde -- maths 
slagen voor -- pass 
lichamelijke opvoeding -- physical education 
leren voor -- study for 
vak -- subject 
leraar, lerares -- teacher 
toets -- test 
; Second theme C: Reading
geweldig -- awesome 
kampioen -- champion 
zeker -- definitely 
ontwikkeling -- development 
energie -- energy 
middelbare school -- high school 
les -- lesson 
officieel -- official 
uitlaatklep -- outlet 
kans -- opportunity 
positief -- positive 
natuurkunde en scheikunde -- science 
several meerdere, verschillende
maatschappijleer -- social studies 
vrije tijd -- spare time 
lente -- spring 
lesrooster -- timetable 
afwisseling -- variety 
golf -- wave 
trefbal -- dogeball 
voetbal -- football 
Frans -- French 
geschiedenis -- history 
roman -- novel 
verhaal -- story 
; Second theme G: Listening
fiets -- bicycle 
afzeggen -- cancel 
jas -- coat 
gang -- corridor 
afzetten -- drop off 
verwachten -- expect 
erachter komen -- find out 
lekke band -- flat tyre 
vergeten -- forget 
opschieten -- hurry up 
lachen -- laugh 
preek -- lecture 
manieren -- manners 
netjes -- neatly 
lesuur -- period 
beleefd -- polite 
presentatie -- presentation 
opluchting -- relief 
regel -- rule 
schooltas -- school bag 
streng -- strict 
verkeersopstopping -- traffic jam 
helaas -- unfortunately 
; Second theme H: Reading
voordeel -- advantage 
aandacht -- attention 
concentreren -- concentrate 
afgeleid -- distracted 
onderwijs -- education 
uitblinken -- excel 
uitleggen -- explain 
excursie -- field trip 
aansluiten bij -- join 
niveau -- level 
eenzaam -- lonely 
geluk hebben -- be lucky 
meedoen -- participate 
pyjama -- pyjamas 
zelfstudie-uur -- study period 
begrijpen -- understand 
vrijwillig meedoen -- volunteer 
pauze -- break 
klaslokaal -- classroom 
mentor uur -- tutor hour 
twee keer -- twice 
; Second theme: proverbs & Sayings
van fouten kun je leren -- Failure is the stepping stone for success 
Geduld is een schone zaak -- Patience is a virtue 
Hoe meer je weet, hoe minder je gelooft -- The more one knows, the less one believes 
Met geschreven woord bereik je meer dan met fysieke kracht -- The pen is mightier than the sword 
Je weet niet wat je kunt tot dat je het probeert -- You never know what you can do until you try 
; Theme two Grammar: Ordinals (rangtelwoorden)
een -- one 
twee -- two 
drie -- three 
vier -- four 
vijf -- five 
zes -- six 
even -- seven 
acht -- eight 
negen -- nine 
tien -- ten 
twintig -- twenty 
eenentwintig -- twenty-one 
dertig -- thirty 
tweeëndertig -- thirty-two 
veertig -- forty 
tweeënveertig -- forty-two 
eerste -- first 
tweede -- second 
derde -- third 
vierde -- fourth 
vijfde -- fifth 
zesde -- sixth 
zevende -- seventh 
achtste -- eighth 
negende -- ninth 
tiende -- tenth 
twintigste -- twentieth 
éénentwintigste -- twenty-first 
tweeëndertigste -- thirty-second 
drieënveertigste -- forty-third
; Test Three: Subjects
italiaans -- Italian
frans -- French
grieks / latijn -- Greek / Latin
informatiekunde -- computer science
nederlands -- Dutch
duits -- German
tekenen -- drawing
geschiedenis -- History
handvaardigheid -- arts and crafts
lichamelijke opvoeding -- physical education
wiskunde -- Maths / Mathematics
biologie -- biology
filosofie -- philosophy
natuurkunde / scheikunde -- physics / chemistry
muziek -- music
aardrijkskunde -- Geography
; Test Three: Numbers
1 -- one
2 -- two
3 -- three
4 -- four
5 -- five
6 -- six
7 -- seven
8 -- eight
9 -- nine
10 -- ten
11 -- eleven
12 -- twelve
13 -- thirteen
14 -- fourteen
15 -- fifteen
16 -- sixteen
17 -- seventeen
18 -- eighteen
19 -- nineteen
20 -- twenty
21 -- twenty-one
22 -- twenty-two
23 -- twenty-three
24 -- twenty-four
25 -- twenty-five
26 -- twenty-six
27 -- twenty-seven
28 -- twenty-eight
29 -- twenty-nine
30 -- thirty
40 -- forty
50 -- fifty
60 -- sixty
70 -- seventy
80 -- eighty
90 -- ninety
100 -- one hundred
122 -- one hundred and twenty-two
101 -- one hundred and one
154 -- one hundred and fifty-four
166 -- one hundred and sixty-six
287 -- two hundred and eighty-seven
399 -- three hundred and ninety-nine
423 -- four hundred and twenty-three
; Test Three: Days of the week
maandag -- Monday
dinsdag -- Tuesday
woensdag -- Wednesday
donderdag -- Thursday
vrijdag -- Friday
zaterdag -- Saturday
zondag -- Sunday
; Vocabulary Four: A. Listening
wazig -- blurry
bevestigen -- confirm
gekruld -- curly
nuchter -- down-to-earth
uitwisseling -- exchange
opgewonden -- excited
blond -- fair
vlucht -- flight
overweg kunnen -- get along
gastgezin -- host family
gemeenschappelijk -- in common
ontmoeten -- meet
passagier -- passenger
gevoel voor humor -- sense of humour
stekelig -- spiky
sportief -- sporty
; Vocabulary Four: B. Theme Words
enkel -- ankle
rug -- back
hersenen -- brain
chest -- bors
kin -- chin
elleboog -- elbow
kaak -- jaw
knie -- knee
spieren -- muscles
schouder shoulder
huid -- skin
maag -- stomach
keel -- throat
teen -- toe
tand -- tooth
pols -- wrist
`;

const assignments = new Assignments(IrregularVerbs + ThemeFive + ThemeFour);

export default assignments;
