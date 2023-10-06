import React, {useEffect} from 'react'


import 'bootstrap/dist/css/bootstrap.css'; 
import "bootstrap/dist/js/bootstrap.min.js";

const Help = () => {
   
   
    useEffect(() => {
        document.title = `Help - NewsFetcher`;
        // eslint-disable-next-line
    }, [])

    return (
        <>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Frequently Asked Questions </h1>
      <div className="  container " >
      <div id="accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Is there a option for region specific news?
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        For now no. But it will be added in future.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Does news get updated in real time?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
     Yes , every time you refresh there will be a updated feed.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Do we need to pay for this service?
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
     No, this service is completely free and you can access it from any device you just need a browser.
      </div>
    </div>
  </div>
</div>
           </div>

           <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '50px' }}>For more queries contact us on:</h2>
        
           <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

                        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div className="contact_info_image mx-2"><img src="https://img.icons8.com/office/24/000000/iphone.png" alt=""/></div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">Phone</div>
                                <div className="contact_info_text">+91 9876 543 4195</div>
                            </div>
                        </div>

                        
                        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div className="contact_info_image mx-2"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt=""/></div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">Email</div>
                                <div className="contact_info_text">globalnews@example.com</div>
                            </div>
                        </div>

                       
                        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div className="contact_info_image mx-2"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt=""/></div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">Address</div>
                                <div className="contact_info_text">298,Menlo Park,CA,USA</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
        
        </>
    )

}

export default Help
