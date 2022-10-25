import Layout from "../common/Layout";

export default function Department() {
    return (
        
        <Layout name={'Department'}>
            <p className="desc_sub">
                Yoga is a way to freedom.
                By its constant practice,<br/>
                we can free ourselves from 
                fear, anguish, and loneliness.
            </p>
            <div className="bg">
                <div className="bg1"></div>
                <div className="bg2"></div>
            </div>

            <div className="info">
                <article className="intro_department">        
                    <div className="thumb_intro"><img src={process.env.PUBLIC_URL + '/img/img5.png'} alt="" /></div>
                    <div className="cont_intro">
                        <h3 className="hidden">YOGA</h3>
                        <p className="desc_intro">
                            <strong>Definition of Yoga</strong>
                            Yoga refers to a complex mind-body training method that combines<br /> meditation, breathing, and stretching. <br />
                            It is a method of training the mind and body by refining posture and breathing, <br />unifying and purifying the mind. <br />        
                        </p>
                    </div>   
                </article>
                <article className="cont_department">
                    <h3>We are</h3>
                    <ul className="list_weare">
                        <li>
                            <div className="cont_text">
                                <strong>Jo-u-yeong</strong>Yoga der Selbstaufopferung, um an der Gesellschaft teilzunehmen und zu dienen
                            </div>
                        </li>
                        <li>      
                            <div className="cont_img">
                                <span className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/img/member1.png'} alt=""/>
                                </span>            
                            </div>
                        </li> 
                        <li>
                            <div className="cont_img">
                                <span className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/img/member3.png'} alt=""/>
                                </span>
                            </div>   
                        </li>               
                        <li>
                            <div className="cont_text">
                                <strong>Darshan</strong>Yoga der Selbstaufopferung, um an der Gesellschaft teilzunehmen und zu dienen
                            </div>
                        </li>
                        
                        <li>
                            <div className="cont_img">
                                <span className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/img/member4.png'} alt=""/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="cont_text">
                            <strong>Shila</strong> Yoga to sublimate sound into light sublimate sound into light
                            </div>
                        </li>
                        <li>
                            <div className="cont_img">
                                <span className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/img/ico_gnb.svg'} alt=""/>
                                </span>
                            </div> 
                        </li>
                        <li>
                            <div className="cont_img">
                                <span className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/img/img9.png'} alt=""/>
                                </span>
                            </div> 
                        </li>       
                        <li>
                            <div class="cont_img">
                                <span class="thumb">
                                <img src={process.env.PUBLIC_URL + '/img/img7.png'} alt=""/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div class="cont_img">
                                <span class="thumb">
                                <img src={process.env.PUBLIC_URL + '/img/img10.png'} alt=""/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="cont_text">
                                <strong>Jeong-a</strong>Körperyoga als Yoga über Körperhaltung und Atmung
                            </div>
                        </li>
                        <li>  
                            <div className="cont_img">
                                <span className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/img/member5.png'} alt=""/>
                                </span>
                            </div>           
                        </li>
                        
                        
                        

                    </ul>
                </article>
            </div>
        </Layout>
    )
}