import React from "react";
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
import Divider from "@material-ui/core/Divider";

const Footer = () => {
    return(
        <footer>
    <div class="container footer__container">
    

    <div class="footer__1">
    <h4>Вэбсайт ашиглах заавар</h4>
    <Divider sx={{ bgcolor: (theme) => theme.palette.divider }}
                  style={{
                    backgroundColor:"white",
                    border: "none",
                    height: 1,
                    margin: 0,
                  }} />
      <ul class="privacy"> 
        <li><a style={{color:'white', textDecoration:'none'}} href="#">Үйлчилгээний журам болон нөхцөл</a></li>
        <li><a style={{color:'white', textDecoration:'none'}} href="#">Нууцлалын бодлого</a></li>
      </ul>
    </div>

    <div class="footer__2">
      
    <h4>Бидний тухай</h4>
    <Divider sx={{ bgcolor: (theme) => theme.palette.divider }}
                  style={{
                    backgroundColor:"white",
                    border: "none",
                    height: 1,
                    margin: 0,
                  }} />
      <p>Бид таны ажлыг хөнгөвчлөн өргөн сонголттой бэлэн хувцасыг хүргүүлж авах хялбар үйлчилгээг авах боломжийг олгож байна.</p>
    </div>

    <div class="footer__3">
      <h4>Бидэнтэй холбогдох</h4>
      <Divider sx={{ bgcolor: (theme) => theme.palette.divider }}
                  style={{
                    backgroundColor:"white",
                    border: "none",
                    height: 1,
                    margin: 0,
                  }} />
      <div>
        <p>Утас : 95125907</p>
        <p>Цахим шуудан : trrnyamkaa@gmail.com</p>
        <p>Цагийн хуваарь : Лхагва - Даваа 10:00 - 20:00</p>
        <Divider sx={{ bgcolor: (theme) => theme.palette.divider }}
                  style={{
                    backgroundColor:"white",
                    border: "none",
                    height: 1,
                    margin: 0,
                  }} />
        <li>
          <a href="https://www.facebook.com/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%9F%
             D0%BE%D0%BB%D0%BE-%D1%86%D0%B0%D0%BC%D1%86-%D0%B1%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9-%D1%85%D
              1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%B0-Podwolk-polo-tsamts-malgai-2239091496162324">
              <BsFacebook size='25px'/>
          </a>
        </li>
        <li><a href="/"><AiFillInstagram size='26px'/></a></li>
      </div>
    </div>

  </div>
  </footer>

    )
}

export default Footer;