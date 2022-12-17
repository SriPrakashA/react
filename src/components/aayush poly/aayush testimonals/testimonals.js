import './../aayush testimonals/testimonals.css'

function Testimonals() {
    const contents = [
        {description:"Happy with Doctor friendliness, Explanation of the health issue Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at her Ayurveda hospital in Koramangala, Bangalore. The doctor advised me Ayurveda medication. I followed properly as per Doctor’s suggestion and it worked well for me. Now I am completely exposing to Sun and even I tried to be outside the whole full day.",
        title:"name",
        id:1},
        {description:"Happy with Doctor friendliness, Explanation of the health issue Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at her Ayurveda hospital in Koramangala, Bangalore. The doctor advised me Ayurveda medication. I followed properly as per Doctor’s suggestion and it worked well for me. Now I am completely exposing to Sun and even I tried to be outside the whole full day.",
        title:"name",
        id:2},
        {description:"Happy with Doctor friendliness, Explanation of the health issue Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at her Ayurveda hospital in Koramangala, Bangalore. The doctor advised me Ayurveda medication. I followed properly as per Doctor’s suggestion and it worked well for me. Now I am completely exposing to Sun and even I tried to be outside the whole full day.",
        title:"name",
        id:3},
    ]
    return(<>
        <div className="testimonals">
            <div className="testimonals-head">
                <h2>TESTIMONALS</h2>
                <div className="empty"></div>
            </div>
            <div className="testimonals-contents">
                {contents.map((content)=>{
                    return (<>
                        <div className="testimmonala-desc">
                            <p>{content.description}</p>
                            <h3>{content.title}</h3>
                        </div>
                    </>)
                })}
            </div>

        </div>
        <div className='sub-visit'>
            <h3>Ready to Visit?</h3>
            <h1>Make an Appointment</h1>
        </div>
    </>)
}

export{Testimonals}