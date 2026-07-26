import React from 'react';
import MainHome from './pages/home/MainHome';
import Teashop from "./pages/home/TeaShop";
import TeaHouse from "./pages/home/TeaHome"
import Landing from "./pages/home/Landing";
import AboutUs from "./pages/pag/AboutUs";
import OurTeam from "./pages/pag/OurTeam";;
import OurMenu from "./pages/pag/OurMenu";
import Booking from "./pages/pag/Booking";
import OurLocation from "./pages/pag/OurLocation";
import ContactUs from "./pages/pag/ContactUs";
import ShopList from "./pages/shop/ShopList";
import ShopSingle from "./pages/shop/ShopSingle";
import ShopSlider from "./pages/shop/ShopSlider";
import FiveColunmsWide from "./pages/shop/shopLayout/FiveColumnsWider";
import FourColumns from "./pages/shop/shopLayout/FourColumns";
import FourColumnsWide from "./pages/shop/shopLayout/FourColumnsWider";
import ThreeColumns from "./pages/shop/shopLayout/ThreeColumns";
import ThreeColumnsWide from "./pages/shop/shopLayout/ThreeColumnsWider";
import Cart from "./pages/shop/shopPages/Cart";
import Checkout from "./pages/shop/shopPages/Checkout";
import MyAccount from "./pages/shop/shopPages/MyAccount";
import BlogLeftSlider from "./pages/blog/BlogLeftSlider";
import BlogNoSlider from "./pages/blog/BlogNoSlider";
import BlogPinterest from "./pages/blog/BlogPinterest";
import BlogRightSlider from "./pages/blog/BlogRightSlider";
import BlogSlider from "./pages/blog/BlogSlider";
import AudioPost from "./pages/blog/postTypes/AudioPost";
import GaleryPost from "./pages/blog/postTypes/GaleryPost";
import LinkPost from "./pages/blog/postTypes/LinkPost";
import NoSlidebarPost from "./pages/blog/postTypes/NoSlideBarPost";
import QuotePost from "./pages/blog/postTypes/QuotePost";
import StandardPost from "./pages/blog/postTypes/StandardPost";
import VideoPost from "./pages/blog/postTypes/VideoPost";
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
         <Route path="/" element={<MainHome/>} />
         <Route path="/teaShop"  element={<Teashop/>} />
         <Route path="/teaHouse"  element={<TeaHouse/>} />
         <Route path="/landing"  element={<Landing/>} />
         <Route path="/aboutUs"  element={<AboutUs/>} />
         <Route path="/ourTeam"  element={<OurTeam/>} />
         <Route path="/ourMenu"  element={<OurMenu/>} />
         <Route path="/booking"  element={<Booking/>} />
         <Route path="/ourLocation"  element={<OurLocation/>} />
         <Route path="/contactUs"  element={<ContactUs/>} />
         <Route path="/shopList"  element={<ShopList/>} />
         <Route path="/shopSingle"  element={<ShopSingle/>} />
         <Route path="/shopSlider"  element={<ShopSlider/>} />
         <Route path="/threeColumns"  element={<ThreeColumns/>} />
         <Route path="/threeColumnsWide"  element={<ThreeColumnsWide/>} />
         <Route path="/fourColumns"  element={<FourColumns/>} />
         <Route path="/fourColumnsWide"  element={<FourColumnsWide/>} />
         <Route path="/fiveColunmsWide"  element={<FiveColunmsWide/>} />
         <Route path="/myAccount"  element={<MyAccount/>} />
         <Route path="/cart"  element={<Cart/>} />
         <Route path="/checkout"  element={<Checkout/>} />
         <Route path="/blogRightSlider"  element={<BlogRightSlider/>} />
         <Route path="/blogLeftSlider"  element={<BlogLeftSlider/>} />
         <Route path="/blogNoSlider"  element={<BlogNoSlider/>} />
         <Route path="/blogSlider"  element={<BlogSlider/>} />
         <Route path="/blogPinterest"  element={<BlogPinterest/>} />
         <Route path="/standardPost"  element={<StandardPost/>} />
         <Route path="/linkPost"  element={<LinkPost/>} />
         <Route path="/quotePost"  element={<QuotePost/>} />
         <Route path="/audioPost"  element={<AudioPost/>} />
         <Route path="/galeryPost"  element={<GaleryPost/>} />
         <Route path="/videoPost"  element={<VideoPost/>} />
         <Route path="/noSlidebarPost"  element={<NoSlidebarPost/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
