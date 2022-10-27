import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Member() {
    const history = useHistory();
    
    const initVal = {
        userid : ' ',
        email : ' ',
        pwd1 : ' ',
        pwd2 : ' ',
        edu : ' ',
        comments : ' ',
        gender : null,
        interests : null,
    }

    const [Val, setVal] = useState(initVal);
    const [Err, setErr] = useState({});
    const [Submit, setSubmit] = useState(false);

    const check = (value)=>{
        const errs = {}; //에러메세지 초기화

        const eng = /[a-zA-Z]/;
        const num = /[0-9]/;
        const spc = /[~!@#$%^&*+]/;
        
        if (value.userid.length < 5) {
            errs.userid = '아이디를 5글자 이상 입력하세요.'
        } 

        //이메일 인증은 8글자 이상. @가 있어야한다.
        if (value.email.length < 8 || !/@/.test(Val.email)) {
            errs.email = "이메일은 8글자 이상 @를 포함하세요."
        }
        
        if (
            value.pwd1 < 5 ||
            !eng.test(value.pwd1) ||
            !num.test(value.pwd1) ||
            !spc.test(value.pwd1) 
      
        ){
            errs.pwd1 = '비밀번호는 5글자이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
        }

        if (value.pwd1 != value.pwd2 || value.pwd2 < 5) {
            errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.'
        }

        if (!Val.gender) {
            errs.gender = '성별을 선택하세요.';
        }

        if (!Val.interests) {
            errs.interests = '관심사를 하나이상 선택하세요.';
        }

        if (Val.comments.length < 20) {
            errs.comments = '남기는 말을 20글자 이상 입력하세요.';
        }

        if (Val.edu === ' ') {
            errs.edu = '최종학력을 선택하세요.'
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
            history.push('/youtube');
        }
    }, [Err])


    return (
        <Layout name={'Member'}>
            <p className="desc_sub">
                Do not feel lonely.<br />
                The entire universe is inside you.
            </p>

            <div className="info">
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
                                        <input type="text" placeholder='아이디를 입력하세요' name='userid' id='userid' 
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
                                        <input type="password" name="pwd1" id="pwd1" placeholder="비밀번호를 입력하세요" onChange={handleChange} />
                                        <span className='err'>{Err.pwd1}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="pwd1">RE - PASSWORD</label>
                                    </th>
                                    <td>
                                        <input type="password" name="pwd2" id="pwd2" placeholder="비밀번호를 재입력하세요" onChange={handleChange} />
                                        <span className='err'>{Err.pwd2}</span>
                                    </td>
                                </tr>

                                {/* email */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="email">E-Mail</label>
                                    </th>
                                    <td>
                                        <input type="text" id='email' name='email' placeholder='이메일을 입력하세요' value={Val.email} onChange={handleChange}/>
                                        <span className='err'>{Err.email}</span>
                                    </td>
                                </tr>
                                
                                {/* edu */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="edu">EDUCATION</label>
                                    </th>
                                    <td>
                                        <select name="edu" id="edu" onChange={handleSelect}>
                                            <option value="">학력을 선택하세요.</option>
                                            <option value="elementary">초등학교 졸업</option>
                                            <option value="middle">중학교 졸업</option>
                                            <option value="high">고등학교 졸업</option>
                                            <option value="college">대학교 졸업</option>
                                        </select>
                                        <span className='err'>{Err.edu}</span>
                                    </td>
                                </tr>

                                {/* gender */}
                                <tr>
                                    <th scope='row'>GENDER</th>
                                    <td>
                                        <label htmlFor="male">MALE</label>
                                        <input type="radio" name="gender" id="male" onChange={handleRadio}/>

                                        <label htmlFor="female">FEMALE</label>
                                        <input type="radio" name="gender" id="female" onChange={handleRadio}/>
                                        <span className='err'>{Err.gender}</span>
                                    </td>
                                </tr>

                                {/* check box */}
                                <tr>
                                    <th scope='row'>INTERESTS</th>
                                    <td>
                                        <label htmlFor="sports">SPORTS</label>
                                        <input type="checkbox" name="interests" id="sports" onChange={handleCheck}/>
                                        <label htmlFor="game">MUSIC</label>
                                        <input type="checkbox" name="interests" id="game" onChange={handleCheck}/>
                                        <label htmlFor="game">GAME</label>
                                        <input type="checkbox" name="interests" id="game" onChange={handleCheck}/>
                                        <span className='err'>{Err.interests}</span>
                                    </td>
                                </tr>

                                {/* comments */}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="comments">COMMENTS</label>
                                    </th>
                                    <td>
                                        <textarea name="comments" id="comments" cols="30" rows="5" value={Val.comments} onChange={handleChange}></textarea>
                                        <span className='err'>{Err.comments}</span>
                                    </td>
                                </tr>

                                {/* btn set*/}
                                <tr>
                                    <th colSpan='2'>
                                        <input type="reset" value="CANCLE" onClick={handleReset}/>
                                        <input type="submit" value="SEND" onClick={()=>setSubmit(true)}/> 
                                        {/* 클릭하는 조건이 있어야 되어야서 함수형태로 옴 */}
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