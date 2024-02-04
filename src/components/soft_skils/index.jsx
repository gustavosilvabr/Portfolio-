import './style.css';

export default function SoftSkils({imgSkil1,nomeSkil1,nomeSkil2,imgSkil2,nomeSkil3,imgSkil3}) {
    return (
        <div className='container-soft-skils'>
           <h1>Soft Skils</h1>
            <div className='container-child'>
                <div className='child'>
                    <img src={imgSkil1} alt="imagem da habilidade" />
                    <span>{nomeSkil1}</span>
                </div>
                <div className='child'>
                    <img src={imgSkil2} alt="imagem da habilidade" />
                    <span>{nomeSkil2}</span>
                </div>
                <div className='child'>
                    <img src={imgSkil3} alt="imagem da habilidade" />
                    <span>{nomeSkil3}</span>
                </div>
            </div>
            
        </div>
    )
}