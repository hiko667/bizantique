import { Accordion, ListGroup, ListGroupItem, Table } from "react-bootstrap"
import mutationData from "../data/mutations.json"
import gaistData from "../data/gaist.json"


export default function RulesPage(){


    return(
        <div className="w-100 h-100 p-3 gap-3 overflow-auto">
            <p>Uczestnicząc w sesjach Dungeons and Dragons w uniwersum Ignis Mistrz Gry może zadeklarować, żę będzie korzystał z niektórych z dodatkowych zasad związanych z tym kosmologią świata</p>
            <Accordion defaultActiveKey="a">
                <Accordion.Item eventKey="gaist">
                    <Accordion.Header>Gaist i Spaczenie</Accordion.Header>
                    <Accordion.Body className="bg-dark gap-3 text-light">
                        <p>W sercu każdej świadomej istoty biją się ze sobą dwie energie: gaist i spaczenie. Gaist jest Duchem Bohaterów, mistyczną energią gromadzącą się wokół wszystkich tych, którzy czynią heroiczne czyny. Spaczenie to moralne zepsucie, bród duszy objawiający się mutacjami ciała. Mechanicznie reprezentowane są one poprzez Punkty Ducha. Gdy w tekście wspomniane jest o “Zyskaniu punktów gaist” dodajesz tą wartość do Punktów Ducha. Gdy wspomniane jest o “Zyskaniu punktów zepsucia” odejmujesz tą wartość od Punktów Ducha. Punkty Ducha mogą być ujemne, tworzą z nich spektrum ujemnego zepsucia i dodatniego gaist. Co pięć punktów w każdą stronę zyskujesz Mutację. Usunięcie Mutacji możliwe jest jedynie poprzez zaklęcie Większe Oczyszczenie (Greater Restoration). Mutacje otrzymujesz losowo, rzucając kością k20 i sprawdzając wynik w tabeli Mutacje Zepsucia lub Mutacje Gaist (odpowiednio)</p>
                        <p><i>Przykład, osiągając -5, -10 lub -15 Punktów Ducha rzucasz kością k20 by otrzymać mutację z tabeli Zepsucia. Osiągając 5, 10 lub 15 rzucasz kością k20 i sprawdzasz mutację w tabeli Gaist.</i></p>
                        <p>Kiedy zyskujesz punkty? Gdy popełnisz szczególnie heroiczny czyn (przewodzenie grupie podwładnych, narażanie się na śmierć by chronić przyjaciół, zabicie potężnego wroga) lub haniebny czyn (zabicie bezbronnego, osłabionego lub chorego wroga, łamanie słowa honoru, złamanie tradycji) mistrz gry może poprosić cię o test Gaist lub Zepsucia</p>
                        <ListGroup className="mb-3" variant="dark">
                            <ListGroupItem>Test Gaist polega na wykonaniu testu Religii lub Występów o ST 15. W przypadku sukcesu zyskujesz k6 punktów gaist</ListGroupItem>
                            <ListGroupItem>Test Zepsucia polega na wykonaniu testu Charyzmy o ST 15 w celu oparcia się Zepsuciu. W przypadku porażki zyskujesz k6 punktów zepsucia. Możesz zdecydować się, by automatycznie ponieść porażkę w tym teście</ListGroupItem>
                        </ListGroup>
                        <h2>Tabela Zapsucia</h2>
                        <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                            <th>Wynik k20</th>
                            <th>Nazwa</th>
                            <th>Efekt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mutationData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.effect}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                        <h2>Tabela Gaist</h2>
                        <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                            <th>Wynik k20</th>
                            <th>Nazwa</th>
                            <th>Efekt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gaistData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.effect}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="magic">
                    <Accordion.Header>Magia Ignis</Accordion.Header>
                    <Accordion.Body className="bg-dark">

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}