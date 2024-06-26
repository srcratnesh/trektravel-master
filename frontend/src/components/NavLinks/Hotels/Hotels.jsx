import "./Hotels.css";
import React from "react";
import HotelSmallCard from "./HotelSmallCard";

function Hotels() {
  return (
    <div>
      <div className="hotels">
        <div
          style={{
            boxShadow: "0px -3px 5px 0px rgba(0,0,0,0.75)",
            height: "1px",
          }}
        ></div>

        <div className="golden">
            <div className="golden-intro">
                <h4>Introducing.....</h4>
                <h2>Premium Gold</h2>
                <h2>Range Hotels</h2>
                <h4>
                  Experience Unparalleled Luxury at Golden Range Premium Hotels
                </h4>
                <a href="/hotels/golden">
                  <button>Explore More</button>
                </a>
            </div>
          <HotelSmallCard
            imageUrl="https://imgs.search.brave.com/zpzX4_fLtzQEWBRGPJD5xsc6YbTApMYWwf7S7mATE1U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIx/Nzc3Nzc0L3Bob3Rv/L2luZGlhLW11bWJh/aS10YWotbWFoYWwt/cGFsYWNlLWhvdGVs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1SQjQxeEowbjl0/TXVjSjVaSTFtb2lj/R2JhSjhHMTd6bm1Q/RlFZemJMYVZrPQ"
            title="Hotel Taj"
            subtitle="Where Luxury Meets History The Taj Hotel Experience"
            link="/hotels/6515de839ca4f9f3687b06a1"
            />
          <HotelSmallCard
            imageUrl="https://imgs.search.brave.com/7x48_x5ZxA37YV8vgI17TY2GipJAqDwdqvtFLR0bVWo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYWNo/ZS5tYXJyaW90dC5j/b20vY29udGVudC9k/YW0vbWFycmlvdHQt/cmVuZGl0aW9ucy9H/UlJKVy9ncnJqdy1l/eHRlcmlvci0wMDYz/LWhvci1jbHNjLmpw/Zz9vdXRwdXQtcXVh/bGl0eT03MCZpbnRl/cnBvbGF0aW9uPXBy/b2dyZXNzaXZlLWJp/bGluZWFyJmRvd25z/aXplPTEyMTVweDoq"
            title="JW Marriot"
            subtitle="Luxury Meets Elegance, Every Moment is Exceptional"
            link="/hotels/6516b174da17274796970f7c"
          />
          <HotelSmallCard
            imageUrl="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
            title="Hotel Maharaja"
            subtitle="Explore the Mumbai's Most Beautiful 5 Star rated hospital"
          />
        </div>
        
        <div className="golden">
            <div className="golden-intro silver-intro">
                <h4>Introducing.....</h4>
                <h2>Premium Silver</h2>
                <h2>Range Hotels</h2>
                <h4>
                Enjoy Royal Experince at Silver Range Hotels.
                </h4>
                <a href="/hotels/silver">
                  <button>Explore More</button>
                </a>
            </div>
          <HotelSmallCard
            imageUrl="https://imgs.search.brave.com/Q_6jqOFgGIY07SHPwIJ8-Q92_yr1t8AnfKhvHgllmtA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy83MDAwMDAwLzYz/OTAwMDAvNjM4MjMw/MC82MzgyMjMzL2Y5/MDc4N2RkX3kuanBn"
            title="Holiday inn"
            subtitle="Explore the best in Class !"
          />
          <HotelSmallCard
            imageUrl="https://imgs.search.brave.com/xiXTZf76F5TMQ9hAEtQcxZ0GrGDgJxTMk8pe7FQZI98/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGlsdG9uLmNvbS9p/bS9lbi9BR1JEVERJ/LzM3Mjk3Ny9hZ3Jk/dGRpLWRvdWJsZXRy/ZWUtYnktaGlsdG9u/LWFncmEtZXh0ZXJp/b3IuanBnP2ltcG9s/aWN5PWNyb3AmY3c9/MjQ2MyZjaD0xNjM4/JmdyYXZpdHk9Tm9y/dGhXZXN0Jnhwb3Np/dGlvbj03NjgmeXBv/c2l0aW9uPTAmcnc9/NzY4JnJoPTUxMQ"
            title="Double Tree"
            subtitle="Enjoy the best sunsets of Rajstan"
            link="/hotels/6516b70a5b745748155043cb"
          />
          <HotelSmallCard
            imageUrl="https://r1imghtlak.mmtcdn.com/456f2ab0288e11eab66b0242ac110003.jfif"
            title="Hotel Lamonade"
            subtitle="Elevating your experience, one visit at a time"
          />
        </div>
      
      
        
      </div>
    </div>
  );
}
export default Hotels;
