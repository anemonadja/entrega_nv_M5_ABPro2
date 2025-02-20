import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterReact() {
    return (
        <Card className="text-center">
            <Card.Body>
                <footer class="py-1 my-1">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="./home" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Inicio</a></li>
                    <li class="nav-item"><a href="https://youtu.be/T_QAxvPjjBc?si=2dsuBsWl6BgqRFz2" Target="_blank" class="nav-link px-2 text-body-secondary">Video</a></li>
                    <li class="nav-item"><a href="./doctores" class="nav-link px-2 text-body-secondary">Doctores</a></li>
                    <li class="nav-item"><a href="./contacto" class="nav-link px-2 text-body-secondary">Contacto</a></li>
                    </ul>
                    <p class="text-center text-body-secondary">© 2025 Hospital React_Nadja</p>
                </footer>
            </Card.Body>
        </Card>
    );
}

    export default FooterReact;
