import Assignments from "../lib/assignments.js";

const raw = `
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
; A listenig
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
; B theme words
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
; C reading
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
; D speaking & writing
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
`;

const assignments = new Assignments(raw);

export default assignments;
