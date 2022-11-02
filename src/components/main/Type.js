import React from 'react'

export default function Type() {
  return (
    <section id="type" className='myScroll'>
        <h2 className="hidden">yoga type</h2>
        
            <div className='box_big type1'>
                <img src={process.env.PUBLIC_URL+'/img/img16.png'}/>
                <div className='box_smail'>
                    <div className='thumb_small'>
                        <img src={process.env.PUBLIC_URL+'/img/img16.png'}/>
                    </div>
                    <strong className='tit'>ashtanga</strong>
                    <p className='desc'>
                        Architectural firm focused on the creating strong, beautiful buildings with spaces that are flexible, is beautiful, and appropriate for the needs of its occupants
                    </p>
                </div>
            </div>
        
            <div className='paging'>
                <a href='' className='btn on'><span className='txt'>Ashtanga</span>
                </a>
                <a href='' className='btn'><span className='txt'>Hata</span></a>
                <a href='' className='btn'><span className='txt'>Vinyasa</span></a>
                <a href='' className='btn'><span className='txt'>Bikram</span></a>
            </div>
        
    </section>
  )
}

