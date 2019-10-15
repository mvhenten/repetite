import Assignments from "../lib/assignments.js";

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

const assignments = new Assignments(raw);

export default assignments;
