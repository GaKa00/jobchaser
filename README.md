Allmänt om ramverket React: Hur/Varför uppkom det? Vad är dess kännetecken?
        React kännetecknas av dess Komponentbaserade struktur samt  virtuella DOM


Vad är JSX?
        JSX är en JavaScript-förlängning som gör det möjligt att skriva HTML-liknande kod i JavaScript.

Vad är en komponent i React?
        En komponent är en essentiell byggsten i react, man kan säga att det i de flesta fall är en del utav applikationen (ex navbar, x-page osv.)


Vad är props i React?
        props är data som skickas till en komponent från dess moderkomponent.

Vad menas med one-way-dataflow?
         Dataflödet går i en riktning, dvs nedåt från roten, vidare ned i komponentträdet.


Hur kan man använda sig av conditionell rendering i React?


Vad är state i React?
        State är intern data som lagras  och kan uppdateras.

Vad är det för skillnad mellan state och props?
        Props är extern data som skickas in i en komponent, state är interna data som 
        defineras i komponenten.

Vad menas med en kontrollerad komponent i React?

Vad är en callback handler?

Vad menas med "lifting state up"?

Vad är syftet med useEffect-hook i React?
        Useeffect används till att skapa sideffekter (dvs kod som körs, oberoende av komponenten (och ej  behöver uppdateras i likadan takt.)), t.ex. datahämtning

Vad är syftet kring den s.k dependency-arrayen i useEffect?
        Den bestämmer när useEffect ska köras igen.


Vad menas med Reacts ekosystem? 
        Det är samlingen av bibliotek och verktyg för React-utveckling.

Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form

Vad är fördelen med att använda React Hook Form?
        React hook form minskar boilerplate-kod och förenklar validering vid forms.

Vad är syftet med useContext? Vilket problem med props löser den?
        Syftet med useContext är att dela data mellan komponenter utan att använda props. Den löser problemrt propdrilling, vilket är nnär man skickar props ned till för många komponenter i komponent trädet.

Vilka fördelar finns det att använda Tailwind / nackdelar? 
        Tailwind ger snabb och responsiv styling.Dock pga dess mer komplexa syntax kan den vara svårare att underhålla.

Vad är Redux Toolkit? 

När, i vilka situationer vill man använda Redux Toolkit?

Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)