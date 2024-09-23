import './InfoBox.css'

function InfoBox() {
    const name = "Kacper"

    const date = new Date().toDateString()

    return <div className="wrapper">
        <p>Pierwsza linia</p>
        <p>Druga linia</p>
        <p>{name}</p>
        <p>{date}</p>
    </div>
}

export default InfoBox