import { render, screen } from "@testing-library/react";
import { ForecastContext } from "context";
import { CitiesTable } from "./table";
import {initialContextobj} from 'context'
import { mockArr } from "./mockdata";
import { BrowserRouter } from "react-router-dom";


describe('<CitiesTable />',()=>{

    const state = {
        ...initialContextobj,
        getSearchedCities: mockArr,
      };
  
        render(
            <BrowserRouter>     
          <ForecastContext.Provider value={state}>
            <CitiesTable />
          </ForecastContext.Provider>
            </BrowserRouter>
        );

    test('Should render the correct number of items searched',()=>{
        const tableItems = screen.getAllByTestId('table-item')
        expect(tableItems.length).toBe(2)
    })
})