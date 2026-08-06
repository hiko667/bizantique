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
        <div className="w-100 h-100 d-flex flex-column p-3">
            <h1>Ekwipunek</h1>
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
        <div className="w-100 h-100 d-flex flex-column p-3">
            <h1>Broń Biała</h1>
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