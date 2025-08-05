import Switch from "@mui/material/Switch";
import { useState } from "react";
import ServicesItem from "../components/ServicesItem";
import { Link } from "react-router";

export default function Services() {
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleSelect = (mvs: string) => {
    setSelectedIcon(prev => (prev === mvs ? null : mvs));
  };


  return (
    <div className="min-h-screen w-full bg-cyan-50">
      <div className="flex flex-col justify-center text-center items-center py-20 px-5 gap-5">
        <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
        <p className="font-light text-xl">
          Request a report to avoid bad deals, sell faster, or find out whether your vehicle is safe.
        </p>

        <div className="flex justify-center items-center mt-10">
          <Switch
            checked={checkedSwitch}
            onChange={(e) => setCheckedSwitch(e.target.checked)}
            slotProps={{ input: { "aria-label": "controlled" } }}
          />
          <p className="font-bold">Show prices for businesses</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-20 gap-10">
        <ServicesItem
          mvs={checkedSwitch ? "30" : "3"}
          pricePerReport={checkedSwitch ? "17,65" : "27,99"}
          yourPay="83,97"
          noDiscountPay={checkedSwitch ? "1529,70 €" : "152,97 €"}
          discount={ checkedSwitch ? "65" :"45"}
          checked={selectedIcon === '3'}
          onSelect={() => handleSelect('3')}
        />
        <ServicesItem
          mvs={checkedSwitch ? "10" : "2"}
          pricePerReport={checkedSwitch ? "19,50" : "32,99"}
          yourPay={checkedSwitch ? "195" : "65,98"}
          noDiscountPay={checkedSwitch ? "509,90 €" : "101,98 €"}
          discount={checkedSwitch ? "62" : "35"}
          checked={selectedIcon === '2'}
          onSelect={() => handleSelect('2')}
        />
        <ServicesItem
          mvs={checkedSwitch ? "100" : "1"}
          pricePerReport={checkedSwitch ? "15,65" : "50,99"}
          yourPay={checkedSwitch ?  "1565" : "50,99"}
          noDiscountPay={checkedSwitch ? "5099 €" : "50,99 €"}
          discount={checkedSwitch ? "69" : "0"}  
          checked={selectedIcon === '1'}
          onSelect={() => handleSelect('1')}
        />
      </div>
      <div className="flex justify-center items-center py-10">
      <Link className='px-10 md:px-25 py-2 text-white rounded-2xl bg-amber-300' to='/contacts'>Continue</Link>
      </div>
    </div>
  );
}
