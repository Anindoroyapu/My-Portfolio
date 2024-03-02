import React from "react";
import './hire.css';


const Hire = ()=>{
    return(
        <section id="hire">
            <section class="pricing">
        <div class="container-sm">
            <div class="pricing-grid">
                <div class="card free bg-light">
                    <div class="pricing-card-header">
                        <h4 class="pricing-heading text-xl">
                            Simple
                        </h4>
                        <p class="pricing-card-subheading">
                            Keep Track of your contacts, gain valiable insights, analyse
                            live data and perfromances metrics.
                        </p>
                        <p class="pricing-card-price">
                            <span class="text-xl">Free</span>
                            *No credit card needed
                        </p>
                    </div>
                    <div class="pricing-card-body">
                        <ul>
                            <li>
                                <i class="fas fa-check">
                                </i>
                            Real-Time Monitoring
                        </li>
                        <li>
                            <i class="fas fa-check">
                            </i>
                        Track key performance indicators
                    </li>
                    <li>
                        <i class="fas fa-check">
                        </i>
                    Schedule appointments
                </li>
                <li>
                    <i class="fas fa-check">
                    </i>
                Organize,delegate and keep track of tasks
            </li>

                        </ul>
                        <a href="" class="btn btn-primary btn-block">Get Started</a>
                    </div>
                </div>
                
                <div class="card premium bg-black">
                    <div class="pricing-card-header">
                        <h4 class="pricing-heading text-xl">
                            Premium
                        </h4>
                        <p class="pricing-card-subheading">
                            Keep Track of your contacts, gain valiable insights, analyse
                            live data and perfromances metrics.
                        </p>
                        <p class="pricing-card-price">
                            <span class="text-xl">$99</span>
                            /month
                        </p>
                    </div>
                    <div class="pricing-card-body">
                        <p>Everything from the free plan plus:</p>
                        <ul>
                            <li>
                                <i class="fas fa-check">
                                </i>
                            Data driven Decisions
                        </li>
                        <li>
                            <i class="fas fa-check">
                            </i>
                        Data visualization
                    </li>
                    <li>
                        <i class="fas fa-check">
                        </i>
                    Schedule appointments
                </li>
                        </ul>
                        <a href="" class="btn btn-primary btn-block">Get Started</a>
                    </div>
                </div>
                

            </div>
            <p class="pricing-footer text-center">
                All price are in USD and charged per month with applicable taxas
                addes at checkout.
            </p>


        </div>

    </section>
        </section>
    )
}
export default Hire;