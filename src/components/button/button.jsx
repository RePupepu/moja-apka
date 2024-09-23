import "./button.css"

function Button() {
    function handleButton() {
        console.log('Naciśnięcie przycisku')
        }   

        function handleButton2() {
            console.log('Najechanie na przcyisk')
        }

        return <>
            <button onClick={handleButton}>Naciśnij mnie!</button>
            <button onMouseEnter={handleButton2}>Nahedz!</button>
        </>
}

export default Button