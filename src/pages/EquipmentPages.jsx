import { Tabs, Tab, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";
import React from 'react';
import Table from 'react-bootstrap/Table';
import data from "../data/equipment.json";

const renderItemTable = (items) => {
    if (!items || items.length === 0) {
        return <p>Brak danych do wyświetlenia.</p>;
    }

    const columns = Object.keys(items[0]);

    return (
        <Table striped bordered hover responsive variant="dark">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col) => (
                            <td key={col}>{String(row[col])}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const equipmentTab = () => {
    return (
        <div className="w-100 h-100 d-flex flex-column p-3 gap-3">
            <h1>Ekwipunek</h1>
            <h2>Przedmioty Magimatematyczne</h2>
            <p>Układy Magimatematyczne są krasnoludzką odpowiedzią na Thanijskie mechanizmy zębatkowe i silniki parowe. Przypominające metalową, pokrytą runami płytkę Układy są w rzeczywistości wysoce skomplikowanymi systemami bramek logicznych, przerzutników i dekoderów. Służą do przetwarzania energii uzyskiwanej z zewnętrznych źródeł i logicznego operowania nią. Pozwalają również na rzucanie zaklęć zbyt prezycyjnych, by mógł je rzucić pozbawiony wspomagania czarodziej lub kapłan. Wykorzystywane są we wszystkim: od zabezpieczonych drzwi, przez systemy komunikacji na odległość aż po wysoce zaawansowane systemy przewidywania ruchu. Warto zaważyć, że w celu uzyskania faktycznej inteligencji Układ musi zostać Sprzęgnięty z żywym ludzkim umysłem - stąd wielu operatorów montuje sobie w głowie specjalne implanty, Gwoździe, pozwalające na korzystanie z Magimatematycznych interfejsów</p>
            <h2>Sulfuromancja</h2>
            <p>Głęboko pod ulicami Bizantique znajduje się skompana w wiecznym mroku jaskinia znana jako Morze Siarki. Swoją nazwę zawdzięcza szerokiemu na milę jezioru, wypełnionym roztworem kwasu siarkowego o niezwykle żrącej woni i zgubnych dla zdrowia właściwościach. Znaleźli się jednak tacy, którzy uznali, że substancję tą można wykorzystać. Od Morza Siarki do ukrytych w podziemiach fabryk biegną ołowiane rury, pompujące hektolitry Sulfu. Surowa ciecz jest następnie przekształcana w koncentrat, który pod odpowiednią stymulacją zaczyna wydzielać energię podobną do magii. Mieszkańcy podziemia wykorzystują Sulfomację (lub Sulftech) do konstruowania wszelkiego rodzaju urządzeń mechanicznych zdolnych naśladować Magimatematykę Koalicji. </p>
            {renderItemTable(data.equipment)}
        </div>
    );
};

const gunsTab = () => {
    return (
        <div className="w-100 h-100 d-flex flex-column p-3 overflow-auto">
            <h1 className="mb-3">Broń Palna</h1>
            <h2 className="mb-3">Historia Broni Palnej</h2>
            <p className="mb-3">Za powstanie współcześnie rozumianej broni palnej na Ignis odpowiadają dwa kluczowe wydarzenia. Pierwszym z nich było uwolnienie Umęczonego Sylvana Lara’ie przez krzyk Anioła z Nikei w roku 533 a.n., który z kolei w snach zainspirował nieznanego inżyniera do stworzenia magazynka samopowtarzalnego i opartych na spłonce pocisków</p>
            <p className="mb-3">Zgodnie ze stanem na rok 600 a.n. pistolety, karabiny samopowtarzalne, karabiny półautomatyczne jak i karabiny maszynowe używane są zarówno przez siły Koalicji, Legionów Heretyckich, jak i Rubii. Choć miejsca i paradygmaty produkcji mogą się od siebie różnić, większość broni palnej sprowadza się do tej samej zasady działania: proch, bądź inna łatwopalna substancja wytwarza gaz, który następnie wypycha pocisk w kierunku ujścia lufy.</p>
            <p className="mb-3">Największym centrum produkcji są Wyspy Szare, gdzie kontrolowane przez Krasnoludzkich Baronów Bankowych fabryki wypluwają dziennie tysiące nowych karabinów, pistoletów i pocisków. </p>
            <h2 className="mb-3">Cechy wspólne broni palnej</h2>
            <p className="mb-3">Broń Palna jest specjalnym rodzajem Broni Dystansowej. Każda sztuka Broni Palnej posiada następujące właściwości:</p>
            <ListGroup className="mb-5">
                <ListGroupItem><b>Głośny</b>. Po wykonaniu ataku Bronią Palną twoja pozycja natychmiast zostaje zdradzona, niezależnie od tego, czy byłeś wcześniej ukryty, czy nie</ListGroupItem>
                <ListGroupItem><b>Zacięcie(X)</b>. Wykonując test ataku Bronią Palną, jeżeli wyrzucisz na kości k20 wynik niższy lub równy X broń zacina się i staje się bezużyteczna, aż do momentu, gdy ty lub inna istota wykona udany test Inteligencji o ST 10+X, by ją naprawić.</ListGroupItem>
                <ListGroupItem>
                    <Accordion>
                        <Accordion.Header><b>Precyzja(X)</b>. Wykonując test ataku Bronią Palną, jeżeli uzyskasz w tym teście wynik równy lub wyższy od X (uwzględniając modyfikatory) możesz poinformować Mistrza Gry o trafieniu w jedną z następujących części ciała</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroupItem><b>Głowa</b>. Obrażenia ataku zostają podwojone (po wykonaniu rzutu na obrażenia)</ListGroupItem>
                                <ListGroupItem><b>Nogi</b>. Jeżeli cel jest istotą Średnią lub mniejszą jej prędkość spada o połowę. </ListGroupItem>
                                <ListGroupItem><b>Ręce</b>. Jeżeli cel jest istotą Średnią lub mniejszą upuszcza ona jeden trzymany w rękach przedmiot nie będący tarczą</ListGroupItem>
                                <ListGroupItem><b>Tarcza</b>. Jeżeli cel jest istotą Średnią lub mniejszą i trzyma tarczę zostaje ona wytrącona z rąk lub zniszczona, a istota traci wynikający z tarczy bonus do KP</ListGroupItem>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion>
                </ListGroupItem>
                <ListGroupItem><b>Magazynek(X)</b>. Broń posiada X pocisków w magazynku. Po wyczerpaniu magazynku musisz poświęcić akcję na przeładowanie</ListGroupItem>            
            </ListGroup>
            <h2 className="mb-3">Inne Cechy Broni Palnej</h2>
            <p>Broń palna może posiadać następujące właściwości</p>
            <ListGroup className="mb-3">
                <ListGroupItem><b>Ogień Maszynowy</b>. Zamiast wykonywać normalny atak, poświęcasz akcję na ostrzelanie obszaru o wymiarach 3 x 3 x 3 metry. Istoty znajdujące się w tym obszarze zmuszone są wykona rzut obronny na Zręczność o ST równym 10 + twoja Zręczność. W przypadku porażki każda z nich otrzymuje normalne obrażenia broni. Ta akcja zużywa 10 sztuk amunicji</ListGroupItem>
                <ListGroupItem><b>Ciężka Broń Palna</b>. Istoty o Sile poniżej 15 oddając strzał z tej broni nie mogą się w tej samej turze poruszyć. Istota te nie może też nosić tej broni w ekwipunku</ListGroupItem>
                <ListGroupItem><b>Strzelba</b>. Broń jest strzelbą. Obrażenia strzału otrzymują wszystkie istoty w stożku o długości 3 metrów. Możesz użyć Siły zamiast Zręczności by użyć tej broni. </ListGroupItem>
            </ListGroup>
            <h2 className="mb-3">Przykładowa Broń Palna</h2>
            {renderItemTable(data.guns)}
        </div>
    );
};

const weaponsTab = () => {
    return (
        <div className="w-100 h-100 d-flex flex-column p-3 gap-3">
            <h1>Broń Biała</h1>
            <p>Prócz powszechnie występującej broni białej, od czasu wybuchu Wojen Wiary żołnierze Koalicji korzystają z dwóch specyficznych rodzajów ostrzy.</p>
            <h2>Ostrza Lux</h2>
            <p>Ostrza Lux na pozór wyglądają jak ułamane rękojeści mieczy, toporów i włóczni. Każde z nich posiada jednak runę aktywacyjną, której naciśnięcie powoduje uruchomienie się klingi, przypominającej słoneczny promień. Ostrza Lux kute są w zamku Sol Invicta, dawnej siedzibie Zakonu Wygasłego Słońca. Tam, pod gigantycznymi soczewkami skupiającymi światło słońca w promień czystej energii metal przetapiany jest w rękojeści magicznie wzmocnione mocą Lux, Starej Bogini i patronki światła. Broń posiadająca cechę Ostrze Lux zadaje obrażenia od światłości zamiast oryginalnego typu. Jej ostrze może również zostać włączone i wyłączone, a sama broń nie może posiadać cechy Ciężka</p>
            <h2>Ostrza Rozrywajace</h2>
            <p>Kolokwialnie zwane Rozrywakami są o wiele powszechniejsze od Ostrzy Lux. Ich ząbkowane klingi pokryte są specjalnym metalem wprawiającym całą broń w mikro-drgania w kontakcie z żelazem we krwi celu. Broń posiadająca cechę Ostrze Rozrywające. Za każdym razem, gdy trafiasz istotę posiadającą krew zyskujesz bonus +1 do obrażeń następnego ataku. Bonus kumuluje się aż do +3 i znika, jeżeli nie wykonasz ataku przez całą rundę.</p>
            {renderItemTable(data.weapons)}
        </div>
    );
};

const armourTab = () => {
    return (
        <div className="w-100 h-100 d-flex flex-column p-3">
            <h1>Pancerze</h1>
            {renderItemTable(data.armour)}
        </div>
    );
};

export default function EquipmentPage() {
    return (
        <div className="w-100 h-100" style={{overflowX : "hidden"}}>
            <Tabs defaultActiveKey="equipment"
                fill
                className="mb-3 text-white">
                <Tab eventKey="equipment" title="Ekwipunek" tabClassName="text-warning">
                    {equipmentTab()}
                </Tab>
                <Tab eventKey="guns" title="Broń Palna" tabClassName="text-warning">
                    {gunsTab()}
                </Tab>
                <Tab eventKey="weapons" title="Broń Biała" tabClassName="text-warning">
                    {weaponsTab()}
                </Tab>
                <Tab eventKey="armour" title="Pancerze" tabClassName="text-warning">
                    {armourTab()}
                </Tab>
            </Tabs>
        </div>
    );
}