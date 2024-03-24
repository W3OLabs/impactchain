import React from 'react'

const targetOptions = [
  {
    id: 1,
    name: "No Poverty",
    icon: "/target/4.svg"
  },
  {
    id: 2,
    name: "Zero Hunger",
    icon: "/target/5.svg"
  },
  {
    id: 3,
    name: "Good Health and Well-being",
    icon: "/target/6.svg"
  },
  {
    id: 4,
    name: "Quality Education",
    icon: "/target/7.svg"
  },
  {
    id: 5,
    name: "Gender Equality",
    icon: "/target/7.svg"
  },
  {
    id: 6,
    name: "Clean Water and Sanitation",
    icon: "/target/8.svg"
  },
  {
    id: 7,
    name: "Affordable and Clean Energy",
    icon: "/target/9.svg"
  },
  {
    id: 8,
    name: "Decent Work and Economic Growth",
    icon: "/target/12.svg"
  },
  {
    id: 9,
    name: "Industry, Innovation and Infrastructure",
    icon: "/target/14.svg"
  },
  {
    id: 10,
    name: "Reduced Inequality",
    icon: "/target/15.svg"
  },
  {
    id: 11,
    name: "Sustainable Cities and Communities",
    icon: "/target/15.svg"
  },
  {
    id: 12,
    name: "Responsible Consumption and Production",
    icon: "/target/16.svg"
  },
  {
    id: 13,
    name: "Climate Action",
    icon: "/target/17.svg"
  },
  {
    id: 14,
    name: "Life Below Water",
    icon: "/target/18.svg"
  },
  {
    id: 15,
    name: "Life on Land",
    icon: "/target/19.svg"
  },
  {
    id: 16,
    name: "Peace, Justice and Strong Institutions",
    icon: "/target/20.svg"
  },
  {
    id: 17,
    name: "Partnerships for the Goals",
    icon: "/target/21.svg"
  },
];

const ImpactTarget = () => {
  return (
    <div>
        <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
        What Impact are you targeting?
      </h3>
      <div
        className="grid grid-cols-6 gap-4 mt-6"
      >
        {targetOptions.map((target) => (
          <div
            key={target.id}
            className="rounded-lg flex items-center justify-center"
          >
            <img src={target.icon} alt={target.name} />
          
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default ImpactTarget