
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CityCard from "./cityCard";

const cityCardItem = {
    temp:{min:300,max:350},
    weather:[
    {description:'string',
      icon: 'string',
      id: 324,
      main: 'das'
    }
]}

describe('Testing header component', () =>{
    test('should show the app title', () => {
        render(
        <BrowserRouter>
          <CityCard cityData={cityCardItem} />
        </BrowserRouter>
      )

      const minTempCalculated =  (cityCardItem.temp.min -273.15).toFixed(2)
      const maxTempCalculated =  (cityCardItem.temp.max -273.15).toFixed(2)
       const minTem = screen.getByTestId('min-temp')
       const maxTem = screen.getByTestId('max-temp')
       expect(minTem).toHaveTextContent(minTempCalculated)
       expect(maxTem).toHaveTextContent(maxTempCalculated)
    });
    
})