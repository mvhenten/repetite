import Assignments from "../lib/assignments.js";

const Stone123 = `
; Stone 1: Inviting people
Ik vroeg me af of je zin hebt om vrijdag mee te gaan naar de drive-in bioscoop -- I was wondering if you'd like to go to the drive-in cinema on Friday
Zou je volgende week met mij naar het schoolgala willen gaan -- Would you like to join me at the prom next week
Ja, dat is goed -- Yes, I would
Nee, dat wil ik niet -- No, I wouldn't
Heb je zin om na school samen te gaan winkelen -- Do you fancy going shopping together after school
Heb je interesse om te lasergamen vandaag -- Would you be interested in having a laser-tag match today
Ik zou graag met je mee willen naar het pianoconcert dit weekend -- I'd like to accompany you to the piano recital this weekend
We nemen je heel graag mee naar het filmfestival in het park morgen -- We'd be delighted to take you to the film festival in the park tomorrow
Dank je. Ik zou heel graag willen komen -- Thank you. I'd love to come
Goed idee! Wij wonen het festival graag bij -- Great idea! we'd like to attend the festival
Sorry, maar ik kan niet -- I'm sorry, but I can't
Helaas, ik ben niet in staat te komen -- Unfortunately, I'm unable to make it
; Stone 2: Asking for and giving permission
Mag ik wat virenden uitnodigen -- Can I invite some friends over
Kunnen we deze zaal huren voor een afstudeerfeestje -- Could we rent this venue for a graduation party
Mag ik het hoofdgerecht bestellen alstublieft -- Can I order the main course, please?
Heb ik toestemming om volgende week naar het school gala te gaan -- Am I allowed to attend the school dance next week
Is het goed als wij zondag een slaapfeestje geven -- Would it be all right if we throw a slumber party on Friday
Ja dat is prima -- Yes that's fine
Natuurlijk. Dat is goed -- Of course. That'd be all right
Ik vroeg me af of ik je fiets vanavond mag lenen -- I was wondering if I could use your bike tonight
Ik hoopte dat je me dit weekend naar het concert zou laten gaan -- I was hoping you would let me attend the concert this weekend
Mag ik een evenement organiseren op deze locatie -- May I organise an event at this location
Is het toegestaan om hier foto's te maken -- Is it permitted to take photographs here
Sorry, dat is niet mogelijk -- I'm sorry, that's not possible
Nee, dat mag je niet. Je hebt de volgende dag een toets -- No, you can't. you have a test the next day
Ga je gang. Dat is prima -- Go ahead. That would be fine
Natuurlijk mag je dat. Geen probleem -- Of course you can. No problem
; Stone 3: Making plans and reservations
Wat ga je vanavond doen -- What are you going to do tonight
Wat zijn je plannen voor morgen -- What are your plans for tomorrow
Waarom gaan we niet samen iets doen -- Why don't we hang out together
Wil je naar dit feestje to -- Do you want to go to this party
Ik zou graag willen reserveren voor donderdag avond -- I'd like to make a reservation for Thursday evening
Ik bel om een tafel voor twee personen te reserveren -- I'm calling to book a table for two
Kan ik kaarten reserveren voor de hogesnelheidstrein naar Parijs -- Could I reserve tickets for the high-speed train to Paris
Is het nog steeds mogelijk om twee kaartjes te kopen met vroegboekkorting -- Is it still possible to purchase tickets with early-bird discount
Je moet de kaartjes om half acht ophalen -- You need to pick up the tickets at half past seven
Je moet een half uur voordat de film begint aanwezig zijn -- You ought to be there half an hour before the film starts
De vertoning begint om vijf uur, dus zullen we de bus van vier uur nemen -- The screening begins at five o'clock, so shall we get the four o'clock bus
De volleybalwedstrijd begint om half zeven, dus ik heb om drie uur met mijn vrienden afgesproken -- The volleyball match starts at half past six, so I'm meeting my friends at 3pm
De signeersessie is om 16.30 uur, dus we moeten om half vier vertrekken -- The book signing is at 4.30pm, so we should leave at half past three
Ik ga naar een comedy-improvisatieshow. Het wordt hilarisch -- I'm going to see an improv comedy show. It will be hilarious
We gaan meedoen aan een recordpoging. het wordt de beste nacht ooit -- We're going to participate in a record attempt. It'll be the greatest night ever
We kunnen de metro naar huis nemen. Hij vertrekt om half twaalf -- We could take the metro home. It leaves at half past eleven
We moeten de bus nemen naar de bioscoop. Hij doet er maar vijftien minuten over -- We have to catch the bus to the cinema . It only takes fifteen minutes
`;

const raw = `
; Family
tante -- aunt
vriendje -- boyfriend
nicht, neef (kind van tante) -- cousin
vriendinnetje -- girlfriend
kleindochter -- granddaughter
kleinzoon -- grandson
halfbroer -- half brother
man, echtgenoot -- husband
neef -- nephew
nicht -- niece
broers en zussen -- siblings
stiefvader -- stepfather
stiefmoeder -- stepmother
tweeling -- twins
oom -- uncle
vrouw, echtgenoote -- wife
; Dates and things
adres -- address
verjaardag -- birthday
geboren -- born
Brits -- British
voornaam -- first name
mobiele telfoonnummer -- mobile phone number
nationaliteit -- nationality
persoonlijke gegevens -- personal information
postcode -- postcode
; On holiday
in het buitenland -- abroad
verbazingwekkend -- amazing
saai -- boring
ravijn -- canyon
vies -- dirty
enorm -- enormous
duur -- expensive
veerboot -- ferry boat
vuurwerk -- fireworks
tuin -- garden
feestdag -- holiday
uitverkocht -- sold out
tijd doorbrengen -- spend time
vergieten / morsen -- spill
; Sayings
Heel goed bevriend zijn -- As thick as thieves
Het hemd is nader dan de rok -- Blood is thicker than water
Behandel anderen zoals je door hen behandeld wilt worden -- Love your neighbour as yourself
Goede vrienden zijn er altijd voor je -- The road to a friend’s house is never long
Je kunt je vrienden uitzoeken maar je familie niet -- You can choose your friends, but you can’t choose your family
; Lesson 01
geven om -- care about
dagelijks -- daily
anders -- different
moeite -- effort
in verlegenheid brengen -- embarrass
geheel, gehele -- hole
opwinding -- excitement
ervaring -- experience
veranda -- front porch
volhouden -- keep up
ochtend -- morning
familielid -- relative
belonen -- reward
uitslapen -- sleep in
besparen -- spare
zwembroek -- swim trunks
tiener -- teenager
sensatie -- thrill
zwaaien -- wave
dragen (van kleding) -- wear
bekend(e) -- well-known
actrice -- actress
vriend(in) -- friend
anderen -- others
ouders -- parents
restaurant -- restaurant
universiteit -- university
; Days and Months
maandag -- Monday
dinsdag -- Tuesday
woensdag -- Wednesday
donderdag --  Thursday
vrijdag  -- Friday
zaterdag  -- Saturday
zondag -- Sunday
january -- January
februari -- February
maart -- March
april -- April
mai -- May
juni -- June
juli -- July
augustus -- August
september -- September
oktober -- October
november -- November
december -- December
; Numbers and Colours
een -- one
twee -- two
drie -- three
vier -- four
vijf -- five
zes -- six
seven -- zeven
acht -- eight
negen -- nine
tien -- ten
elf -- eleven
twaalf -- twelve
dertien -- thirteen
viertien -- fourteen
vijftien -- fifteen
zestien -- sixteen
zeventien -- seventeen
achttien -- eighteen
negentien -- nineteen
wit -- white
geel -- yellow
blauw -- blue
zwart -- black
grijs -- grey
roze -- pink
paars -- purple
oranje -- orange
groen -- green
; School
NET -- Dutch
WI -- mathematics
AK --geography
GES -- history
L.O. -- physical education
BNW -- basic science
EF -- English Fast Lane
FAT -- French
; For Sale
boekwinkel -- bookshop
sportwinkel -- sports shop
kleren -- clothes
boeken -- books
landkaart -- map
tijdschrift -- magazine
verjaardagskaart -- birthday card
markt -- market
supermarkt -- supermarket
drogist -- chemist
zeep -- soap
shampoo -- shampoo
hoest sap -- cough medicine
warenhuis -- department store
riem -- belt
camera -- camera
zonnebril -- sunglasses
trui -- sweater
paraplu -- umbrella
portemonnee -- wallet
geld -- money
fiets -- bicycle
roltrap -- escalator
; Breakfast, Lunch and Diner
wortels -- carrots
kaas -- cheese
vis -- fish
brood -- bread
taart -- cake
vlees -- meat
tomaten -- tomatoes
appels -- apples
aardappels -- potatoes
eieren -- eggs
ijs -- ice cream
limonade -- lemonade
salade -- salad
druiven -- grapes
noedels -- pasta
kip -- chicken
joghurt -- yogurt
koffie -- coffee
bananen -- bananas
chocolade -- chocolate
melk -- milk
paddenstoelen -- mushrooms
koekjes -- biscuit
tee -- tea
uien -- onions
olie -- oil
koekenpan -- baking pan
toetje -- dessert
borden -- plates
bestek -- cutlery
tafel -- table`;

const assignments = new Assignments(Stone123+raw);

export default assignments;
