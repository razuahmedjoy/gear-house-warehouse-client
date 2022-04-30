import React from 'react';
import Slider from 'react-slick/lib/slider';
import './TeamMembers.css'
const TeamMembers = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const singleMemberBg = {
        background: "linear-gradient(181deg, #a961ffb5, #5f6ef3)",
        color: "#fff"
    }

    const members = [
        {name:"John Doe", image:"", designation:"Quaility Checker"},
        {name:"Ron Paul", image:"", designation:"Stock Manager"},
        {name:"Picky Riot", image:"", designation:"Dealership Manager"},
        {name:"Hienen jiu", image:"", designation:"Business Analytics"},
        {name:"Sakibul Haque", image:"", designation:"Maintainance"},
    ]
    return (
        <div>

            <Slider {...settings}>
                {
                    members.map((member, index) =>
                        <div key={index} className="single-member p-5 flex justify-center items-center text-center gap-5">
                            <div style={singleMemberBg} className="p-5 rounded-3xl">
                                <div className="text-center d-flex justify-center items-center mb-4">
                                    <img width="80px" height="80px" className="rounded-full text-center mx-auto border-[6px] shadow-md border-white" src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png" alt="avatar" />
                                </div>
                                <p className="font-bold">{member.name}</p>
                                <p className="text-xs mt-2 font-bold">{member.designation}</p>
                            </div>


                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default TeamMembers;