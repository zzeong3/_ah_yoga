
import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getFlickr, getYoutube } from './api';
import * as types from './actionType';

// Flickr 비동기 처리 함수
function* returnFlickr(action) {
    try {
        const response = yield call(getFlickr, action.Opt);
        yield put({ type: types.FLICKR.success, payload: response.data.photos.photo });
    } catch (err) {
        yield put ({type: types.FLICKR.fail, payload: err})
    }
}

//요청받은 action타입에 따라서 함수 호출
function* callFlickr() {
  //컴포넌트에서 FLICIKR_START타입 액션객체가 전달되면 해당 이벤트를 takeLatest가 받아서 returnFlickr함수 호출
  yield takeLatest(types.FLICKR.start, returnFlickr);
}


// 유투브 비동기 처리 함수
function* returnYoutube() {
    try {
        const response = yield call(getYoutube);
        yield put({ type: types.YOUTUBE.success, payload: response.data.items });
    } catch(err) {
        yield put ({type: types.YOUTUBE.fail, payload: err})
    }
   
  }
  
  function* callYoutube() {
    yield takeLatest(types.YOUTUBE.start, returnYoutube);
  }


  

//store.js에 의해 reducer에 미들웨어로 적용할 rootSaga함수 생성
export default function* rootSaga() {
    yield all([fork(callFlickr), fork(callYoutube)]);
  }