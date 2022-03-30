import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchBox } from "components/common/searchbox";
import { ForecastContext } from "context";
import {initialContextobj} from 'context'
import { BrowserRouter } from "react-router-dom";

describe('<SearchBox />',()=>{
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
    const state = {
        ...initialContextobj,
      };
  
        render(
            <BrowserRouter>     
          <ForecastContext.Provider value={state}>
            <SearchBox />
          </ForecastContext.Provider>
            </BrowserRouter>
        );

    test('Should render the correct number of items searched',async ()=>{
        expect(state.getSearchedCities.length).toBe(0)
        const searchboxInput = screen.getByPlaceholderText('Enter a city')
        expect(screen.getByRole('button')).toBeInTheDocument()
        fireEvent.change(searchboxInput, {target: {value: 'lima'}})
        await waitFor(() => {
        expect(screen.getByDisplayValue('lima')).toBeInTheDocument()
          });

    })
})