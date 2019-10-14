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
`;

const assignments = new Assignments(raw);

export default assignments;
