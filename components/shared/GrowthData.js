import React from 'react'
import Image from 'next/image'
import consultants from '../../public/assets/growth/consultants.png'
import offices from '../../public/assets/growth/offices.png'
import year from '../../public/assets/growth/year.png'
import customers from '../../public/assets/growth/customers.png'

const GrowthData = () => {
    return (
        <div className="growth container">
            <div className="growth-wrapper">
                <div className="growth-consultants">
                    <span className="growth-divider"></span>
                    <div className="growth-consultants--icon">
                        <Image
                            src={consultants}
                        />
                    </div>
                    <div className="growth-block">
                        <span className="growth-block--data">+3,500</span>
                        <span className ="growth-block--text">Consultants</span>
                    </div>
                </div>
                <div className="growth-offices">
                    <span className="growth-divider"></span>

                    <div className="growth-offices--icon">
                        <Image
                            src={offices}
                        />
                    </div>
                    <div className="growth-block">
                        <span className="growth-block--data">15</span>
                        <span className="growth-block--text">Offices</span>
                    </div>
                </div>
                <div className="growth-year">
                    <span className="growth-divider"></span>
                    <div className="growth-year--icon">
                        <Image
                            src={year}
                        />
                    </div>
                    <div className="growth-block">
                        <span className="growth-block--data">Over 30%</span>
                        <span className="growth-block--text">Growth/year</span>
                    </div>
                </div>
                <div className="growth-customers">
                    <span className="growth-divider"></span>

                    <div className="growth-customers--icon">
                        <Image
                            src={customers}
                        />
                    </div>
                    <div className="growth-block">
                        <span className="growth-block--data">+ 100</span>
                        <span className="growth-block--text">Customers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowthData