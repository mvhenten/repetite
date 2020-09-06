import Assignments from "../lib/assignments.js";

const words = `
; Wortschatz 2
aardig -- net
eerlijk -- ehrlich
gescheiden -- geschieden
getrouwd -- verheiratet
groot -- groß
 intelligent -- intelligent
jong -- jung
klein -- klein
mooi -- schön
mooi, knap -- hübsch
sportief -- sportlich
vriendelijk -- freundlich
heel erg -- sehr
niet nicht
twintig -- zwanzig
eenentwintig -- einundswanzig
dertig -- dreißig
veertig -- vierzig
vijftig -- fünfzig
zestig -- sechzig
zeventig -- siebzig
tachtig -- achting
negentig -- neunzig
honderd -- hundert
duizend -- sausend
een miljoen -- eind Million
heten -- heißen
komen -- kommen
wonen -- wohnen
zijn -- sein
; Wortschatz 2
uit -- aus
hoe -- wie
waar -- wo
waarvandaan -- wogen
wat -- was
wie -- wer
nul -- null
een -- eins
twee -- zwei
drie -- drei
vier -- vier
vijf -- fünf
zes -- sechs
zeven -- sieben
acht -- acht
negen -- neun
tien -- zehn
elf -- elf
twaalf -- zwölf
dertien -- dreizehn
veertien -- vierzehn
vijftien -- fünfzehn
zestien -- sechzehn
zeventien -- siebzehn
achttien -- achtzehn
negentien -- neunzehn
twintig -- zwanzig
; Wortschatz 1
de achternaam-- der Nachname
de Duitser-- der Deutsche
de naam-- der Name
de Nederlander-- der Niederländer
het adres-- die Adresse
de Duitse-- die Deutsche
het e-mailadres-- die E-Mail-Adresse
de Nederlandse-- die Niederländerin
de postcode-- die Postleitzahl
de straat-- die Straße
het telefoonnummer-- die Telefonnummer
het jaar-- das Jahr
Duitsland-- Deutschland
Nederland-- die Niederlande
Oostenrijk-- Österreich
Zwitserland-- die Schmeiz
heten-- heißen
komen-- kommen
wonen-- wohnen
zijn-- sein
oud-- alt
`
const assignments = new Assignments(words);

export default assignments;
