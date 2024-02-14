import React from 'react'
import './plan.css';

const PlanPart = () => {
  return (
    <div className='plns' id='plans'>
        <h2>Pick Your Plan</h2>
        <p>Choose a plan that suits your needs</p>
        <div className="flex-container1">
            <div className="flex-items">
                <h3>Free Plan</h3>
                <p>Watch with ads.</p>
                <p>Episode watch limit.</p>
                <p>Video might buffer.</p>
                <p>Servers may occassionally be down.</p>
                <button>Continue Watching</button>
            </div>
            <div className="flex-items">
                <h3>Base Plan</h3>
                <p>Watch without ads..</p>
                <p>Low buffering.</p>
                <p>No episode watch limit.</p>
                <p>Watch only on 2 devices.</p>
                <button className='base'>Pay $10.00/Month</button>
            </div>
            <div className="flex-items">
            <h3>Ultra Plan</h3>
                <p>Watch without ads.</p>
                <p>No buffering.</p>
                <p>No episode watch limit.</p>
                <p>Watch on upto 4 devices.</p>
                <button className='ultra'>Pay $20.00/Month</button>
            </div>
        </div>
    </div>
  )
}

export default PlanPart