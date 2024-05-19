import React from 'react';
import '../styles/TrainBooking.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';


const TrainBooking = () => {
    const navigate = useNavigate();

    const modifySearch = () => {
        navigate('/main');
  };
    
  

    const bookNow = () => {
        navigate('/booking');
  };

  return (
    <>
      <header>
        
        <nav class="navbar navbar-expand-lg navbar-light nav-yellow  border-bottom border-top p-0">
            <div class="container">
                <a class="navbar-brand fs-4 fw-bold " href="#"><i class="fa fa-cart-shopping fs-4"></i><span class="text-white">
                        Railways
                    </span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0  text-center ">

                        <li class="nav-item">
                            <a class="nav-link fw-semibold text-white  me-1" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold text-white  me-1" href="#">Trains</a>
                        </li>
                      


                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container-fluid bg-black p-4">
         <div class="row">
            <div class="col-4 px-4">
                <select class="form-select">
                    <option value="">Pune</option>
                </select>
            </div>
            <div class="col-4 px-4">
                <select class="form-select">
                    <option value=""> Nagpur </option>
                </select>
            </div>
            <div class="col-2 px-2">
                <input type="text" class="form-control" value="12-12-2023" /> 
            </div>
            <div class="col-2 text-end">
                <button type="button" class="btn btn-primary btn-sm" onClick="modifySearch()">Modify Search</button>
            </div>
         </div>
    </div>
    <div class="container-fluid pt-2">
        <div class="row">
            <div class="col-6 mt-2">
                <div class="card">
                    <div class="card-header bg-black text-white">
                        NGP HUMSAFAR EX (22141)
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-5">
                                22:00 | PUNE JN | Thu, 30 Nov
                            </div>
                            <div class="col-2">
                              15:05 hrs  
                            </div>
                            <div class="col-5 text-end">
                                13:05 | NAGPUR | Fri, 01 Dec
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" onClick={bookNow}>Book Now</button>
                      
                    </div>
                </div>
            </div>
            <div class="col-6 mt-2">
                <div class="card">
                    <div class="card-header bg-black text-white">
                        HOWRAH DURONTO (12221)
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-5">
                                15:15 | PUNE JN | Thu, 30 Nov
                            </div>
                            <div class="col-2">
                            12:55 hrs 
                            </div>
                            <div class="col-5 text-end">
                                04:10 | NAGPUR | Fri, 01 Dec
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" onClick={bookNow}>Book Now</button>
                    </div>
                </div>
            </div>
            <div class="col-6 mt-2">
                <div class="card">
                    <div class="card-header bg-black text-white">
                        PUNE SRC HUMSAFAR (20821)
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-5">
                                10:40 | PUNE JN | Thu, 30 Nov
                            </div>
                            <div class="col-2">
                            14:40 hrs 
                            </div>
                            <div class="col-5">
                                01:20 | NAGPUR | Fri, 01 Dec
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" onClick={bookNow}>Book Now</button>
                    </div>
                </div>
            </div>
            <div class="col-6 mt-2">
                <div class="card">
                    <div class="card-header bg-black text-white">
                        AZAD HIND EXPRESS (12129)
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-5">
                                18:35 | PUNE JN | Thu, 30 Nov
                            </div>
                            <div class="col-2">
                            15:15 hrs 
                            </div>
                            <div class="col-5">
                                09:50 | NAGPUR | Fri, 01 Dec
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" onClick={bookNow}>Book Now</button>
                    </div>
                </div>
            </div>
            <div class="col-6 mt-2">
                <div class="card">
                    <div class="card-header bg-black text-white">
                        NGP GARIBRATH (12113)
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-5">
                                17:35 | PUNE JN | Thu, 30 Nov
                            </div>
                            <div class="col-2">
                            15:35 hrs 
                            </div>
                            <div class="col-5">
                                09:10 | NAGPUR | Fri, 01 Dec
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" onClick={bookNow}>Book Now</button>
                    </div>
                </div>
            </div>
            <div class="col-6 mt-2">
                <div class="card">
                    <div class="card-header bg-black text-white">
                        MAHARASHTRA EXPRESS (11039)
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-5">
                                22:25 | PUNE JN | Thu, 30 Nov
                            </div>
                            <div class="col-2">
                              17:00 hrs   
                            </div>
                            <div class="col-5 text-end">
                                15:25 | NAGPUR | Fri, 01 Dec
                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal" onClick={bookNow}>Book Now</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>
  );
};

export default TrainBooking;
