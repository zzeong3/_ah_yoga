import { useState, useRef, useEffect } from "react";
import Layout from "../common/Layout";

export default function Community() {

    const getLocalData = () => {
       
        const data = localStorage.getItem('post');
        return JSON.parse(data);
        
    };

    const input = useRef(null);
    const textarea = useRef(null);
    const inputEdit = useRef(null);
    const textareaEdit = useRef(null);
    const [Posts, setPosts] = useState(getLocalData); 
    const [Allowed, setAllowed] = useState(true);
    
    const resetForm = () => {
        input.current.value = ' ';
        textarea.current.value = ' ';

        if (inputEdit.current) {
            inputEdit.current.value = ' ';
            textareaEdit.current.value = ' ';
        }
    }

    // 글 저장 함수
    const createPost = () => {
        if (!input.current.value.trim() || !textarea.current.value.trim()) {
            resetForm();
            return alert ('제목과 본문을 모두 입력하세요!')
        }

        setPosts([
            {
                title : input.current.value,
                content : textarea.current.value
            },
            ...Posts,
        ]);
        resetForm();
    }

    // 글 삭제 함수 
    const deletePost = (index) => {
        
        setPosts(Posts.filter((_, idx)=> idx !== index)); 

    }


    // 글 수정모드 변경함수
    const enabledUpdate = (index) => {
        if(!Allowed) return;
        setAllowed(false);
        setPosts(
            Posts.map((post, idx)=>{
                if (idx === index) post.enabledUpdate = true;
                return post;
            })
        );
    }

    // 수정모드 취소
    const disableUpdate = (index) => {
        setAllowed(true);
        setPosts(
            Posts.map((post, idx)=>{
                if (idx === index) post.enabledUpdate = false;
                return post;
            })
        )
    }

    //실제 글 수정함수
    const updatePost = (index) => {
        if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) { 
            resetForm();
            return alert ('수정한 제목과 본문을 모두 입력하세요!')
        }
        setAllowed(true); 
        setPosts(
            Posts.map((post, idx)=>{
                if (idx === index) {
                    post.title = inputEdit.current.value;
                    post.content = textareaEdit.current.value;
                    post.enabledUpdate = false          
                }
                return post;          
            })
        )
    }

    useEffect(()=>{
        localStorage.setItem('post', JSON.stringify(Posts));

    }, [Posts]);


    return (
        <Layout name={'Community'}>
            <p className="desc_sub">
                When breath control is correct,<br />
                mind control is possible.
            </p>

            <div className="info">
                <div className="inputBox">
                    <strong>TITLE.</strong>
                    <input type="text" placeholder="Please enter a title." ref={input} />
                    <br />
                    <strong>CONTENTS.</strong>
                    <textarea cols="30" rows="5" placeholder="Please enter your text." ref={textarea}></textarea>
                    <br />
                    <div className="btnSet">
                        <button onClick={resetForm} className='btn'><span className='txt'>CANCLE</span></button>
                        <button onClick={createPost} className='btn'><span className='txt'>WRITE</span></button>
                    </div>
                    
                </div>

                <div className="showBox">
                    {Posts.map((post, idx)=>{
                        return (
                            <article key={idx}> 
                                {post.enabledUpdate ? ( 
                                
                                    <>
                                        <em>{idx +1}.</em>
                                        <div className="editTxt">
                                            <input type="text" defaultValue={post.title} ref={inputEdit}/>
                                            <br />
                                            <textarea cols="30" rows="5" defaultValue={post.content} ref={textareaEdit}></textarea>
                                            <div className="btnSet">
                                                <button onClick={()=>disableUpdate(idx)} className='btn'><span className="txt"></span>CANCLE</button>
                                                <button onClick={()=>updatePost(idx)} className='btn'><span className="txt">UPDATE</span></button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                   
                                    <>
                                        <em>{idx +1}.</em>
                                        <div className="txt">
                                            <strong>{post.title}</strong>
                                            <p>{post.content}</p>
                                        </div>
                                        <div className="btnSet">
                                            <button onClick={()=>enabledUpdate(idx)} className='btn'><span className="txt">EDIT</span></button>
                                            <button onClick={()=>deletePost(idx)} className='btn'><span className="txt">DELETE</span></button>
                                        </div>
                                    </>
                                    )
                                }

                            
                            </article>
                        );
                    })}
                </div>
            </div>
        </Layout>
    )
}