Allmänt om ramverket React: Hur/Varför uppkom det? Vad är dess kännetecken?

----

Vad är JSX?
JSX är en kombination av html och JS, vilket tillåter en att skriva html kod vilket renderas med js funktionalitet.

Vad är en komponent i React?
Komponenter är oberoende "snippets" av en hemsida som skrivs i jsx. Dvs att de kombinerar js och html kod, 
och returnerar en bit av en komplett html sida med redanskriven funktionalitet,.


Vad är props i React?
Props i react är likt objekt variabler i vanilla. 
 Man kan passera props  ned i en komponent, vilket innehåller olika data eller funktioner för att tillåter dessa props att 
 hanteras inom Komponentens egen funktionalitet för att dynamiskt rendera ut data. Ex. passera en prop av user, som hanteras av en 
 login komponent, vilket rendarerar korrekt data baserat på vad user betyder.

Vad menas med one-way-dataflow?
Att data endast passerar nedåt ireact, från app komponenten ned til dess children, sedan vidare till dess children osv.

Hur kan man använda sig av conditionell rendering i React?
Genom att använda sig av vissa conditionals tex om x is true visa det här, eller om ett state är  y, visa  det här.
Conditional rendereing låtet oss skapa dynamiska interfaces baserat på de konditioner vi utövar på komponenten.

Vad är state i React?
State är en determinator för en  react komponent, vilket kan kontrollera komponentens funktionalitet baserat va vad dess state är.
Tex om en komponent ska rendera ut ens användarnamn, kan detta diffrentiera ifall användarnamnet settas till någonting nytt,
 eller ifall det använder sig av dess default värde.

Vad är det för skillnad mellan state och props?

Vad menas med en kontrollerad komponent i React?
en kontrollerad komponent äör en där dess data hanteras  i react state istället för att renderas till DOM
exempel är en form, där inputtad data settas i en state  ((tex via onchange)), vilket sedan kan föras vidare till andra komponenter.

Vad är en callback handler?
En Callback handler är en funktion som passeras ned till en komponent som en prop.
Denna funktion kallas sedan på med  valida parametrar i komponenten för att köra funktionen med korrekt data.

Vad menas med "lifting state up"?
Man lyfter upp ett state till dess närmaste gemensamma komponent.
Ex om både en userverification och en shoppingcart behöver en state at säg bankuppgifter.  kan denna state flyttas upp till en gemensam komponent
 av säg namnet checkout, för att tillåda båda child komponenter att användasig av detta state.

Vad är syftet med useEffect-hook i React?
use effect förklarar för react at någonting (detsom finns i useeffeft)
skall hanteras efter rendering. tldr: async/await.

Vad är syftet kring den s.k dependency-arrayen i useEffect?
att minnas state eller variabler som är useeffectens dependency. Denna useeffect uppdateras alltså varje gång som denna array uppdateras.

Vad menas med Reacts ekosystem? 

Reacts Ekosystem menas med de olika bibliotek och verktyg som adderar till reacts funktionalitet. ex hook form och router.


Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form

React Window
React Query
Redux


Vad är fördelen med att använda React Hook Form?

Den simplifierar  form submits, coh gör det enklare att hämta data


Vad är syftet med useContext? Vilket problem med props löser den?

useContext är ett bra alternativ till prop-drilling, dvs att slippa kalla ned samma props i grandchildren och lä'ngre led av child komponenter.

useContext tillåter en istället att flytta dessa props i form av en context, vilket förs via en provider, ned till den önskade komponenten.
Vilka fördelar finns det att använda Tailwind / nackdelar? 
Tailwind abstraherar och påskyndar css processer, dock så  kan det göra kod mer oläsbar, samt har den vissa begränsningar.