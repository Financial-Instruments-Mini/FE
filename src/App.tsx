import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import BookMark from './pages/BookMark';
import DetailItem from './pages/DetailItem';
import Home from './pages/Home';
import Login from './pages/Login';
import MyCart from './pages/MyCart';
import MyDetailPage from './pages/MyDetailPage';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Recommend from './pages/Recommend';
import Register from './pages/Register';
import Search from './pages/Search';
import Survey from './pages/Survey';
import EndRegister from './pages/EndRegister';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/mypage'
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route path='/detail/:id' element={<DetailItem />} />
          <Route path='/search' element={<Search />} />
          <Route
            path='/recommend'
            element={
              <ProtectedRoute>
                <Recommend />
              </ProtectedRoute>
            }
          />
          <Route
            path='/mypage/mycart'
            element={
              <ProtectedRoute>
                <MyCart />
              </ProtectedRoute>
            }
          />
          <Route
            path='/bookmark'
            element={
              <ProtectedRoute>
                <BookMark />
              </ProtectedRoute>
            }
          />
          <Route
            path='/mydetailpage'
            element={
              <ProtectedRoute>
                <MyDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/survey'
            element={
              <ProtectedRoute>
                <Survey />
              </ProtectedRoute>
            }
          />
          <Route
            path='/mypage/mydetailpage'
            element={
              <ProtectedRoute>
                <MyDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/success'
            element={
              <ProtectedRoute>
                <EndRegister />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
