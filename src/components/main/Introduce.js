export default function Introduce() {
  return (
    <section id="introduce" className='myScroll'>
        <h2 className="hidden">Representative introduction</h2>
        <div className="area_thumb">
            <div className="thumb">
                <img src={process.env.PUBLIC_URL+'/img/member5.png'} alt=""/>
            </div>
            <div className="info_thumb">
                <span className="name">Darrell<br />Steward</span>
                <span className="job">Chief Architect</span>
            </div>
        </div>
        <p className="cont">
            <span className="txt">Spaces Institute for Architec-ture and Design was</span>
            founded in 2009 by the philanthropist Darrell Steward, with mission to change physical, cultural landscapes of German cities. The Institute promotes positive changes and creates new trends
        </p>
        <div className="lines">
            <div className="lines_line line1"></div>
            <div className="lines_line line2"></div>
            <div className="lines_line line3"></div>
        </div>
    </section>
  )
}
