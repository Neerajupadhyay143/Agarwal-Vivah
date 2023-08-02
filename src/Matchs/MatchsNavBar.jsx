import React, { useState } from 'react';
import "./MatchsNavBar.css";
import MyMatches from './MyMatches';

function MatchsNavBar() {
  const [myMatchesCount, setMyMatchesCount] = useState(282);
  const [nearMatchesCount, setNearMatchesCount] = useState(22);
  const [recentViewedCount, setRecentViewedCount] = useState(18);
  return (
<>
 <div class="main-sub-nav">
        <div class="container">
            <ul class="ml-auto">
                <li><a href="my-matches.html">New Matchs</a></li>
                <li><a href="my-matches.html">My Matches <span>(282)</span></a></li>
                <li><a href="my-matches.html">Near Matches (22)</a></li>
                <li><a href="my-matches.html">Recent Viewed (18)</a></li>
            </ul>
        </div>  
    </div>
    <MyMatches/>
</>
  )
}

export default MatchsNavBar;