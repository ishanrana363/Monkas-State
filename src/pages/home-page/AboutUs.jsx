import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section className="bg-pink-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Clients speak volumes <span className="text-orange-500">about us</span>
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Listen to the stories of our satisfied clients, sharing their experiences
                            and successes with our exceptional real estate services.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className=" mb-4">
                                <img
                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732465310/Image_6_hhf93a.png"
                                    alt="Michael Thompson"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-sm mb-3">
                                "Top-notch real estate service, always available with expert guidance. Highly professional and truly dedicated to clients' needs."
                            </p>
                            <div className="text-start flex justify-between items-center ">
                                <div>
                                    <h4 className="text-gray-800 font-semibold">Michael Thompson</h4>
                                    <p className="text-gray-500 text-sm">Software Engineer</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-gray-300">
                                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732465170/Elelments_jh9xy0.png" alt="" />
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className=" mb-4">
                                <img
                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732465309/Image_7_yiy7ew.png"
                                    alt="Michael Thompson"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-sm mb-3">
                            "Dedicated real estate experts, always ready to help. Their support was invaluable throughout my buying experience."
                            </p>
                            <div className="text-start flex justify-between items-center ">
                                <div>
                                    <h4 className="text-gray-800 font-semibold">Daniel Martinez</h4>
                                    <p className="text-gray-500 text-sm">Product Designer</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-gray-300">
                                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732465170/Elelments_jh9xy0.png" alt="" />
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className=" mb-4">
                                <img
                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732465310/Image_8_cwjj61.png"
                                    alt="Michael Thompson"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-sm mb-3">
                            "Fantastic real estate experience. The team was professional, responsive,
                            and genuinely focused on my needs."
                            </p>
                            <div className="text-start flex justify-between items-center ">
                                <div>
                                    <h4 className="text-gray-800 font-semibold">Michael Smith</h4>
                                    <p className="text-gray-500 text-sm">Medical Officer</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-gray-300">
                                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732465170/Elelments_jh9xy0.png" alt="" />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Dots for Slider (Optional) */}
                    <div className="flex justify-center mt-6">
                        <div className="h-2 w-2 bg-orange-500 rounded-full mx-1"></div>
                        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
                        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs