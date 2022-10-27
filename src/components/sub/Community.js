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
                    <input type="text" placeholder="제목을 입력하세요." ref={input} />
                    <br />
                    <textarea cols="30" rows="5" placeholder="본문을 입력하세요." ref={textarea}></textarea>
                    <br />
                    <div className="btnSet">
                        <button onClick={resetForm}>CANCLE</button>
                        <button onClick={createPost}>WRITE</button>
                    </div>
                    
                </div>

                <div className="showBox">
                    {Posts.map((post, idx)=>{
                        return (
                            <article key={idx}>      
                                {post.enabledUpdate ? ( 
                                    // 반복도는 post에서 enableUpdate = true 값이 있으면 수정모드로 랜더링
                                    <>
                                        {/* 변화가 일어난 결과 */}
                                        <div className="editTxt">
                                            <input type="text" defaultValue={post.title} ref={inputEdit}/>
                                            {/* defaultValue 원래 가지고 있었던 값을 유지시켜라 */}
                                            <br />
                                            <textarea cols="30" rows="5" defaultValue={post.content} ref={textareaEdit}></textarea>
                                            <div className="btnSet">
                                                <button onClick={()=>disableUpdate(idx)}>cancle</button>
                                                <button onClick={()=>updatePost(idx)}>update</button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // 반복되는 post에서 enabledUpdate = false거나 없으면 일반 출력 모드로 랜더링
                                    <>
                                        <div className="txt">
                                            <h2>{post.title}</h2>
                                            <p>{post.content}</p>
                                        </div>
                                        <div className="btnSet">
                                            <button onClick={()=>enabledUpdate(idx)}>edit</button>
                                            <button onClick={()=>deletePost(idx)}>delete</button>
                                        </div>
                                    </>
                                    )
                                }

                                {/* <div className="txt">
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>
                                
                                <div className="btnSet">
                                    <button onClick={()=>enabledUpdate(idx)}>edit</button>
                                    <button onClick={()=>deletePost(idx)}>delete</button>
                                </div> */}
                            </article>
                        );
                    })}
                </div>
            </div>
        </Layout>
    )
}