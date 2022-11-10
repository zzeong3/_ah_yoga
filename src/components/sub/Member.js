import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Member() {
    const history = useHistory();
    
    const initVal = {
        userid : '',
        email : '',
        pwd1 : '',
        pwd2 : '',
        birthYear : '',
        birthMonth : '',
        birthDay : '',
        comments : '',
        gender : null,
        interests : null,
    }

    const [Val, setVal] = useState(initVal);
    const [Err, setErr] = useState({});
    const [Submit, setSubmit] = useState(false);

    const check = (value)=>{
        const errs = {};

        const eng = /[a-zA-Z]/;
        const num = /[0-9]/;
        const spc = /[~!@#$%^&*+]/;
        
        if (value.userid.length < 5) {
            errs.userid = 'Enter an ID of 5 or more characters.'
        } 

        if (value.email.length < 8 || !/@/.test(Val.email)) {
            errs.email = "Please include @ at least 8 characters in your email."
        }
        
        if (
            value.pwd1 < 5 ||
            !eng.test(value.pwd1) ||
            !num.test(value.pwd1) ||
            !spc.test(value.pwd1) 
      
        ){
            errs.pwd1 = 'Password must contain at least 5 characters, including English, numeric, and special characters.';
        }

        if (value.pwd1 != value.pwd2 || value.pwd2 < 5) {
            errs.pwd2 = 'Enter the same two passwords.'
        }

        if (!Val.gender) {
            errs.gender = 'Please select your gender';
        }

        if (!Val.interests) {
            errs.interests = 'Please select one or more interests.';
        }

        if (Val.comments.length < 20) {
            errs.comments = 'Please enter at least 20 characters to leave a message.';
        }

        if (Val.birthYear.length < 4) {
            errs.birthYear = 'Please enter the correct 4-digit year of birth.'
        } 

        if (Val.birthMonth === '') {
            errs.birthMonth = 'Please select the month of birth.'
        }

        if (Val.birthDay.length < 2) {
            errs.birthDay = 'Please enter the correct two-digit date of birth (date).'
        }
        
        return errs;
    }

 
   const handleChange = (e)=>{
        const {name, value} = e.target;
        setVal({...Val, [name]: value});
    }

    const handleRadio = (e)=>{
        const {name} = e.target;
        const isChecked = e.target.checked;
        setVal({...Val, [name]: isChecked});
    }

    const handleSelect = (e) => {
        const {name} = e.target;
        const isSelected = e.target.value;
        setVal({...Val, [name]: isSelected});
    }

    const handleCheck = (e) => {
        let isChecked = false;
        const {name} =e.target;
        const inputs = e.target.parentElement.querySelectorAll('input');
        inputs.forEach((el)=>{
            if(el.checked) isChecked = true;
        });
        setVal({...Val, [name]: isChecked});
    }

    const handleReset = () => {
        setSubmit(false);
        setErr({});
        setVal(initVal);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErr(check(Val));
        
    }

    useEffect(()=>{
        const len = Object.keys(Err).length;
        if (len === 0 && Submit) {
            alert ('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');
            history.push('/');
        }
    }, [Err])


    return (
        <Layout name={'Member'}>
            <p className="desc_sub">
                Do not feel lonely.<br />
                The entire universe is inside you.
            </p>

            <div className="info">
                <strong>Say Hello</strong>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className='hidden'>회원가입 폼 양식</legend>
                        <table border="1">
                            <caption  className='hidden'>회원가입 정보 입력</caption>
                            <tbody>
                                {/* user id */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="userid">USER ID</label>
                                    </th>
                                    <td>
                                        <input type="text" placeholder='Please enter your ID' name='userid' id='userid' 
                                        value={Val.userid} onChange={ handleChange }/>
                                        <span className='err'>{Err.userid}</span>
                                    </td>
                                </tr>

                                {/* password */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="pwd1">PASSWORD</label>
                                    </th>
                                    <td>
                                        <input type="password" name="pwd1" id="pwd1" placeholder="Please enter a password" onChange={handleChange} />
                                        <span className='err'>{Err.pwd1}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="pwd1">RE - PASSWORD</label>
                                    </th>
                                    <td>
                                        <input type="password" name="pwd2" id="pwd2" placeholder="Please re-enter your password" onChange={handleChange} />
                                        <span className='err'>{Err.pwd2}</span>
                                    </td>
                                </tr>

                                {/* email */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="email">E-Mail</label>
                                    </th>
                                    <td>
                                        <input type="text" id='email' name='email' placeholder='Please re-enter your password' value={Val.email} onChange={handleChange}/>
                                        <span className='err'>{Err.email}</span>
                                    </td>
                                </tr>
                                
                                {/* birth */}
                                <tr className='birth'>
                                    <th scope='row'>
                                        <label htmlFor="birthYear">Birth</label>
                                    </th>
                                    <td>
                                        <div className='cont'>
                                            <input type="text" id='birthYear' name='birthYear' placeholder='Year (4characters)' value={Val.birthYear} onChange={handleChange}/>
                                            <span className='err'>{Err.birthYear}</span>
                                        </div>

                                        <div className='cont'>
                                        <select name="birthMonth" id="birthMonth" onChange={handleSelect}>
                                            <option value="">Month</option>
                                            <option value="jan">1</option>
                                            <option value="feb">2</option>
                                            <option value="mar">3</option>
                                            <option value="apr">4</option>
                                            <option value="may">5</option>
                                            <option value="jun">6</option>
                                            <option value="jul">7</option>
                                            <option value="aug">8</option>
                                            <option value="sep">9</option>
                                            <option value="oct">10</option>
                                            <option value="nov">11</option>
                                            <option value="dec">12</option>
                                        </select>
                                        <span className='err'>{Err.birthMonth}</span>
                                        </div>

                                        <div className='cont'>
                                        <input type="text" id='birthDay' name='birthDay' placeholder='Day (2characters)' value={Val.birthDay} onChange={handleChange}/>
                                        <span className='err'>{Err.birthDay}</span>
                                        </div>
                                    </td>
                                </tr>

                                {/* gender */}
                                <tr>
                                    <th scope='row'>GENDER</th>
                                    <td>
                                        <input type="radio" name="gender" id="male" onChange={handleRadio}/>
                                        <label htmlFor="male">MALE</label>

                                        <input type="radio" name="gender" id="female" onChange={handleRadio}/>
                                        <label htmlFor="female">FEMALE</label>

                                        <input type="radio" name="gender" id="unchecked" onChange={handleRadio}/>
                                        <label htmlFor="unchecked">UNCHECKED</label>
                                        
                                        <span className='err'>{Err.gender}</span>
                                    </td>
                                </tr>

                                {/* check box */}
                                <tr>
                                    <th scope='row'>INTERESTS</th>
                                    <td>
                                        <input type="checkbox" name="interests" id="sports" onChange={handleCheck}/>
                                        <label htmlFor="sports">SPORTS</label>
                                        
                                        <input type="checkbox" name="interests" id="music" onChange={handleCheck}/>
                                        <label htmlFor="music">MUSIC</label>
                                        
                                        <input type="checkbox" name="interests" id="game" onChange={handleCheck}/>
                                        <label htmlFor="game">GAME</label>
                                        
                                        <span className='err'>{Err.interests}</span>
                                    </td>
                                </tr>

                                {/* comments */}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="comments">COMMENTS</label>
                                    </th>
                                    <td>
                                        <textarea name="comments" id="comments" cols="30" rows="5" value={Val.comments} onChange={handleChange} placeholder='Please enter at least 20 characters to leave a message.'></textarea>
                                        <span className='err'>{Err.comments}</span>
                                    </td>
                                </tr>

                                {/* btn set*/}
                                <tr>
                                    <th colSpan='2'>
                                        <button type="reset" className='btn' onClick={handleReset}>
                                            <span 
                                            className='txt'>CANCLE</span>
                                        </button>
                                
                                        <button type="submit" className='btn' onClick={()=>setSubmit(true)}>
                                            <span 
                                            className='txt'>SEND</span>
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>
            </div>
        </Layout>
    )
}