import './list.css'

function List () {
    const numbers = [123, 234, 345, 657, 789, 234]

    const parsed = numbers.map((val) => val * 100)

    const people = [{name: "Maciek", age: '12'}, {name: "Patryk", age: '32'}]


    return <>
    <div>
        {parsed.map((val, i) => {return <p key={i}>{i}. {val}</p>})}
    </div>
    <div className='wrapper2'>
        {people.map((val, i) => {
            return <div key={i} className='person'><span>{val.name}</span>, <span>{val.age}</span></div>
        })}
    </div>
    </>
}

export default List