import '../styles/Article.css'



function Article(){
    return (
        <div className='carde'>
            <div className='box'>
                <div>
                    <div className='percent'>
                        <svg>
                            <circle cx={70} cy={70} r={70}></circle>
                            <circle cx={70} cy={70} r={70}></circle>
                        </svg>
                        <div className='number'>
                            <h2>90<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text'>Article 1</div>
        </div>
    )
}

export default Article