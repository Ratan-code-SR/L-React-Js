// const todoTitle = "Call Family";
// const todoDescription = "Quidem optio quia mollitia, beatae eveniet praesentium eligendi";
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

function Card(props) {
    const { headingTitle, todoDec } = props; // distructuring using props
    return <div className='card'>
        <h2 className='cardTitle'>{headingTitle}</h2>
        <p className='cardDescription'>{todoDec}</p>
        <p className='date'>{`${day} ${month} ${year}`}</p>
    </div>
}

export default Card;