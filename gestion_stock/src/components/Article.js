import '../styles/Article.css'



function Article({nomCategorie,quantity}){
    const nom=nomCategorie
    const qt=quantity
    return (
        <div className='carde'>
            <div className='box'>
                <div>
                    <div className='percent'>
                        <svg>
                            <circle cx={70} cy={70} r={70}
                            
                            ></circle>
                            <circle cx={70} cy={70} r={70}></circle>
                        </svg>
                        <div className='number'>
                            <h2>{qt}<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text'>{nom}</div>
        </div>
    )
}

export default Article