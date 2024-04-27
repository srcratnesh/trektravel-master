import './Trektravel.css'
import React from 'react';
import TravelSmallCard from './TravelSmallCard';

function HolidayPack()
{
    return(
        <div>
            <div>

<div className="hotels">
<div
  style={{
    boxShadow: "0px -3px 5px 0px rgba(0,0,0,0.75)",
    height: "1px",
  }}
></div>
<div className="golden">
<div className="golden-intro bronze-intro">
<h4>Introducing.....</h4>
<h2>BEST HOSPITALS</h2>
<h2>Range HOSPITALS</h2>
<h4>
Discover Most Specious Hospitals in Pune
</h4>
<a href="/hotels/bronze">
  <button>Explore More</button>
</a>
</div>
<TravelSmallCard
imageUrl="https://imgs.search.brave.com/BZaard2eGVLM6Pf5cJ-QQks-VyPc8dAcpmkeU1Re3Oo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVkaWZlZS5jb20v/b2ZmZXJzL3RoeXJv/Y2FyZS9pbWcvcnVi/eS1oYWxsLWNsaW5p/Yy1wdW5lLmpwZw"
title="Ruby Hall"
subtitle="Leading provider of comprehensive healthcare."
/>
<TravelSmallCard
imageUrl="https://imgs.search.brave.com/GoOsip1vI_hg7zcfAk62_SGSj4irxfn7ajdWPqp9wNc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3BWMzMxcEV6/cmFVRlJVMUJ1TlVS/TEEvMzQ4cy5qcGc"
title="Holy Hospital"
subtitle="Advanced medical care center."
/>
<TravelSmallCard
imageUrl="https://imgs.search.brave.com/t_ROjh12PSaaz6vkbxfdJsp0_6v_OyoF8PXXqS037Gc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cHVuZS9nMS8wMjBw/eHgyMC54eDIwLjAw/MDY3NTk4MjUwMC5m/M2cxL2NhdGFsb2d1/ZS9kci1kLXktcGF0/aWwtbWVkaWNhbC1j/b2xsZWdlLWhvc3Bp/dGFsLWFuZC1yZXNl/YXJjaC1jZW50cmUt/cGltcHJpLXB1bmUt/bWVkaWNhbC1jb2xs/ZWdlcy10eDAyMDNj/OXQxLmpwZw"
title="D.Y. Patil"
subtitle="Trusted for compassionate healthcare.."
/>
</div>
</div>
</div>
        </div>
    );
}
export default HolidayPack;